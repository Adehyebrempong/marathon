import React, { useEffect, useState } from 'react';
import { logo } from '../assets';
import styled from 'styled-components';
import { globalColors } from './GlobalStyle/globalcolors';
function Navbar(props) {
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setShowShadow(true);
            } else {
                setShowShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBarShadow = {
        boxShadow: showShadow ? '0px 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
    };
    return (
        <NavbarStyle style={navBarShadow}>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <a href="#"><li>About Us</li></a>
                <a href="#"><li>Contact Us</li></a>
            </ul>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.section`
    background-color:${globalColors.background};
    padding:1rem 5%;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000000000;
    .logo{
        width:6rem;
       
    }
    ul{
        display:flex;
        list-style:none;
        gap:1rem;
        font-weight:500;
        color:white;
        a:link,a:visited,a:active{
            color: inherit;
            transition:all .2s ease;
            &:hover{
                transform:translateY(-2px)
            }
        }
    }
`


export default Navbar;