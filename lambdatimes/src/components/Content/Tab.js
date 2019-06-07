import React from 'react';
import PropTypes from "prop-types";
//import styled from 'styled-components';

const Tab = props => {
  //console.log('tab: ', props);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
  
    return (
    <button
      className={''}
      onClick={props.selectTabHandler}
      value={props.tab}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </button>
  );
};

Tab.propTypes = {

      selectTabHandler: PropTypes.func,
      selectedTab: PropTypes.string,
      tab: PropTypes.string

}

// Make sure you include PropTypes on your props.

export default Tab;
