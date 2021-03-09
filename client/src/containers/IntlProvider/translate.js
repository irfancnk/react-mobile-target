// PACKAGES
import React from 'react';
import { FormattedMessage } from 'react-intl';
// MODULES


const translate = (id, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;
export default translate;
