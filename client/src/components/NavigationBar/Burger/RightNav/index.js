import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { applicationLanguageChange } from '../../../../actions';
import { TurkishFlag, EnglandFlag } from '../../../../assets/flags';
import UserPanel from './UserPanel';
import translate from '../../../../containers/IntlProvider/translate';
import { NAMES } from '../../../../containers/IntlProvider/language-names';

const StyledLink = styled(Link)`
    color: white;
    &:hover {
        color: tomato;
        text-decoration: none;
    }
`;

const Ul = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: row nowrap;
    padding-right: 10px;
    li {
        padding: 10px 10px;
        color: #fff;
        .navigation {
            &:hover {
                border-bottom: 3px solid tomato;
                cursor: pointer;
            }
        }
    }
    .nav-link {
        overflow: hidden;
        &:hover {
            border-bottom: 3px solid tomato;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        padding-right: 0px;
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            cursor: pointer;
            color: #fff;
            margin-bottom: 5px;
            border-bottom: 3px solid white;
            &:hover {
                border-bottom: 3px solid tomato;
            }
            .nav-link {
                &:hover {
                    border-bottom: 0px solid tomato;
                }
            }
        }
    }
`;

const RightNav = ({ open, loginCallback }) => {
    const dispatch = useDispatch();
    const applicationLanguage = useSelector(state => state.applicationLanguage);

    const changeLanguage = (value) => {
        dispatch(applicationLanguageChange(value))
    }

    return (
        <Ul open={open}>
            <li className="nav-item px-2 py-2">
                <StyledLink className="m-0 p-0" to={"/"}>
                    <span className="nav-link">
                        {translate('Home')}
                    </span>
                </StyledLink>
            </li>
            <li className="nav-item px-2 py-2">
                <StyledLink className="m-0 p-0" to={"/contact"}>
                    <span className="nav-link">
                        {translate('Contact')}
                    </span>
                </StyledLink>
            </li>
            <li className="nav-item px-2 py-2">
                <DropdownButton
                    menuAlign="left"
                    title={NAMES[applicationLanguage]}
                >
                    <Dropdown.Item onClick={() => changeLanguage('en-US')}>
                        <div className="d-flex flex-row">
                            <EnglandFlag />
                            <span className="px-2">
                                English
                            </span>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => changeLanguage('tr-TR')}>
                        <div className="d-flex flex-row">
                            <TurkishFlag />
                            <span className="px-2">
                                Türkçe
                            </span>
                        </div>

                    </Dropdown.Item>
                </DropdownButton>
            </li>
            <li className="nav-item px-2 py-2">
                <UserPanel loginCallback={loginCallback} />
            </li>
        </Ul>
    )
}

export default RightNav;


// {/* <button type="button" className="btn btn-outline-light" onClick={loginCallback}>
// Log In
// </button> */}
