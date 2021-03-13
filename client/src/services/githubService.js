// PACKAGES
import axios from 'axios';
// MODULES
import getProxy from './proxy';

function getRepoOfUser({ username }) {
    return new Promise(function (resolve, reject) {
        let userRepoPromise = axios.get(
            getProxy("users") + `${username}/repos`
        );
        userRepoPromise.then(function ({ data }) {
            return resolve(data);
        }, function (error) {
            console.warn(error);
            return reject(error);
        });
    });
}


export {
    getRepoOfUser
};