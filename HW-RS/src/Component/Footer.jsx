import React from 'react'
import './footer.css';
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
    <div className="footer-logo">
            <img src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png" alt="Riyadh Season Logo" />
        </div>
        
        <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <img src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&w=55&h=55" alt="" srcset="" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&w=55&h=55" alt="" srcset="" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&w=55&h=55" alt="" srcset="" /></a>
        </div>
    
       
    </div>
    <hr />
    <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
        </div>
    <div className="footer-bottom">
        <hr />
        <p>Copyright &copy; 2023 RIYADH SEASON. All rights reserved.</p>
    </div>
</footer>
);
};   

export default Footer