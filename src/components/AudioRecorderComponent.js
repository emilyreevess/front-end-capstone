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

  function groupConsecutiveNumbers(numbers) {
    const groups = [];
    let currentGroup = [numbers[0]];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] === currentGroup[currentGroup.length - 1] + 1) {
        currentGroup.push(numbers[i]);
      } else {
        groups.push(currentGroup);
        currentGroup = [numbers[i]];
      }
    }
    groups.push(currentGroup);
  
    return groups;
  }
  
  // Group consecutive numbers in the API response
  const groupedNumbers = groupConsecutiveNumbers(apiResponse);
  
  // Generate cards content
  const cardsContent = groupedNumbers.map((group, index) => (
    <div key={index}>
      <h3>Bar {group.length === 1 ? group[0] : `${group[0]} - ${group[group.length - 1]}`}</h3>
      <p>{group.join(', ')}</p>
    </div>
  ));

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>
      <audio ref={audioElement} controls />
      {showAnalyze && <button onClick={analyze}>Analyze Recording</button>}
      <div>
        {isModalOpen && <Modal cards={cardsContent}></Modal>}
      </div>
    </div>
  );
};

export default AudioRecorderComponent;