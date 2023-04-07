import React from 'react';
import { logo } from '../../assets';
import styled from 'styled-components';
import { globalColors } from '../GlobalStyle/globalcolors';
function Navbar(props) {
    return (
        <NavbarStyle>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <a href="#"><li>About Us</li></a>
                <a href="#"><li>Contact Us</li></a>
            </ul>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.section`
    background-color:${globalColors.main};
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
        width:3rem;
        height:3rem;
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