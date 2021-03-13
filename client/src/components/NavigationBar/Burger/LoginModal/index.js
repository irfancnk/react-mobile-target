import styled from 'styled-components';
import { Link } from 'react-router-dom';
//
import Modal from '../../../Common/Modals';


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
    if (!isOpen) {
        return null;
    }

    const loginCallback = () => {
        closeCallback();
    }



    return (
        <Modal>
            <Form onSubmit={loginCallback}>
                <input className="form-control mb-2 p-1" required
                    placeholder="Email"
                    type="email"
                />
                <input className="form-control mb-2 p-1" required
                    placeholder="Password"
                    type="password"
                    autoComplete='current-password'
                />
                <button className="btn btn-success btn-block btn-sm mb-2 p-1" type="submit">
                    Log In
                </button>
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <div>
                        <input className="m-0 px-1 cursor-pointer" type="checkbox" id="remember" name="remember" />
                        <label className="m-0 px-1 cursor-pointer" htmlFor="remember" role="button">Remember Me</label>
                    </div>
                    <div>
                        <Link className="m-0 p-0" to={"/"}>
                            <span>
                                Forgot Password?
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="d-flex w-100 align-items-center justify-content-between mt-auto">
                    <div>
                        <button className="btn btn-secondary btn-sm px-4" type="button" onClick={closeCallback}>
                            Close
                        </button>
                    </div>
                    <div>
                        <Link className="m-0 p-0" to={"/"}>
                            <span>
                                Sign Up
                            </span>
                        </Link>

                    </div>
                </div>


            </Form>
        </Modal>
    );
}


export default LoginModal;







