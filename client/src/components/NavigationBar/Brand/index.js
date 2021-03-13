import styled from "styled-components";
import funny from '../../../assets/funny.png'

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



const Brand = () => {
    

    return (
        <Container>
            <img src={funny} alt="Logo" />
            <span className="px-2">
                Home
            </span>
        </Container>
    )
}

export default Brand;
