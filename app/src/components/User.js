import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

const User = ({ getUser, user, isFetching, error }) => {
    useEffect(() => {
        getUser();
    }, [getUser]);

    if (user !== null) {
        console.log("user", user);
        return (
            <>
                <h1>
                    hello{" "}
                    {user.name.title +
                        " " +
                        user.name.first +
                        " " +
                        user.name.last}
                </h1>
                <button onClick={getUser}>Load New User</button>
            </>
        );
    } else {
        return <button onClick={getUser}>Load New User</button>;
    }
};

// hook up the connect to our store
const mapStateToProps = (state) => {
    return {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { getUser })(User);
