import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import LoginModal from './LoginModal';

const StyledBurger = styled.div`
  width: 50px;
  height: 30px;
  position: absolute;
  top: 12px;
  right: 10px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 30px;
    height: 4px;
    background-color: ${({ open }) => open ? '#F7F7F9' : '#9A9DA0'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const burgerClickCallback = () => {
        setBurgerOpen(prevOpen => !prevOpen)
    }
    const closeLoginModal = () => {
        setLoginModalOpen(false);
    }
    const openLoginModal = () => {
        setLoginModalOpen(true);
    }


    return (
        <div>
            <StyledBurger open={burgerOpen} onClick={burgerClickCallback}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={burgerOpen} loginCallback={openLoginModal} />
            <LoginModal isOpen={loginModalOpen} closeCallback={closeLoginModal} />
        </div>
    )
}

export default Burger;
