// PACKAGES
import React from 'react';
import styled from 'styled-components';
import { I18NProvider } from './containers/IntlProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// MODULES
import Landing from './containers/Landing';
import Contact from './containers/Contact';
import NavigationBar from './components/NavigationBar';
import FooterComponent from './components/FooterComponent';
import { Block } from './components/Common/Layout';
// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <I18NProvider>
                <Header>
                    <NavigationBar />
                </Header>
                <Container>
                    <Switch>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Landing />
                        </Route>
                    </Switch>
                </Container>
                <Footer>
                    <FooterComponent />
                </Footer>
            </I18NProvider>
        </Router>
    );
}

const Header = styled(Block)`
  height: 3.75rem;
`;
const Container = styled(Block)`
  height: calc(100vh - 6rem);
`;
const Footer = styled(Block)`
  height: 2.25rem;
`;

export default App;
