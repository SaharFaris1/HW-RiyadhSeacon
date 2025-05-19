import React from 'react'
import './cards.css';

const card = [
    {
      image: 'https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png?fm=webp&w=100&h=100',
      place: '',
      backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/744comOZgzZR956FHHezkj/1b2327913f0cfb682e4d5ff5aec5e0d7/KV-Webook-Sizes_1920x1280.jpg?fm=webp&w=1920&h=1280',
      isNew: false,
    },
    {
      image: 'https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png?fm=webp&w=100&h=100',
      place: '',
      backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/6WZxfQ5eX9TZ1urjkJXl7D/1689408a146ceafd94836286b40e856d/1920_x_1280_px.jpg?fm=webp&w=4000&h=2667',
      isNew: false,
    },
    {
      image: 'https://images.ctfassets.net/vy53kjqs34an/5OziW71cfEHu2ZHlpZE9r4/3cc7ce289cb04c9593c7fecfa29c026f/dior.png?fm=webp&w=100&h=100',
      place: '',
      backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/1MT98FGyScWEHf9dX62gz8/9a98ab13d43c5b8c6647c469a8f418d4/Webook_PAGE_COVER_1920x1280.jpeg?fm=webp&w=2000&h=1333',
      isNew: false,
    },

    {
      image: 'https://images.ctfassets.net/vy53kjqs34an/1rWTEO7FjOBMPvGdMdcHIv/6a131f379557983b8194e089286b534f/the_groves_3d_Gold.png?fm=webp&w=100&h=100' ,
      place: '',
      backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/2jvJyb2XNxX2z1E39sGpm3/fadb842560e3b36ba61dca54fea5c725/1920_x_1280_-1.jpg?fm=webp&w=1920&h=1280',
      isNew: false,
    },
      {
      image: 'https://images.ctfassets.net/vy53kjqs34an/5lYdlk9aE4Gm5BXPrBUS9u/985f3ecfb29612e70dd4b51261907e69/woncer_garden.png?fm=webp&w=100&h=100',
      description: '',
      backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/7nRL2vAAGvAfRR33GS2OBZ/d7a94d6f6cdc0db9149e8738a5dec25f/WG_without_logo_WG_1920x1280_.jpg?fm=webp&w=1920&h=1280',
      isNew: false,
    
    },
    {
        image: 'https://images.ctfassets.net/vy53kjqs34an/3ip6OxVwP8YhIKmTo2HF5B/1bcd099801ab242f6bd24b962f95e114/BLVD_Runway_logo__2.16.10_PM.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/3dYfq5STuwJzIOTAmZa5Ia/f8fe717f86d4b3bd3fa26087b26f4415/20241029_BRNY_1920_x_1280.png?fm=webp&w=1920&h=1280',
        isNew: false,
      
      },

      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/2x3IWScrpgS5qmSHdHO1ZZ/157d3b0ac07f573cb54838320cd3900a/logo_-_souq_alawaleen.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/LIy4NfRySd2Z2p0XE2HfD/1653053b057756734a8db40029afcc4b/1920_x_1280_fpx.jpg?fm=webp&w=4000&h=2667',
        isNew: false,
      
      },

      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/6z0n8tKquAhrZ1x7fGIjch/09670cb1d007288951b014e9c60b390d/via_ryiadh_logo.png?fm=webp&fit=pad&w=140&h=140',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/4r6HAvAFTChwVmsXOMao8L/bc52f6688a2766cc351b936c5efb1151/192www0_x_1280_px.jpg?fm=webp&w=4000&h=2667',
        isNew: false,
      
      },
      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/6eDxJWXdHS88l75iyavOxy/44228eeeda81be38cad907de431d2730/Group_17.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/23WQsIeyCJQRnsRHmeK5Tj/72e58e84ea87c9f1207f477c3a33a76f/1920_x_12g80_px.jpg?fm=webp&w=4000&h=2667',
        isNew: true,  
    },
      {

        image: 'https://images.ctfassets.net/vy53kjqs34an/2cwkQqOfarbvwKrRArrm0q/95b7ce8c48bca3c6e62fab086a2c8431/image__6_.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/EA2wJj5imUeDK9Vba9lVC/9f85a13aa2ac0a3ef6af5ba388d50ea1/1920_xq_1280_px.jpg?fm=webp&w=4000&h=2667',
        isNew: false,
      
      },
      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/5qWHe4Mz7dV7UMIm7FYBqO/542524ea5d3657532cc09ca05837a974/ZOO_LOGO_COLOR_1.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/6RzRxAq9Md9wjJtvoqXU1c/5e2ded9d10a39ce36172d0a7517ae715/Page-Cover.jpg?fm=webp&w=1921&h=1281',
        isNew: false,
      
      },
      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/CFFciZlqL3ZsM5ARaumIe/7460d0838b8db6972d35cd160c99cb9a/Logo-01.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/3b0JZBSOUBiOIknU9jocK3/3bca75cd0c774654b8499629564f3d3d/Dunes-Anouncement_Cover_1280x1920.jpg?fm=webp&w=1921&h=1281',
        isNew: false,
      
      },
      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/2aqEAdMXiXz0xvhlX4iTlb/cead25f7de0ac94c46e9237eec31f359/ana_arabia.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/53SmHAp6oLvyY1zSmxSL5H/6902e85c5094c890b1b706fc4e0900a6/1920x1080.jpg?fm=webp&w=1280&h=1280',
        isNew: false,
      
      },

      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/5r8tSDwbIB3S1ahKWFvFib/761ec6260acec1e690a0e2da7e7b05dc/logo.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/78U3bkKsIgMCnNk6ZBhTSR/5d8e2cb3db4d91a2f792cda182768cc2/1920X1280.jpg?fm=webp&w=1920&h=1280',
        isNew: false,
      
      },

      {
        image: 'https://images.ctfassets.net/vy53kjqs34an/29JmIZyaUXDTJZBNyRql1I/866b0fd369cfc49dfdf12e7dc01c78b5/Al_Hesn_Studios_Logo_new.png?fm=webp&w=100&h=100',
        description: '',
        backgroundImg: 'https://images.ctfassets.net/vy53kjqs34an/1ujknez1sfXcPF3NDblTyC/c3a4e4962e890e7ea6ba4c4b61d9a2b1/1920_x_1280_px.jpg?fm=webp&w=4000&h=2667',

        isNew: false,
      },

  ];
  



function Cards() {

            return (
                <div className="card-grid">
                  {card.map((card, index) => (
                    <div 
                    className={`card ${card.isNew ? 'new-card' : ''}`}
                      key={index} 
                      style={{ backgroundImage: `url(${card.backgroundImg})` }}
                    >
  {card.isNew && <div className="new-label">NEW</div>}
                      <div className="overlay">
                        <img src={card.image} alt={card.place} className="card-icon" />
                        <h2 className="card-title">{card.place}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              );
            };
export default Cards