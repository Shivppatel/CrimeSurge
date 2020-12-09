import React from "react";
import { AboutContainer,AboutWrapper, AboutContent,AboutTitle, ContentItem, ContentTitle, ContentBody, AboutImage, Image } from "./AboutElements";
import Picture from '../../images/image1.svg'

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About CrimeSurge</AboutTitle>
      <AboutWrapper>
      <AboutContent>
        <ContentItem>
          <ContentTitle>Our Goal</ContentTitle>
          <ContentBody>
            The goal of this site is to determine what types of crime 
            occur most often in Prince George's County (PG County) and where. 
            This will enable individuals to avoid these hotspots for personal
            safety, and elected officials to draft policy based on the 
            where crime is most concentrated to reduce it.
          </ContentBody>
        </ContentItem>
        <ContentItem>
          <ContentTitle>About Our Dataset</ContentTitle>
          <ContentBody>
            The dataset utilized is "Crime Incidents February 2017 to Present",
            which focuses on crimes committed in the past three years. The most
            notable parts of the data are the longitude and latitude for the exact
            location of the crime for a heatmap and the type of crime for a bar
            chart. Other data of interest is the time of the crime and the specific
            district the crime was committed in. 
          </ContentBody>
        </ContentItem>
        <ContentItem>
          <ContentTitle>What the Dataset Will Tell Us</ContentTitle>
          <ContentBody>
            The data will reveal what types of crime are committed the most and 
            where. This makes the heatmap more accurate and useful for individuals  
            who want to avoid crime-heavy areas and for local governments that need 
            to figure out where to concentrate their funding. 
          </ContentBody>
        </ContentItem>
      </AboutContent>
      <AboutImage>
          <Image src={Picture}/>
      </AboutImage>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
