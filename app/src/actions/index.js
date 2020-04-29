import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

<<<<<<< HEAD
export const getUser = (gender = null, nat = null) => (dispatch) => {
    dispatch({ type: FETCHING_START });
    // implement the code calling actions for .then and .catch
    axios
        .get(`https://randomuser.me/api/?gender=${gender}&nat=${nat}`)
        .then((res) => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data.results[0] });
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
=======
export const getUser = () => (dispatch) => {
    dispatch({ type: FETCHING_START });

    // implement the code calling actions for .then and .catch
    axios
        .get("https://randomuser.me/api/")
        .then((res) => {
            console.log("results from axios: ", res);
            dispatch({ type: FETCHING_SUCCESS, payload: res.data.results[0] });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FETCHING_FAILURE,
                payload: `${err.statusText} with response code ${err.status}`,
>>>>>>> 8191b5c0acdfd4ca6d9f5448c75208cd3c06a154
            });
        });
};
