import React from "react";
import styled from "styled-components";
// 
import ErrorGif from "../../../assets/error.gif";
/**
 * @param {String} param0 Message that informs what is the error occured
 */
const ErrorComponent = ({ message }) => {
    return (
        <Container data-testid="errorcomponent">
            <img src={ErrorGif} alt="Error occured" />
            <h4>{message}</h4>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        padding: 1rem;
        text-align: center;
        font-weight: 500;
    }
    img {
        width: 30%;
        max-width: 200px;
        min-width: 100px;
    }
`;

export default ErrorComponent;