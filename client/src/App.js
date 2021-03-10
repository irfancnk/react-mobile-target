// PACKAGES
import React from 'react';
import { I18NProvider } from './containers/IntlProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// MODULES
import Landing from './containers/Landing';
import Contact from './containers/Contact';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <I18NProvider>
                <NavigationBar />
                <Switch>
                    <Route exact path="/contact">
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
