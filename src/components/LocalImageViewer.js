import React, { useEffect, useState } from 'react';
import AudioRecorderComponent from './AudioRecorderComponent';
import UploadFile from './UploadFile';
import { red } from '@mui/material/colors';

const LocalImageViewer = ({ apiResponse, setApiResponse }) => {
  const [scale, setScale] = useState(1);
  const [isHovered, setIsHovered] = useState(null);
  const [visibleDivs, setVisibleDivs] = useState([]);

  useEffect(() => {
    // Directly set the visible divs based on the apiResponse array
    if (apiResponse && Array.isArray(apiResponse)) {
      setVisibleDivs(apiResponse);
    }
  }, [apiResponse]);

  const updateScale = () => {
    const originalWidth = 791; 
    const container = document.querySelector('.image-container');
    if (container) {
      const currentWidth = container.offsetWidth;
      const newScale = currentWidth / originalWidth;
      setScale(newScale);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleOverlayClick = (message) => {
    alert(`Correct your notes for ${message}`);
   // <MessageModal></MessageModal>
  };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const divs = [
    //row 1
    {
      top: 163,
      left: 53,
      width: 150,
      height: 95,
      message: 'Bar 1',
    },
    {
      top: 163,
      left: 204,
      width: 106,
      height: 95,
      message: 'Bar 2',
    },
    {
      top: 163,
      left: 311,
      width: 106,
      height: 95,
      message: 'Bar 3',
    },
    {
      top: 163,
      left: 418,
      width: 106,
      height: 95,
      message: 'Bar 4',
    },
    {
      top: 163,
      left: 525,
      width: 106,
      height: 95,
      message: 'Bar 5',
    },
    {
      top: 163,
      left: 632,
      width: 106,
      height: 95,
      message: 'Bar 6',
    },
    //row 2
    {
      top: 356,
      left: 53,
      width: 156,
      height: 95,
      message: 'Bar 7',
    },
    {
      top: 356,
      left: 210,
      width: 85,
      height: 95,
      message: 'Bar 8',
    },
    {
      top: 356,
      left: 296,
      width: 110,
      height: 95,
      message: 'Bar 9',
    },
    {
      top: 356,
      left: 406,
      width: 110,
      height: 95,
      message: 'Bar 10',
    },
    {
      top: 356,
      left: 517,
      width: 110,
      height: 95,
      message: 'Bar 11',
    },
    {
      top: 356,
      left: 628,
      width: 110,
      height: 95,
      message: 'Bar 12',
    },
    //row 3
    {
      top: 548,
      left: 53,
      width: 136,
      height: 95,
      message: 'Bar 13',
    },
    {
      top: 548,
      left: 189,
      width: 106,
      height: 95,
      message: 'Bar 14',
    },
    {
      top: 548,
      left: 296,
      width: 122,
      height: 95,
      message: 'Bar 15',
    },
    {
      top: 548,
      left: 419,
      width: 106,
      height: 95,
      message: 'Bar 16',
    },
    {
      top: 548,
      left: 525,
      width: 106,
      height: 95,
      message: 'Bar 17',
    },
    {
      top: 548,
      left: 632,
      width: 106,
      height: 95,
      message: 'Bar 18',
    },
    //row 4
    {
      top: 740,
      left: 53,
      width: 139,
      height: 95,
      message: 'Bar 19',
    },
    {
      top: 740,
      left: 193,
      width: 109,
      height: 95,
      message: 'Bar 20',
    },
    {
      top: 740,
      left: 302,
      width: 109,
      height: 95,
      message: 'Bar 21',
    },
    {
      top: 740,
      left: 412,
      width: 109,
      height: 95,
      message: 'Bar 22',
    },
    {
      top: 740,
      left: 522,
      width: 125,
      height: 95,
      message: 'Bar 23',
    },
    {
      top: 740,
      left: 648,
      width: 88,
      height: 95,
      message: 'Bar 23',
    },
  ];

  return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style = {{position:'fixed', textAlign: 'left', width:'auto',}}>
          <button type="button" class="btn btn-light" style={{ marginLeft: '20px', marginTop: '20px', width: '100px' }}>Back</button>
        </div>
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#EBEEF2' }}>
          <div className="image-container" style={{ position: 'relative', maxHeight: '90vh', overflow:'auto' }}>
            <img
              src='/GroundTruthTwinkleTwinkle.jpg'
              alt="JPG Viewer"
              style={{ width: 'auto', maxHeight: '100vh' }}
              onLoad={updateScale}
            />
            {divs.map((div, index) => {
              // Adjust index by 1 for 1-based indexing to match API response
              if (visibleDivs.includes(index + 1)) {
                return (
                  <div
                    key={index}
                    onClick={() => handleOverlayClick(div.message)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      position: 'absolute',
                      top: div.top * scale + 'px',
                      left: div.left * scale + 'px',
                      width: div.width * scale + 'px',
                      height: div.height * scale + 'px',
                      backgroundColor: isHovered === index ? 'rgba(223, 189, 226, 0.7)' : 'rgba(233, 199, 236, 0.5)',
                      transition: 'background-color 0.3s ease',
                    }}
                  ></div>
                );
              }
              return null;
            })}
            </div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: '#fff', // Solid white background
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', // Center horizontally
              boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
              zIndex: 10, // Ensure it's above the background content
            }}>
              <div style={{ position: 'absolute', bottom: 20, left: 20}}>
                <UploadFile scale={scale} apiResponse={apiResponse} setApiResponse={setApiResponse}/>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <AudioRecorderComponent scale={scale} apiResponse={apiResponse} setApiResponse={setApiResponse}/>
              </div>
            </div>
          </div>
        </div>
  );
};

export default LocalImageViewer;