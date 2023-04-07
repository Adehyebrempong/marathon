import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

  *,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
a, a:link, a:visited{
  text-decoration: none;
}
body{
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: white;
  color: black;
  font-family: 'Poppins', sans-serif;
  font-weight:400;
} `;

export default Globalstyle;