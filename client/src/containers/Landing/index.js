import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux'

import { fetchUser } from '../../controllers/githubController';
import RepositoryList from '../../components/RepositoryList';
import { Container } from '../../components/Common/Layout';
import translate from '../IntlProvider/translate';




function Landing() {
    const [username, setUsername] = useState("irfancnk");
    const dispatch = useDispatch();
    const intl = useIntl();

    useEffect(() => {
        dispatch(fetchUser({ username }));
    }, [username, dispatch]);
    let searchUsername = username;

    const handleChange = (e) => {
        searchUsername = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(searchUsername);
    }
    return (
        <Container>
            <SearchWrapper>
                <form className="d-flex flex-row" onSubmit={handleSubmit}>
                    <input onChange={handleChange} defaultValue={username} type="text" className="form-control mx-1" 
                        placeholder={intl.formatMessage({ id: "GithubUsername" })}
                        aria-label="Github Username" 
                    />
                    <button className="btn btn-outline-primary mx-1" type="submit" onClick={handleSubmit}>
                        {translate('Pull')}
                    </button>
                </form>
                <h5 className="pt-2 px-2">
                    {translate('UserRepo')}
                </h5>
            </SearchWrapper>
            <ListWrapper>
                <RepositoryList />
            </ListWrapper>
        </Container>
    );
}

const SearchWrapper = styled.div`
    height: 5rem;
    width: 100%;
`;
const ListWrapper = styled.div`
    height: calc(100% - 5rem);
    width: 100%;
`;

export default Landing;



