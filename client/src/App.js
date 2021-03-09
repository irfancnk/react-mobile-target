// PACKAGES
import React from 'react';
import { I18NProvider } from './containers/IntlProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// MODULES

const NavigationBar = () => <div>NavigationBar</div>
const Landing = () => <div>Landing</div>
const Contact = () => <div>Contact</div>
const Footer = () => <div>Footer</div>

function App() {
    return (
        <Router>
            <I18NProvider>
                <NavigationBar />
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
                <Footer />
            </I18NProvider>
        </Router>
    );
}

export default App;
