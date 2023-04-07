import React from 'react';
import styled from 'styled-components';
import { touristone, touristtwo, travel } from '../../../assets';
import { globalColors } from '../../GlobalStyle/globalcolors';

function HeroSection(props) {
    return (
        <>
            <HeroSectionStyle>
                <div className='header'>
                    <h2>Taking you around the world</h2>
                    <p>Travel to any destination of your choice without worrying about delays.</p>
                </div>
            </HeroSectionStyle>
            <HeroMiniStyle>
                <div className="hero-mini">
                    <div className="hero-mini_container">
                        <div className="card">
                            <div className="card-content">

                                <img src={touristone} alt="tour" />
                                <div className="service">
                                    Visa
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <img src={touristtwo} alt="tour" />
                                <div className="service">
                                    Passport
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroMiniStyle>
        </>

    );
}
const HeroSectionStyle = styled.section`
    width: 100%;
    height:120vh;
    background-image:linear-gradient(#f1c33a60,#f1c33a60),url(${travel});
    background-repeat:no-repeat;
    background-size:cover;
   clip-path: polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%);
   display: flex;
   justify-content: center;
   position: relative;
   z-index: 20;
   margin-top: 3rem;
 
   .header{
margin-top: 4rem;
color: white;
text-align: center;
text-shadow:2px 2px 5px rgba(0,0,0,0.1);
h2{
    font-size: 3rem;
    border-bottom: 1px solid white;
    padding-bottom: 0.1rem;
}
p{
    margin-top: 2rem;
}
   }
  
`
const HeroMiniStyle = styled.div`
  margin-top:-30rem;
 position: relative;
    z-index: 40000;
     .hero-mini{

    width: 100%;
    display: flex;
    justify-content: center;
   
    
&_container{
    width: 70%;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
    padding: 5%;
    display: flex;
    justify-content: space-between;
    .card{
        padding: .5rem;
        background-color: #8080809e;
        cursor: pointer;
        transition: all .2s ease;
        &:hover{
            transform: scale(1.05);
        }
        &-content{
img{
   width: 20rem;
    height: 22rem;
    object-fit: cover;
    object-position: center;
  
}
.service{
    background-color: ${globalColors.main};

    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem;
    color: white;
  margin-top: -1rem;
}
        }
    }
}

   }
`
export default HeroSection;