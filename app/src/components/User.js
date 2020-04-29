import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

<<<<<<< HEAD
const User = ({ getUser, isFetching, user, error }) => {
=======
const User = ({ getUser, user, isFetching, error }) => {
>>>>>>> 8191b5c0acdfd4ca6d9f5448c75208cd3c06a154
    useEffect(() => {
        getUser();
    }, [getUser]);

<<<<<<< HEAD
    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(e.target.gender.value);
        //console.log(e.target.country.value);
        getUser(e.target.gender.value, e.target.country.value);
    };

    console.log("User", user);

    if (user !== null) {
=======
    if (user !== null) {
        console.log("user", user);
>>>>>>> 8191b5c0acdfd4ca6d9f5448c75208cd3c06a154
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
<<<<<<< HEAD
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <span>Gender: </span>
                        <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                        >
                            Male
                        </label>
                        <input
                            className="form-check-input"
                            type="radio"
                            value="male"
                            id="male"
                            name="gender"
                            defaultChecked
                        />
                        <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                        >
                            Female
                        </label>
                        <input
                            className="form-check-input"
                            type="radio"
                            value="female"
                            id="female"
                            name="gender"
                        />
                    </div>
                    <div className="form-group">
                        <span>Country: </span>
                        <select className="form-control" name="country">
                            <option value="us">United States</option>
                            <option value="au">Australia</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="ch">Switzerland</option>
                            <option value="de">Germany</option>
                            <option value="dk">Denmark</option>
                            <option value="es">Spain</option>
                            <option value="fi">Finland</option>
                            <option value="fr">France</option>
                            <option value="gb">Great Britain</option>
                            <option value="ie">Ireland</option>
                            <option value="ir">Iran</option>
                            <option value="no">Norway</option>
                            <option value="nl">Netherlands</option>
                            <option value="nz">New Zealand</option>
                            <option value="tr">Turkey</option>
                        </select>
                    </div>
                    <button>Get New User</button>
                </form>
            </>
        );
    }

    return <>{error}</>;
=======
                <button onClick={getUser}>Load New User</button>
            </>
        );
    } else {
        return <button onClick={getUser}>Load New User</button>;
    }
>>>>>>> 8191b5c0acdfd4ca6d9f5448c75208cd3c06a154
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
