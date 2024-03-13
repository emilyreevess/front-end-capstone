import React, { useState, useRef } from 'react';

const AudioRecorderComponent = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [showAnalyze, setAnalyze] = useState(false)
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
    </div>
  );
};

export default AudioRecorderComponent;