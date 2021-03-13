// PACKAGES
import React from 'react';
import styled from "styled-components";
// MODULES
import Burger from './Burger';
import Brand from './Brand';
import { palette } from '../../constants/ui-constants';

const NavigationBar = () => {
    return (
        <Nav>
            <Brand />
            <Burger />
        </Nav>
    )
}


const Nav = styled.nav`
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #f39c12;
    /* background-color: ${palette.SECONDARY['LIGHT_THEME']}; */
    background-color: #343A40;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .logo-image {
        height: 100%;
        padding-top: 5px;
    }
    @media (max-width: 768px) {
        .logo-image {
            display: none;
        }
        justify-content: space-around;
        flex-flow: column nowrap;
    }
`


export default NavigationBar;