import React from "react";
import {
  DetailAboutMeMain,
  AboutMetitle,
  AboutMeSubtitle,
  AboutMeExpShort,
  AboutMeItemContainer,
  ExpNumber,
  Exptitle,
  ConnectMe,
  LetTaklkButton,
  MyWorkButton,
  Intro,
  CompanyDetails,
  CompanyAbout,
  FadeRight,
  FadeLeft,
  CompanyAboutWrapper,
  CompanyName,
} from "./Details.styled";
import { motion } from "framer-motion";
export default function AboutMeDetails() {
  return (
    <DetailAboutMeMain>
      <AboutMetitle>
        Bringing Ideas to Life, Through{" "}
        <span
          style={{
            color: "#a3d9a5",
          }}
        >
          Code
        </span>
      </AboutMetitle>
      <AboutMeSubtitle>
        Driven by design and powered by code — I build intuitive applications
        that deliver both form and function.
      </AboutMeSubtitle>
      <AboutMeExpShort>
        <AboutMeItemContainer>
          <ExpNumber>+3</ExpNumber>
          <Exptitle>YEARS OF EXPERIENCE</Exptitle>
        </AboutMeItemContainer>
        <AboutMeItemContainer>
          <ExpNumber>+4</ExpNumber>
          <Exptitle>PROJECTS COMPLECTED</Exptitle>
        </AboutMeItemContainer>
      </AboutMeExpShort>
      <ConnectMe>
        <LetTaklkButton>Let's Talk</LetTaklkButton>
        <MyWorkButton>My work →</MyWorkButton>
      </ConnectMe>
      <CompanyDetails>
        <Intro>Compaines I have worked with</Intro>
        <CompanyAboutWrapper>
          <FadeLeft />
          <FadeRight />
          <CompanyAbout>
            <CompanyName>CloudHalo</CompanyName>
            <CompanyName>LevelX</CompanyName>
            <CompanyName>SoloScript</CompanyName>
          </CompanyAbout>
        </CompanyAboutWrapper>
      </CompanyDetails>
    </DetailAboutMeMain>
  );
}
