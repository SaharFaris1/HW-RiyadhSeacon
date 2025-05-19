import React from 'react';
import './watchRS.css';

function WatchRS() {
    return (
 <div className="video-section">
                <div className="watch">
                    <img 
                        src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&w=70&h=70" 
                        width="100px" 
                        alt="" 
                    />
                    <h2 className="title-season">Watch Riyadh Season 2023 Recap</h2>
                    <button className="watch-button">Watch more moments</button>
                </div>
                <div className="video-container">
                    <iframe
                        src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
                        title="Riyadh Season Recap"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                        allowFullScreen
                    ></iframe>
                </div>

        </div>
       

 
    );
}

export default WatchRS;