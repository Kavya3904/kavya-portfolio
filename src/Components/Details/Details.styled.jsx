import styled, { keyframes } from "styled-components";

export const DetailAboutMeMain = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18), 0 1.5px 4px rgba(0, 0, 0, 0.08);
  padding: 32px;
  position: relative;
  z-index: 10;
  transition: box-shadow 0.2s;
`;

export const AboutMetitle = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 62px;
`;

export const AboutMeSubtitle = styled.div`
  padding-top: 8px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
`;

export const AboutMeExpShort = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: row;
  flex-wrap: wrap; /* Allow items to wrap on small screens */
  @media (max-width: 600px) {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-auto-flow: row;
  }
`;

export const AboutMeItemContainer = styled.div`
  width: 200px;
  max-width: 90vw; /* Prevent overflow on very small screens */
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ExpNumber = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 62px;

  @media (max-width: 600px) {
    font-size: 46px; /* Adjust font size for smaller screens */
  }
`;

export const Exptitle = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  @media (max-width: 600px) {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
`;

export const ConnectMe = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const LetTaklkButton = styled.button`
  width: 200px;
  background-color: #a3d9a5;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  color: white;
`;
export const MyWorkButton = styled.button`
  background-color: white;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Intro = styled.div`
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  padding-top: 30px;
`;

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const CompanyAboutWrapper = styled.div`
  position: relative;
  width: auto;
  overflow: hidden;
  height: 60px;
`;

export const CompanyAbout = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 90px;
  white-space: nowrap;
  animation: ${scroll} 10s linear infinite;

  & > * {
    display: inline-block;
  }

  @media (max-width: 600px) {
    gap: 16px;
    animation-duration: 10s;
    font-size: 16px;
  }
`;

export const FadeLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(to right, white, transparent);
  pointer-events: none;
  z-index: 1;
`;

export const FadeRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(to left, white, transparent);
  pointer-events: none;
  z-index: 1;
`;
export const CompanyName = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 32px;
  color: #a3d9a5;
  padding-top: 10px;

  @media (max-width: 600px) {
    font-size: 22px; /* Adjust font size for smaller screens */
  }
`;
