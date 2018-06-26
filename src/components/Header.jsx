import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyles = {
    fontSize: '4rem',
    color: 'black'
  };

  return(
    <div>
      <h1 className="header" style={headerStyles} >Avery's Organics</h1>
      <div className="nav">
        <a className="links"><Link to="/" >Home</Link></a> | <a className="links"><Link to="/schedule">Schedule</Link></a> | <a className="links"><Link to="/availableProduce" className="links">Available Produce</Link></a>
      </div>
      <style jsx>{`
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

          a {
            color: blue;
            margin-right: 0.8rem;
            margin-left: 0.8rem;
          }
      `}</style>
    </div>
  );
}

export default Header;
