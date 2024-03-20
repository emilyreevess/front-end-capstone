import React, { useState, useRef } from 'react';
import Modal from './Modal';
import LinearProgress from '@mui/material/LinearProgress';

const AudioRecorderComponent = ({apiResponse, setApiResponse}) => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [showAnalyze, setAnalyze] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioElement = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunks.push(e.data);
          }
          setAudioChunks(audioChunks);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);

          audioElement.current.src = audioUrl;
          audioElement.current.controls = true;

          setRecording(false);
        };

        recorder.start();
        setMediaRecorder(recorder);
        setRecording(true);
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setAnalyze(true)
    }
  };

  const analyze = () => {

    const audioBlob = new Blob(audioChunks);
    const formData = new FormData();
    formData.append('file', audioBlob);

    const endpoint = 'http://127.0.0.1:5000/process-audio';

    fetch(endpoint, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Audio uploaded successfully:', data);
        setApiResponse(data.result);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error('Error uploading audio:', error);
      });

      setAudioChunks([]);
      setAnalyze(false)
  }
// display: 'flex', flexDirection: 'column', style={{alignItems: 'center' }}
//style={{ position: 'absolute', left: '0', transform: 'translateX(-50%)', bottom: '10px', textAlign: 'center', maxWidth: '500px' }}
  return (
    <div >
      <div>
        <div style={{ width: '100%' }}>
          <button onClick={recording ? stopRecording : startRecording} style={{ borderRadius: recording ? '10px' : '30px', backgroundColor: recording ? "rgb(225, 96, 77)" : "rgb(225, 96, 77)", width: recording ? '30px' : '30px', height: recording ? '30px' : '30px', border: "none" }}>
            {/* Empty string */}
          </button>
          {recording ? <LinearProgress style={{ width: '100%' }} /> : null}
        </div>
        <div>
          <audio ref={audioElement} controls />
        </div>
      </div>
      {showAnalyze && <button onClick={analyze} style={{
          backgroundColor: '#5E38BA',
          color: 'white',
          borderRadius: '50px',
          padding: '8px 16px',
          border: 'none',
          cursor: 'pointer',
        }}>See how you did!</button>}
      <div>
        {isModalOpen && <Modal apiResponse={apiResponse}></Modal>}
      </div>
    </div>
  );
};

export default AudioRecorderComponent;