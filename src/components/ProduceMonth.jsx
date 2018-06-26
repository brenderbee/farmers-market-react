import React from 'react';
import PropTypes from 'prop-types';

function ProduceMonth(props){
  return (
    <div className="month">
      <div className="month-content">
        <h3>{props.month}</h3>
        <ul>
          {props.selection.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      <style jsx>{`
      .month {
        background: lightgrey;
        width: 20%;
        height: auto;
        margin: 20px;
      }

      .month-content {
        padding: 1rem;
      }

      .month-content h3 {
        text-align: center;
        padding: 0;
        margin: 0;
      }

      .month-content li {
        margin-bottom: 0.3rem;
      }
        `}
      </style>
    </div>
  );
}

ProduceMonth.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default ProduceMonth;
