import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainScreen.css';
import MyComponent from './MyComponent';

const MainScreen = () => {
  return (
    <div className="main-screen-container">
      <h2>Octave</h2>
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
      <div>
        <button type="button" className="btn btn-primary">New Session</button>
      </div>
    </div>
  );
};

export default MainScreen;
