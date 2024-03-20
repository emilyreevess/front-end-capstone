import React, { useState, useRef } from 'react';
import Modal from './Modal';

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

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>
      <audio ref={audioElement} controls />
      {showAnalyze && <button onClick={analyze}>Analyze Recording</button>}
      <div>
        {isModalOpen && <Modal apiResponse={apiResponse}></Modal>}
      </div>
    </div>
  );
};

export default AudioRecorderComponent;