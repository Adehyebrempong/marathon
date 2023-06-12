import React from 'react';
import styled from 'styled-components';
import { footerBackground } from '../assets';


function Footer(props) {
    return (
        <FooterStyle>
            <img src={footerBackground} alt="background" />
        </FooterStyle>
    );
}

const FooterStyle = styled.section`
    padding: 1rem 5%;
    background: #02151E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-top: 9rem;
    @media only screen and (max-width: 715px) {
      margin-top: 3rem;
    }
    position: relative;
     z-index: 100000;
     height: 30vh;
     img{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
     }

   
`
export default Footer;