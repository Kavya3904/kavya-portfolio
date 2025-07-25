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
        <a
          href="https://github.com/Kavya3904"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <LetTaklkButton>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              style={{
                height: "23px",
                marginRight: "8px",
                verticalAlign: "middle",
                paddingRight: "10px",
              }}
            />
            My Work
          </LetTaklkButton>
        </a>
        <MyWorkButton
          onClick={() => {
            const section = document.getElementById("connect-section");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Connect with me 😉
        </MyWorkButton>
      </ConnectMe>
      <CompanyDetails>
        <Intro>Companies I have worked with</Intro>
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
