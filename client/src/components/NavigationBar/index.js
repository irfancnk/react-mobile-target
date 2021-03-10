// PACKAGES
import React from "react";
import styled from "styled-components";
// MODULES
import './index.css';




function NavigationBar() {
    return (
        <header className="header">
            <a href="" className="logo">CSS Nav</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="#work">Our Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
}

// const Header = styled.header`
//     background-color: #fff;
//     box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
//     position: fixed;
//     width: 100%;
//     z-index: 3;

//     ul {
//         margin: 0;
//         padding: 0;
//         list-style: none;
//         overflow: hidden;
//         background-color: #fff;
//     }

//     li a {
//         display: block;
//         padding: 20px 20px;
//         border-right: 1px solid #f4f4f4;
//         text-decoration: none;
//     }

// `;

// const Container = styled(Link)`
//   text-decoration: none;
//   background: #fff;
//   border-radius: 0.5rem;
//   border: 2px solid #f8f8f8;
//   width: 100%;

//   &:hover {
//     border: 2px solid gray;
//     transition: 0.5s;
//   }
// `;



export default NavigationBar;