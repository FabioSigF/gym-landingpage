import {createGlobalStyle} from "styled-components";


export const color = {
  gray20: "#F8F4EB",
  gray50: "#EFE6E6",
  gray100: "#DFCCCC",
  gray500: "#5E0000",
  primary100: "#FFE1E0",
  primary300: "#FFA6A3",
  primary500: "#FF6B66",
  secondary400: "#FFCD58",
  secondary500: "#FFC132",
}

export const backgroundImage = {
  gradientYellowRed: "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
  mobileHome: "url('./images/HomePageGraphic.png')"
}

export const ffamily = {
  text: "'DM Sans', sans-serif",
  title: "'Jost', sans-serif"
}

export const content = {
  evolvetext: "url('./images/EvolveText.png')",
  abstractwaves: "url('./images/AbstractWaves.png.png')",
  sparkles: "url('./images/Sparkles.png')",
  circles: "url('./images/Circles.png.png')",
}

export const screenSize = {
  xs: "480px",
  sm: "768px",
  md: "1060px",
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${ffamily.text};
    color: ${color.primary500};
    background-color: ${color.gray20};
    margin: 0;
    padding: 0;
  }

  ul, 
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a, 
  button {
    cursor: pointer;
  }

  button {
    background: none;
    border: none;
  }
`