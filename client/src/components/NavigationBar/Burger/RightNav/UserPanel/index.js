// PACKAGES
import React from 'react';
import { useSelector } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
// MODULES
import userController from '../../../../../controllers/userController';
import translate from '../../../../../containers/IntlProvider/translate';




const UserPanel = ({ loginCallback }) => {
    const { user, isAuthenticated } = useSelector(state => state.applicationUser);
    const dispatch = useDispatch();
    const logoutHandle = () => {
        dispatch(userController.logout());
    }
    if (isAuthenticated) {
        return (
            <DropdownButton menuAlign="right" title={user.email}>
                <Dropdown.Item>{translate('Settings')}</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logoutHandle}>{translate('Logout')}</Dropdown.Item>
            </DropdownButton>
        );
    }
    return (
        <button className="btn btn-primary" onClick={loginCallback}>
            {translate('Login')}
        </button>
    );
}




export default UserPanel;