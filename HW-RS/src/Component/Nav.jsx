import React from 'react'
import './nav.css';
function Nav() {
  return (
    <header className='nav-bar' style={{ color: "white", padding: "1rem", textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", height: '10vh' }}>
    <img src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg" width='60'/>
       
       
    <img src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110" width={"60"} alt="" />               
        
    <nav>
            <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-around", color: "white" , gap:"2rem"}}>
            <li><a className='languages' href="# " style={{color:"white",textDecoration:"none"}}>العربية </a></li>
            <button className="button">Book Booklet</button>            
                </ul>


        </nav>

</header>
  )
}

export default Nav