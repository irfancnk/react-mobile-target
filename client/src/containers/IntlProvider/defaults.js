import { LOCALES } from './locales';

const browserLanguage = LOCALES[navigator.language];
const defaultLanguage = browserLanguage ? browserLanguage : LOCALES["en-US"];

export default defaultLanguage;

