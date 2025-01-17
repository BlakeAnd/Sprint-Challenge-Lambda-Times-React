import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";
//import styled from 'styled-components';

const Tabs = props => {
  //console.log("tabs: ", props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map(tab => {
              //console.log(tab);
              return(
                <div>
                <Tab 
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
                tab={tab}/>
                </div>
              );
            })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  
  tabs: PropTypes.arrayOf(PropTypes.string)

}

// Make sure to use PropTypes to validate your types!
export default Tabs;
