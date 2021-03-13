// PACKAGES
// import { toast } from "react-toastify";
// MODULES
import { getRepoOfUser } from '../services/githubService';
import { landingLoadingChange, landingDataChange } from '../actions'


function fetchUser({ username }) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(landingLoadingChange(true));
            let userRepoList = [];
            let getRepoOfUserPromise = getRepoOfUser({ username });
            getRepoOfUserPromise.then(function (result) {
                userRepoList = result;
                console.log(result);
                return resolve(result);
            }, function (error) {
                console.warn(error);
                return reject(error);
            })
            .finally(function () {
                dispatch(landingDataChange(userRepoList));
                dispatch(landingLoadingChange(false));
            })
        });
    };
}




export {
    fetchUser
};
