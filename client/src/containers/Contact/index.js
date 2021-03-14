import { Container } from '../../components/Common/Layout';
import styled from 'styled-components';
import { countryList } from '../../constants/country-codes';

function Contact() {
    return (
        <Container>
            <Form>
                <h2>
                    Please contact us!
                </h2>
                <input className="form-control mb-2 px-2" required
                    placeholder="Title"
                    type="text"
                />
                <input className="form-control mb-2 px-2" required
                    placeholder="Name"
                    type="text"
                />
                <input className="form-control mb-2 px-2" required
                    placeholder="Email"
                    type="email"
                />
                <input className="form-control mb-2 px-2" required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Example: 123-456-7890"
                    type="tel"
                />
                <input className="form-control mb-2 px-2" required
                    placeholder="Country"
                    type="text"
                    list="browsers"
                />
                <datalist id="browsers">
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
                <button className="btn btn-primary btn-block" style={{ maxWidth: "400px" }}>
                    Send
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
