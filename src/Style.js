import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const BackgroundImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
opacity: 0.8;

@media (max-width: 768px) {
  height: 60%;
}

@media (min-width: 769px) and (max-width: 1024px) {
  height: 70%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  height: 75%;
}

@media (min-width: 1281px) {
  height: 80%;
}
`;

export const Title = styled(motion.h1)`
  font-family: serif;
  color: black;
  font-size: 2.5em;
  line-height: 1.2; 
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 1s ease-in-out;
  @media (max-width: 768px) {
      font-size: 1.5em; /* Adjust the font size for smaller screens */
}

`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  gap: 0 2em;
  margin: 30px 30px 30px auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: green;
    }
  }
`;

export const Paragraph = styled.p`
  max-width: 900px;
  font-size: 32px;
  position: relative;
  margin: 17vh;
  color: black;
`;

export const Img = styled.img`
  width: 25em;
`;

export const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: white;
`;