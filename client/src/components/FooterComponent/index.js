import styled from 'styled-components';
import { palette } from '../../constants/ui-constants';

function FooterComponent() {
    return (
        <Container>
            Irfan Can Kaleli @ {new Date().getFullYear()}
        </Container>
    );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-top: 2px solid ${palette.ACTIVE['LIGHT_THEME']};
  background-color: ${palette.BRAND['LIGHT_THEME']};
  color: white;
`;


export default FooterComponent;