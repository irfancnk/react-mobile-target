// PACKAGES
import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
// MODULES
import userController from '../../../../../controllers/userController';




const UserPanel = ({ loginCallback }) => {
    const { user, isAuthenticated } = useSelector(state => state.applicationUser);
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(userController.logout());
    }

    if (isAuthenticated) {
        console.log(user.email);
        console.log(user);

        return (
            <DropdownButton menuAlign="right" title={user.email}>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logoutHandle}>Logout</Dropdown.Item>
            </DropdownButton>
        );
    }
    return (
        <button className="btn btn-primary" onClick={loginCallback}>
            Log In
        </button>
    );
}


const Nav = styled.nav`

`


export default UserPanel;