import React from 'react'
import './partner.css';

const partnersData = [
    {
      title: "OFFICIAL PLATINUM PARTNERS",
      images: [
        "https://images.ctfassets.net/vy53kjqs34an/2v0oFZlxcMalLIE0yb6NuY/5f9b1ddfbd74868bb175809c3a6007d7/snb_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/4z3pZgx4uAU5XwNVSzImpN/22edbf783f65aa08df39dcee856691d6/stc_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/22h6g8kWFRKA8rov0GoxfH/cb66d205c0c1553fed6adfd12692e6cc/suliman_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/2vHGQxcYKx9QTKoARtAcaD/4036d5e02d0168e8d7b55f2b37356b14/aramco_1.png",
      ],
    },
    {
      title: "OFFICIAL PREMIUM PARTNERS",
      images: [
        "https://images.ctfassets.net/vy53kjqs34an/5o7ItFebjHJDxonjRkpl9j/e5427d940d8a54acfef2ab14c116b167/new_muraba_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/7z1eAJ3KMw3F00pJoavPmA/b478a91858a940e84afd9edfcc9ae2d8/tawinia_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/5h6UgHNQj9L4XlGWMQrX43/16cf8eae40973885e980c3bcfd1f09c1/hunger_station_1.png",
      ],
    },
    {
      title: "OFFICIAL STRATEGIC PARTNERS",
      images: [
        "https://images.ctfassets.net/vy53kjqs34an/169bBl3VuU4SE3tCwlByKh/1ed943a28d7a69f33415f7d17c8445ad/maestro_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/3A0kFwc3oDeN4cdXhe0lBS/e7afc87e61890c618e47dce7e5c5af20/checkapp_1.png",
     
      ],
    },
    {
      title: "OFFICIAL MAIN PARTNERS",
      images: [
        "https://images.ctfassets.net/vy53kjqs34an/4Fgcy65TrVJ67lqKHWMoeS/adb046a53a0d4d074692f300c8ecc117/pepsi_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/7g5en9dnOLfuF2KVK7XRfh/c415227d2f6fc0e5b688d74e17686b80/lays_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/3XQt6ptrb032XBM3lEop35/ea55155a4d2f3a667d65b3ad8552253a/dunkin_en_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/3TrWm5A6jx3iA7QcpOsAet/fe5cddc9bf85062306e16cd4dd0e87f9/dzrt_ar_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/2BGLMsQKWmOjrV7dvpi0Bb/dba8f3bd22c6c383bba4021ed1b38986/panda_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/5R17ITu3QMYvaYAqPbzcJB/2640f340993bbac752eb12c47197b9b4/tree_en_1.png",
        "https://images.ctfassets.net/vy53kjqs34an/50Bm0MctCwbcLLf7YpCvlN/f9a292d07cb384ea3e0cffcf7dbe3065/muc_1.png",
      "https://images.ctfassets.net/vy53kjqs34an/SYWazlsp1JKK4dY0NcmN0/f23cd6651c3d656bc82b38be95e10528/parker_1.png"
    ],
    },
    {
        title: "OFFICIAL AIRLINE PARTNER",
        images: [
          "https://images.ctfassets.net/vy53kjqs34an/4mh59QOoN8xdffa6gfwCFl/5ac371ace53d8c9b307de4a9dadf724e/fly_sudia_1.png",
       ],
      },
      {
        title: "OFFICIAL SOCIAL MEDIA PARTNER",
        images: [
          "https://images.ctfassets.net/vy53kjqs34an/7pdSQJUrf8PiOR9CWm7eUB/4e76d9dd56f8bdc9b0e3f10b5f72b180/jaco_1.png",
       ],
      },
      {
        title: "OFFICIAL CO PARTNERS",
        images: [
          "https://images.ctfassets.net/vy53kjqs34an/5kzmnqhF92lh4FgV18amMj/45b18f5b518d2f617e60b9d0d420da3e/sirc_1.png",
          "https://images.ctfassets.net/vy53kjqs34an/4SGEHf68cVakA7QgBRHo8d/a94db47e134c170b2aace44da418abb9/kudo_2.png",
          "https://images.ctfassets.net/vy53kjqs34an/58HQDyJobfphL2aaj8ELHF/a43af5e4ec682379aaa950fa5769361f/byd_en.png",
          "https://images.ctfassets.net/vy53kjqs34an/58HQDyJobfphL2aaj8ELHF/a43af5e4ec682379aaa950fa5769361f/byd_en.png"
       ],
      },

  ];



function Parteners() {
  return (
    <div className="partners-container">
      <h1 className="partners-title">Our Partners</h1>
      {partnersData.map((partner) => (
        <div key={partner.title} className="partner-section">
          <h2 style={{color:'#fff'}} className="partner-title">{partner.title}</h2>
          <div className="partners-logos">
            {partner.images.map((image, index) => (
              <img key={index} src={image} alt={`${partner.title} logo ${index + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parteners