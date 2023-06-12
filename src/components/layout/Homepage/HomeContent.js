import React from 'react';
import styled from 'styled-components';

import { globalStyling } from '../../GlobalStyle/GlobalStyle';
import { runningWoman } from '../../../assets';
import Button from '../../libs/Button';
// 
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useModal from '../../../hooks/useModal';
import Modal from '../../libs/Modal';
import RegisterForm from './RegisterForm';

const ModalContainer = ({ children, label }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    mode='wait'
  // Fires when all exiting nodes have completed animating out

  >
    {children}
  </AnimatePresence>
);

function HomeContent(props) {
  // Modal state
  const { modalOpen, close, open } = useModal();


  return (
    <>
      <OffersStyle>

        <div className="content">
          <h2>
            COME WITH US <br />
            AT THE RUNNING <br />
            FESTIVAL
          </h2>
          <p>The Speed Festival 2023, our biggest event of the year, is our way of expressing gratitude to our loyal customers and all the amazing people of Indonesia. Join us for a series of exciting activities designed for families and millennials alike. It's our pleasure to celebrate with you!</p>

          <Button title={'Register'} function={open} />
        </div>

        <img src={runningWoman} alt="running-woman" />

      </OffersStyle>
      <ModalContainer>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} content={<RegisterForm closeModal={close} />} />
        )}
      </ModalContainer>
    </>

  );
}
const OffersStyle = styled(motion.main)`
margin-top: 6rem;
padding: 1rem ${globalStyling.padding_lr};
 display: flex;
 justify-content: space-between;
 position: relative;
 z-index: 100000;
 @media only screen and (max-width: 715px) {
     flex-direction: column;
    }
.content{
    position: relative;
    z-index: 200;
    width: 50;
    
   
h2{
font-family: 'Integral CF',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5rem;
 @media only screen and (max-width: 918px) {
      font-size: 4rem;
    }
     @media only screen and (max-width: 815px) {
     font-size: 3.7rem;
    }
     @media only screen and (max-width: 715px) {
      font-size: 3.3rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 2.5rem;
    }
    
     @media only screen and (max-width: 400px) {
      font-size: 2.3rem;
      font-weight: 900;
    }

}
p{
    color: #939695;
    font-weight: 500;
    width: 30%;
    font-size: 0.9rem;
    margin-top: 2rem;
    font-family: 'SF Pro Display', sans-serif;
     @media only screen and (max-width: 918px) {
      width: 50%;
    }
    @media only screen and (max-width: 715px) {
      width: 100%;
    }
    @media only screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
    @media only screen and (max-width: 400px) {
      font-size:0.7rem;
    }
}

  }
   
      
        
        img{
            width: 50%;
            position: absolute;
            right: 0;
            top: 20%;
           @media only screen and (max-width: 715px) {
     position: initial;
     width: 100%;
     margin-top: 2rem;
    }
        }

`
export default HomeContent;