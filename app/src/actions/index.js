import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const getUser = (gender, nat) => (dispatch) => {
    dispatch({ type: FETCHING_START });
    // implement the code calling actions for .then and .catch
    axios
        .get(`https://randomuser.me/api/?gender=${gender}&nat=${nat}&results=3`)
        .then((res) => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data.results });
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
            });
        });
};
