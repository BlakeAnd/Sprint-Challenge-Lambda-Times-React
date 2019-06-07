import React from 'react';
import PropTypes from "prop-types";

const Card = props => {
  console.log('card:', props);
  return (
    <div className="card">
      <div className="headline">{props.card.headline/* headline goes here */}</div>
      <div>{props.card.tab}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img/* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.card.author}</span>
      </div>
    </div>
  );
};


Card.propTypes = {
 
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
    

}

// Make sure to include PropTypes.

export default Card;
