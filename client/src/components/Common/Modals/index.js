// import styled from 'styled-components';
//
import './index.css';

const Modal = ({ children }) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-mask">
            </div>
            <div className="modal-container">
                {children}
            </div>
        </div>

    );
}

export default Modal;



