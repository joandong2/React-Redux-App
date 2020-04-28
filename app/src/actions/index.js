import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

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
            });
        });
};
