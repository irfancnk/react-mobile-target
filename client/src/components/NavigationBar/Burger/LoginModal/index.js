import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl';
//
import Modal from '../../../Common/Modals';
import userController from '../../../../controllers/userController';
import translate from '../../../../containers/IntlProvider/translate';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 30px 10px 10px 10px;
  border-radius: 5px;
`;


const LoginModal = ({ isOpen, closeCallback }) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const intl = useIntl();

    const loginCallback = (e) => {
        e.preventDefault();
        dispatch(userController.login({ email }));
        closeCallback();
    }

    if (!isOpen) {
        return null;
    }
    return (
        <Modal>
            <Form onSubmit={loginCallback}>
                <input className="form-control mb-2 p-1" required
                    placeholder={intl.formatMessage({ id: "Email" })}
                    type="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input className="form-control mb-2 p-1" required
                    placeholder={intl.formatMessage({ id: "Password" })}
                    type="password"
                    autoComplete='current-password'
                />
                <button className="btn btn-success btn-block btn-sm mb-2 p-1" type="submit">
                    {translate('Login')}
                </button>
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <div>
                        <input className="m-0 px-1 cursor-pointer" type="checkbox" id="remember" name="remember" />
                        <label className="m-0 px-1 cursor-pointer" htmlFor="remember" role="button">
                            {translate('Remember')}
                        </label>
                    </div>
                    <div>
                        <Link className="m-0 p-0" to={"/"}>
                            <span>
                                {translate('Forgot')}
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="d-flex w-100 align-items-center justify-content-between mt-auto">
                    <div>
                        <button className="btn btn-secondary btn-sm px-4" type="button" onClick={closeCallback}>
                            {translate('Close')}
                        </button>
                    </div>
                    <div>
                        <Link className="m-0 p-0" to={"/"}>
                            <span>
                                {translate('SignUp')}
                            </span>
                        </Link>
                    </div>
                </div>


            </Form>
        </Modal>
    );
}


export default LoginModal;







