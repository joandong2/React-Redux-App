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
                error: "There was an error.",
            };
        default:
            return state;
    }
};
