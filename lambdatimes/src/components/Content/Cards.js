import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";
//import styled from 'styled-components';

const Cards = props => {
  console.log('cards', props);
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(card => {
            return(
              <Card 
              card={card}
              />
            );
          })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      tab: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
    )


}

// Make sure you include prop types for all of your incoming props

export default Cards;