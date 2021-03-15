import { useLocation } from "react-router-dom";
import styled from "styled-components";
import funny from '../../../assets/funny.png'
import translate from '../../../containers/IntlProvider/translate';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    img {
        height: 100%;
        padding-top: 5px;
    }
    span {
        color: white;
        font-size: 2rem;
    }
    @media (max-width: 768px) {
        img {
            display: none;
        }
    }
`


const pathNames = Object.freeze({
    "/": "Home",
    "/contact": "Contact",
})


const Brand = () => {
    let location = useLocation();
    console.log();


    return (
        <Container>
            <img src={funny} alt="Logo" />
            <span className="px-2">
                {translate(pathNames[location.pathname])}
            </span>
        </Container>
    )
}

export default Brand;
