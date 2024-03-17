import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainScreen.css';
import MyComponent from './MyComponent';
import logo from './logo.png'; // imported octave logo 

const MainScreen = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logomain" />
      </div>
      <div className="main-screen-container">
        <h2>Welcome back, Jane!</h2>
        <p className="small-text">
          Pick or add a song to start playing. Practice makes perfect!
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Session Name</th>
                    <th scope="col">Last Accessed</th>
                    <th scope="col">Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><MyComponent buttonText='Twinkle Twinkle Little Star'/></td>
                    <td>March 1st</td>
                    <td>March 5</td>
                  </tr>
                  <tr>
                    <td><button type="button" className="btn btn-link">Mary Had A Little Lamb</button></td>
                    <td>March 2nd</td>
                    <td>March 5th</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', marginRight: '20px' }}>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: '#5E38BA', borderRadius: '50px' }}> + Add a new song</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-section my-songs">My songs</div>
        <div className="footer-section">My Progress</div>
        <div className="footer-section">Profile</div>
      </div>
    </div>
  );
};

export default MainScreen;
