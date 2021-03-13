import React, { useState, useEffect } from 'react';
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

    return null;
    return (
        <div style={{ color: "red" }}>
            some porsdaassdasads
        </div>
    )

    return (
        <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "5rem" }}>
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group p-3">
                            <input onChange={handleChange} defaultValue={username} type="text" className="form-control" placeholder="Github Username" aria-label="Github Username" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="submit" onClick={handleSubmit}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row" style={{ height: "calc(100% - 5rem)", overflowY: "scroll" }}>
                <RepositoryList />
            </div>
        </div>
    );
}

export default Landing;
