import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const CardStyle = styled.div`
  
`;

const Card = props => {
  console.log('card:', props);
  return (
    <CardStyle className="card">
      <div className="headline">{props.card.author/* headline goes here */}</div>
      <div>{props.card.tab}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img/* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.card.author}</span>
      </div>
    </CardStyle>
  );
};


Card.propTypes = {
  
//  card: PropTypes.objectOf(
//    PropTypes.shape({
      tab: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string,
  //  })
  //)//.isRequire
    
}

// Make sure to include PropTypes.

export default Card;
