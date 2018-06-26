import React from 'react';
import food from '../img/food.jpg';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyles = {
    fontSize: '4rem',
    color: 'white',
    textShadow: '2px 2px #000'
  };

  return(
    <div className="banner">
      <h1 className="header" style={headerStyles}>Avery's Organics</h1>
      <div className="nav">
        <p className="test"><Link to="/" className="test">Home</Link></p>
        <p className="test"><a className="links"><Link to="/schedule">Schedule</Link></a></p>
        <p className="test"><a className="links"><Link to="/availableProduce" className="links">Available Produce</Link></a></p>
      </div>
      <style jsx>{`
          .banner {
            background: url(${food});
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .header {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .nav {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
          }

          .test {
            background: #8b4cfb;
            padding: 1.2rem;
            border-radius: 10px;
            color: white;
            margin-right: 10px;
          }
      `}</style>
    </div>
  );
}

export default Header;
