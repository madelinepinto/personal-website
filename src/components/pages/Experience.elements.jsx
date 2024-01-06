import styled from 'styled-components'

export const Section = styled.div`

  display: flex;
  flex-direction: row;
  margin: 30px 10% 0px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  margin-top: ${({ imgStart }) => (imgStart ? '80px' : '0')};
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
  max-width: 50%;
  flex-basis: 50%;
  justify-content: center;
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
`

export const TextSection = styled.div`
  margin: 0;
  @media screen and (max-width: 960px) {
    margin: 30px 0 0 0;
    text-align: center;
  }
`

export const Title = styled.h1`
  color: #8a3737; 
  font-weight: 500;
  font-family: 'IM Fell DW Pica';
  margin: 0;
  font-size: 42px;
  @media screen and (min-width: 961px) {
    text-align: left;
  }
  @media screen and (max-width: 500px) {
    font-size: 35px;
  }
`

export const Company = styled.h2`
  margin: 0;
  font-weight: 500;
  color: #a34c29; 
  font-family: 'IM Fell DW Pica';
  font-size: 32px;
  @media screen and (min-width: 961px) {
    text-align: left;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`

export const Time = styled.p`
  margin: 0;
  color: #d1ad92; 
  font-family: 'IM Fell DW Pica';
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`

export const Description = styled.p`
  margin: 30px 0 0 0;
  font-size: 24px;
  
  color: #d9c6b5; 
  font-family: 'IM Fell DW Pica';
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`