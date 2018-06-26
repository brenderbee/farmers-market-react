import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyles = {
    fontSize: '32px',
    color: 'black'
  };

  return(
    <div style={headerStyles}>
      <h1 className="header">Avery's Organics</h1>
      <div className="nav">
        <Link to="/" className="links">Home</Link> | <Link to="/schedule" className="links">Schedule</Link> | <Link to="/availableProduce" className="links">Available Produce</Link>
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
          }
      `}</style>
    </div>
  );
}

export default Header;
