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
            Our goal is to find out what crimes occur the most in Prince
            George’s County (PG County) and where, and then highlight these
            crime hotspots so people can avoid them and policy can be drafted by
            local governments to reduce these crimes.
          </ContentBody>
        </ContentItem>
        <ContentItem>
          <ContentTitle>About Out Dataset</ContentTitle>
          <ContentBody>
            The dataset we’re focused on is “Crime Incidents February 2017 to
            Present” which gives us a glimpse into the most relevant crimes for
            the past three years. Our columns of interest are
            clearnace_code_inc_type (what type of crime is committed), PGPD
            Sector (the district the crime occurred in), and street number and
            street address (the street it was committed on).
          </ContentBody>
        </ContentItem>
        <ContentItem>
          <ContentTitle>What Our Dataset Will Tell Us</ContentTitle>
          <ContentBody>
            All of this data tells us where a crime was committed and what type
            of crime occurred, making our hotspots more accurate and useful to
            our audience.
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
