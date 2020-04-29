import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
    user: null,
    isFetching: false,
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload,
            };
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
<<<<<<< HEAD
                error: action.payload,
=======
                error: "There was an error.",
>>>>>>> 8191b5c0acdfd4ca6d9f5448c75208cd3c06a154
            };
        default:
            return state;
    }
};
