import React from 'react';
import '../../App.css';
import Footer from '../Footer';

//Styled Components
import { 
  Section,
  SectionColumn,
  Heading,
  Image,
  TextSection,
  Title,
  Company,
  Time,
  Description} from './Experience.elements'

//Images
import navblueLogo from '../../images/navblue-logo.png';
import COMLogo from '../../images/com-logo.png';
import plane from '../../images/plane.png';
import forest from '../../images/forest.png';



//IMAGE DIMENSIONS: 1500W x 1000H

const Experience = () => {
  return (
    <div className="experience-container">
    <Heading>Work Experience</Heading>
      <Section imgStart={false}>
        <SectionColumn>
          <Image imgStart={false} src={navblueLogo}></Image>
        </SectionColumn>
        <SectionColumn>
          <TextSection>
            <Title>Network Administrator</Title>
            <Company>NAVBLUE – an Airbus Company</Company>
            <Time>May 2023 - August 2023</Time>
            <Description>
              During my time at NAVBLUE, I streamlined IT processes by deploying an automated 
              software installation system using PowerShell API calls and NinjaRMM. This reduced
              IT intervention time and increased productivity across the company. I also maintained 
              secure global connectivity for 8 international offices through expert networking,
              routing protocols, and security measures, while managing 100+ software configurations 
              for compliance and efficient troubleshooting.
            </Description>
          </TextSection>
        </SectionColumn>
      </Section>
      <Section imgStart={true}>
        <SectionColumn>
          <Image imgStart={true} src={COMLogo}></Image>
        </SectionColumn>
        <SectionColumn>
          <TextSection>
            <Title>Event Coordinator</Title>
            <Company>City of Mississauga</Company>
            <Time>May 2022 - August 2023</Time>
            <Description>
            I led comprehensive planning, execution, and logistics for major events, overseeing permit acquisition and adherence to
            AODA accessibility regulations. Serving as the central point of contact for City staff, emergency services, and organizers,
            I took charge of on-site activations and emergency responses. I successfully organized major events like Canada Day and 
            National Indigenous People's Day, attracting over 80,000 patrons. I actively promoted diversity and cultural representation 
            within the municipality, ensuring a rich and inclusive experience for attendees.
            </Description>
          </TextSection>
        </SectionColumn>
      </Section>
      <Heading>Software Projects</Heading>
      <Section imgStart={false}>
        <SectionColumn>
          <Image imgStart={false} src={plane}></Image>
        </SectionColumn>
        <SectionColumn>
          <TextSection>
            <Title>FlyNeutral</Title>
            <Company>Winner, NAVBLUE Summer Hackathon</Company>
            <Time>QML, Python</Time>
            <Description>This application calculates the carbon footprint of a passenger’s flight plan using Python and 
            data from the Google Travel Impact Model API. I used QML to design an interactive mobile application, allowing users
            to enter multiple flights and view their flight path on a map, while seamlessly transitioning to the carbon offset solutions page.</Description>
          </TextSection>
        </SectionColumn>
      </Section>
      <Section imgStart={true}>
        <SectionColumn>
          <Image imgStart={true} src={forest}></Image>
        </SectionColumn>
        <SectionColumn>
          <TextSection>
            <Title>Forest Fire Simulator</Title>
            <Company>Winner, MakeSPP International Hackathon</Company>
            <Time>Java</Time>
            <Description>
            This product uses multidimensional arrays to map and predict the trajectory of active forest fires using systematic statistical data analysis. I implemented 
            generative recursion and boolean logic to quantify the impact of specific variables, such as wind speed and direction, humidity and the burnability index.
            I used Java to create an interactivce graphical interface, allowing for users to be notified of when the fire is predicted to reach their area.
            </Description>
          </TextSection>
        </SectionColumn>
      </Section>
    </div> 


  )
}

export default Experience