import React from 'react'
import './VideoBackground.css';
import Nav from './Nav';
function VideoBackground() {
  return (

<div className="video-container">
    <Nav/>

      <video
        className="video"
        playsInline
        disablePictureInPicture
        autoPlay
        loop
        muted
      >
        <source src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4" type="video/mp4" />
      </video>

     

      <div className="overlay">

      
        <div className="buttons" style={{ width: '90%',display: 'flex', justifyContent:'space-between', height: '1vh'}}>
        <p className="welcome-text" >Welcome to Riyadh Season 2024</p>
        <div>
        <a className='languages' href="# " style={{color:"white",textDecoration:"none", fontSize:'1rem'}}>Explore </a>

          <button className="button">Book Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VideoBackground