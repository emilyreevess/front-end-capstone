import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = ({ buttonText }) => {
  return (
    <Link to="/sheetmusic" className="btn btn-link">
      {buttonText}
    </Link>
  );
};

export default MyComponent;

