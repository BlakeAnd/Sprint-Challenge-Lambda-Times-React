import React from 'react';
import styled from "styled-components";

const TopBarStyle = styled.div`
   width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;
const ContainerLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;
const ContainerCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanLeft = styled.div`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;
const Span = styled.div`
cursor: pointer;
margin: 0 2%;
`;
const Last = styled.div`

margin-right: 0;
`;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyle >
      <Container >
        <ContainerLeft >
          <SpanLeft>TOPICS</SpanLeft><SpanLeft>SEARCH</SpanLeft>
        </ContainerLeft>
        <ContainerRight >
          <Span>GENERAL</Span><Span>BROWNBAG</Span><Span>RANDOM</Span><Span>MUSIC</Span><Last>ANNOUNCEMENTS</Last>
        </ContainerRight>
        <ContainerCenter >
          <span>LOG IN</span>
        </ContainerCenter>
      </Container>
    </TopBarStyle>
  )
}

//className="top-bar"
//className="container"
//className="container-left"
//className="container-center"
//className="container-right"

export default TopBar;