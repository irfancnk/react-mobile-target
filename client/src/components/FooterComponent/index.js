import styled from 'styled-components';

function FooterComponent() {
    return (
        <Container>
            Made with React
        </Container>
    );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f39c12;
  border-top: 2px solid tomato;
`;


export default FooterComponent;