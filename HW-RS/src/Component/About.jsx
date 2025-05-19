import React from 'react'
import './about.css'; 
function About() {
    return (
        <section className="about-RS">
        <div className="container-about">
          <div className="about-grid">
            <div className="info-grid">
              <div className="logo-box about-card">
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/3Psaka2Ja20ebl34oSkWs5/2a7e698f9f5d84ff29351ad9eb39bde5/Logo_icon.svg?fm=webp&w=150&h=150"
                  alt="Plain logo"
                  className="about-logo"
                />
              </div>
              <div className="text-box about-card">
                <h2 className="about-title">About Riyadh Season</h2>
                <p className="about-description">
                  Riyadh Season is one of the world’s largest winter entertainment
                  events. A variety of food from around the world, courtesy of
                  exclusive restaurants — plus countless exciting surprises. The
                  festivities capture the essence of Saudi, from its Najdi heritage
                  to its present-day dynamism.
                </p>
              </div>
              <div className='date-box about-card'></div>

              <div className="date-box about-card">
              
                <div className="date-content">
                 <h2>Start 12 October</h2>
                </div>
              </div>
            </div>
            <div className="video-box ">
              <iframe
                title="RS Promo 2023"
                src="https://www.youtube.com/embed/g8-NjAOWhME?autoplay=1"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="about-video"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default About