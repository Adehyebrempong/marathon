import React from 'react';
import styled from 'styled-components';
import { footerBackground } from '../assets';


function Footer(props) {
    return (
        <FooterStyle>
            {/* <img src={footerBackground} alt="background" /> */}
            <div className="footer-content">
                <h2>Tourism</h2>
                <p>General consultation: Adehyebrempong Consult & Media Limited also extends its services to the general public on all travel issues that need to be solved.

                    We assist clients in form filing, booking of Visa appointments and interviews, travel insurances, flight and hotel reservations, travel itineraries, and filling of passport forms.</p>
            </div>
            <div className="footer-content">
                <h2>Flight reservations</h2>
                <p>
                    With unbeatable prices when it comes to airfares. we have dedicated staff who offer free consultation about flight and destination.
                </p>
            </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.section`
    padding: 1rem 5%;
    background: #02151E;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
    color: white;
    margin-top: 9rem;
    @media only screen and (max-width: 715px) {
      margin-top: 3rem;
    }
    position: relative;
     z-index: 100000;
   
     background-image: url(${footerBackground});
     background-size: contain;
     background-repeat: no-repeat;
   .footer-content{
    margin-top: 1rem;
   }
`
export default Footer;