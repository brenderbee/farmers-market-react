import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div className="day">
      <div className="day-content">
        <h3>{props.day}</h3>
        <p>{props.location}</p>
        <p>{props.hours}</p>
        <p>Booth {props.booth}</p>
      </div>
      <style jsx>{`
        .day {
          background: lightgrey;
        }

        .day-content {
          padding: 1.5rem;
        }
      `}</style>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Schedule;
