import React, { useState } from 'react';
import UploadButton from './UploadButton.png'; // Import the UploadIcon.png file

const UploadFile = ({setApiResponse}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);


  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setSelectedFile(event.target.files[0]);
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      if (file) {
        // File has been uploaded, proceed with your upload logic
        console.log('File uploaded:', file);
      } else {
        // File has not been uploaded, handle accordingly
        console.log('Please upload a file before analyzing.');
      }

      const response = await fetch('http://127.0.0.1:5000/process-audio', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        console.log('File uploaded successfully:', result);
        setApiResponse(result.result);
      } else {
        console.error('File upload failed:', result);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <label htmlFor="file-upload">
        <img src={UploadButton} alt="Upload Icon" />
        <input id="file-upload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      </label>
      {file && (
      <button
        onClick={handleUpload}
        style={{
          backgroundColor: '#5E38BA',
          color: 'white',
          borderRadius: '50px',
          padding: '8px 16px',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          bottom: '20px',
          right: '15px',
        }}
      >
        See how you did!
      </button>
    )}    
    </div>
  );
};

export default UploadFile;
