import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainScreen.css';
import MyComponent from './MyComponent';
import logo from './logo.png'; // Imported Octave logo
import star from './star.png'; // Replace with your imported icons
import lamb from './lamb.png';
import stars from './stars.png';
import buns from './buns.png';

const MainScreen = () => {
  return (
    <div className="main-screen-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logomain" />
        </div>
    
        <h2>Welcome back, Jane!</h2>
        <p>Pick or add a song to start playing. Practice makes perfect!</p>
      </div>

      <div className="tab-bar">
        <div className="tabs">
          <div className="tab active">My Songs</div>
          <div className="tab">Archive</div>
        </div>
      </div>
      
      <div className="song-cards-container">
        <div className="song-card">
          <img src={star} alt="Twinkle Twinkle Little Star" className="song-icon" />
          <div className="song-details">
            <MyComponent buttonText='Twinkle Twinkle Little Star'/>
            <div className="song-last-played">Last played: Yesterday, 11:02 am</div>
          </div>
        </div>

        <div className="song-card">
          <img src={lamb} alt="Mary Had A Little Lamb" className="song-icon" />
          <div className="song-details">
            <div className="song-title">Mary Had A Little Lamb</div>
            <div className="song-last-played">Last played: February, 29th, 2024</div>
          </div>
        </div>

        <div className="song-card">
          <img src={stars} alt="Wish Upon A Star" className="song-icon" />
          <div className="song-details">
            <div className="song-title">Wish Upon A Star</div>
            <div className="song-last-played">Last played: February, 6th, 2024</div>
          </div>
        </div>

        <div className="song-card">
          <img src={buns} alt="Hot Cross Buns" className="song-icon" />
          <div className="song-details">
            <div className="song-title">Hot Cross Buns</div>
            <div className="song-last-played">Last played: January, 6th, 2024</div>
          </div>
        </div>

      </div> 
      <div style={{ textAlign: 'right', marginRight: '40px' }}>
        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#5E38BA', borderRadius: '100px' }}> + Add a new song</button>
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


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './MainScreen.css';
// import MyComponent from './MyComponent';
// import logo from './logo.png'; // imported octave logo 

// const MainScreen = () => {
//   return (
//     <div>
//       <div className="header">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <div className="main-screen-container">
//         <h2>Welcome back, Jane!</h2>
//         <p className="small-text">
//           Pick or add a song to start playing. Practice makes perfect!
//         </p>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th scope="col">Session Name</th>
//                     <th scope="col">Last Accessed</th>
//                     <th scope="col">Date Created</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td><MyComponent buttonText='Twinkle Twinkle Little Star'/></td>
//                     <td>March 1st</td>
//                     <td>March 5</td>
//                   </tr>
//                   <tr>
//                     <td><button type="button" className="btn btn-link">Mary Had A Little Lamb</button></td>
//                     <td>March 2nd</td>
//                     <td>March 5th</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <div style={{ textAlign: 'right', marginRight: '20px' }}>
//           <button type="button" className="btn btn-primary" style={{ backgroundColor: '#5E38BA', borderRadius: '50px' }}> + Add a new song</button>
//         </div>
//       </div>
//       <div className="footer">
//         <div className="footer-section my-songs">My songs</div>
//         <div className="footer-section">My Progress</div>
//         <div className="footer-section">Profile</div>
//       </div>
//     </div>
//   );
// };

// export default MainScreen;
