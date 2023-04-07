import React from 'react';
import styled from 'styled-components';
import { logo } from '../assets';

function Footer(props) {
    return (
        <FooterStyle>
            <img src={logo} alt="" className="logo" />
            <p>©Adehyebrempong Consult & Media LTD  . All rights reserved.</p>
        </FooterStyle>
    );
}

const FooterStyle = styled.section`
    padding: 1rem 5%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-top: 3rem;
    .logo{
        width: 3rem;
        height: 3rem;
    }
`
export default Footer;