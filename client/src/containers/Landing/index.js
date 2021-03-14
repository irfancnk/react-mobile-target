import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../controllers/githubController';
import RepositoryList from '../../components/RepositoryList';


function Landing() {
    const [username, setUsername] = useState("irfancnk");
    const dispatch = useDispatch();
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
                    <input onChange={handleChange} defaultValue={username} type="text" className="form-control mx-1" placeholder="Github Username" aria-label="Github Username" />
                    <button className="btn btn-outline-primary mx-1" type="submit" onClick={handleSubmit}>
                        Pull
                    </button>
                </form>
            </SearchWrapper>
            <ListWrapper>
                <RepositoryList />
            </ListWrapper>
        </Container>
    );
}

const Container = styled.div`
    padding: 1rem;
    max-width: 1200px;
    margin: auto;
    background-color: #fff;
    height: 100%;
`;

const SearchWrapper = styled.div`
    height: 3rem;
    width: 100%;
`;
const ListWrapper = styled.div`
    height: calc(100% - 3rem);
    width: 100%;
`;

export default Landing;



