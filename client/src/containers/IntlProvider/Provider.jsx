// PACKAGES
import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
// MODULES
import resources from './resources'


function Provider(props) {
    const applicationLanguage = useSelector(state => state.applicationLanguage);
    return (
        <IntlProvider
            locale={applicationLanguage}
            textComponent={Fragment}
            messages={resources[applicationLanguage]}
        >
            {props.children}
        </IntlProvider>
    );
}
export default Provider;
