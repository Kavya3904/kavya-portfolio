import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 10px;
    object-position: top center;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
      max-width: 100vw;
      max-height: 70vw;
      object-position: top center;
    }
  }
`;

export const SummaryContainer = styled.div`
  text-align: center;
`;

export const AboutMeTitle = styled.div`
  padding-top: 8px;
  font-family: "Alex Brush", cursive;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.1em;
  font-size: 34px;
`;

export const AboutMeBody = styled.div`
  font-family: "Itim", cursive;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 14px;
`;
export const AboutMeplace = styled.div`
  font-family: "Itim", cursive;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 12px;
`;

export const AboutMebutton = styled.button`
  background-color: #a3d9a5;
  font-family: "Itim", cursive;
  color: white;
  margin-top: 100px;
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  align-self: center;
  cursor: pointer;
`;
