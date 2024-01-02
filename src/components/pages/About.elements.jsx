//IMAGE DIMENSIONS: 1500W x 1000H

import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 10% 0px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  border: 3px solid blue;
  margin-top: ${({ imgStart }) => (imgStart ? '40px' : '0')};

  @media screen and (max-width: 1300px) {
    margin-top: ${({ imgStart }) => (imgStart ? '40px' : '0')};
  }
  @media screen and (max-width: 500px) {
    margin: 30px 5% 0px;
  }
`

export const Heading = styled.h2`
  color: #8f331f; 
  font-family: 'IM Fell DW Pica';
  font-size: 80px;
  font-weight: 500;
  padding: 30px;
  text-align: center;
`

export const SectionColumn = styled.div`
  flex: 1;
  max-width: 60%;
  flex-basis: 30%;
  justify-content: flex-start;  
  border: 3px solid aqua;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
  }
`

export const Image = styled.img`
  max-width: 90%;
  max-height: 350px;
  border-radius: 10px;
  vertical-align: middle;
  object-fit: contain;
  float: ${({ imgStart }) => (imgStart ? 'left' : 'right')};
  border: 3px solid red;
`

export const TextSection = styled.div`
  color: #FFFFFF;
  margin: 0;
  width: 100%;
  align-self: flex-start; 
  border: 3px solid red;
  @media screen and (max-width: 960px) {
    margin: 30px 0 0 0;
    text-align: center;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 60px;
  font-weight: 600;
  font-family: 'Dancing Script';
  @media screen and (min-width: 961px) {
    text-align: left;
  }
  @media screen and (max-width: 500px) {
    font-size: 35px;
  }
`

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Dancing Script';
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
  @media screen and (min-width: 961px) {
    text-align: left;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`
export const Body = styled.p`
  font-size: 30px;
  font-family: 'Dancing Script';
  border: 3px solid purple; 
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`