import { margin } from '@mui/system';
import React, { useState, useEffect } from 'react';
import './Modal.css';

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

function getRandomSentenceWithHeader() {
  const sentencesWithHeaders = [
    { header: "Good Effort!", sentence: "Octo found some ways to improve your playing - Follow Octo's practice tips below to perfect this song!" },
    { header: "You're almost there…", sentence: "A few quick fixes and you'll be golden!" },
    { header: "Keep up the fantastic work!", sentence: "Practice makes perfect, keep going and you will get there." },
    { header: "Wow! Great job!", sentence: "Octo likes your playing, take a look at what he has to say." },
    { header: "Fantastic effort! Keep practicing!", sentence: "Octo says that you're almost there. Just a few quick fixes and you got this!" },
    { header: "Bravo! You're a natural!", sentence: "Playing perfectly takes practice. Here are a few ways you can get better." },
    { header: "Keep going, practice makes perfect!", sentence: "You are on your way. Here's what Octo has to say." },
    { header: "Keep going, you're amazing!", sentence: "Octo is loving what he is hearing, but there are a few things that could be fixed." },
    { header: "Amazing progress!", sentence: "Practice makes perfect, follow Octo's advice to get better!" },
    { header: "You're a musical superstar!", sentence: "Shine brighter by following Octo's advice." }
  ];
  const randomIndex = Math.floor(Math.random() * sentencesWithHeaders.length);
  return sentencesWithHeaders[randomIndex];
}

function getRandomSentence() {
  const sentences = [
    "Your notes don’t sound quite right. Play this section again. Can you tell which notes are wrong?",
    "Try playing hands separately to spot your mistakes on your own.",
    "Play hands separately. First, just your right hand 5 times, then your left hand 5 times.",
    "Get better at this section by playing it all staccato five times, then legato five times, then normally five times.",
    "Play this section at 50% speed three times, then normal speed five times.",
    "Play this one bar at a time. Repeat each bar 3 times before moving to the next.",
    "Play this section with just your right-hand staccato 5 times, then repeat it with your left.",
    "Listen to Octo play this section. Then play it on your own.",
    "Try playing this section with a metronome. How did that feel?",
    "Read each note out loud, then play this section again."
  ];
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

const Modal = ({ children, apiResponse }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [header, setHeader] = useState("");
  const [sentence, setSentence] = useState("");
  const [groupedNumbers, setGroupNumbers] = useState([]);
  const [randSentences, setRandSentences] = useState([]);

  useEffect(() => {
    // Group consecutive numbers in the API response
    const groupedNumbers = groupConsecutiveNumbers(apiResponse);
    const { header, sentence } = getRandomSentenceWithHeader();

    setHeader(header);
    setSentence(sentence);
    setGroupNumbers(groupedNumbers);

    const generatedSentences = groupedNumbers.map(() => getRandomSentence());
    setRandSentences(generatedSentences);
  }, [apiResponse]);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  let perfect = false;

  if (apiResponse.length === 0) {
    // Render custom message when API response is empty
    perfect = true;
  }

  if(perfect){
    return(
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Perfection!</h3>
        <h4>Great job, you're a superstar!</h4>
      </div>
    </div>
    ) 
  }
  else{
    return (
    <div className="modal-overlay" style = {{height: '400px', borderRadius: '32px 32px 0 0'}}>
      <div className="modal-content" style = {{height:'100%', position: 'absolute', paddingBottom: 0}}>
        <div className="feedback-title" style = {{display: 'flex', flexDirection:'column', gap: 8, paddingBottom: 24}}>
          <h3 className="feedback-title-header" style = {{fontSize: '32px', fontFamily: 'Helvetica, sans-serif', fontWeight:'bold',}}>{header}</h3>
          <h4>{sentence}</h4>
        </div>
        <div className="card-container" onScroll={handleScroll} style = {{height:'464px'}}>
          {groupedNumbers.map((group, index) => (
            <div key={index} className="card" style = {{display: 'flex', padding: '24px', backgroundColor: '#F4F6F9', borderLeft: '15px solid #5E38BA'}}> {/* Add 'card' class here */}
              <h3>Bar {group.length === 1 ? group[0] : `${group[0]} - ${group[group.length - 1]}`} : Correct your notes!</h3>
              <h4>{randSentences[index]}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );}
  
};

export default Modal;