import { Container } from '../../components/Common/Layout';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { countryList } from '../../constants/country-codes';
import translate from '../IntlProvider/translate';

function Contact() {
    const applicationUser = useSelector(state => state.applicationUser);
    const intl = useIntl();
    return (
        <Container>
            <Form>
                <h2>
                    {translate('ContactUs')}
                </h2>
                <input className="form-control mb-2 px-2" required
                    placeholder={intl.formatMessage({ id: "Title" })}                    
                    type="text"
                />
                <input className="form-control mb-2 px-2" required
                    placeholder={intl.formatMessage({ id: "Name" })}
                    defaultValue={applicationUser.user && applicationUser.user.name}
                    type="text"
                />
                <input className="form-control mb-2 px-2" required
                    placeholder={intl.formatMessage({ id: "Email" })}
                    defaultValue={applicationUser.user && applicationUser.user.email}
                    type="email"
                />
                <input className="form-control mb-2 px-2" required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder={intl.formatMessage({ id: "PhoneExample" }) +  ": 123-456-7890"}                    
                    defaultValue={applicationUser.user && applicationUser.user.phone}
                    type="tel"
                />
                <input className="form-control mb-2 px-2" required
                    placeholder={intl.formatMessage({ id: "Country" })}
                    type="text"
                    defaultValue={applicationUser.user && applicationUser.user.country}
                    list="countries"
                />
                <datalist id="countries">
                    {
                        countryList.map((item, index) => {
                            return (
                                <option data-value={item.id} key={index}>
                                    {item.name}
                                </option>
                            );
                        })
                    }
                </datalist>
                <textarea className="form-control mb-2 px-2" rows="3" />
                <button className="btn btn-primary btn-block" onClick={(e) => {e.preventDefault()}}>
                    {translate('Send')}
                </button>
            </Form>
        </Container >
    );
}

const Form = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default Contact;
