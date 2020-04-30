import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

import Octicon, { Home, Mail, Mute, Megaphone } from "@primer/octicons-react";

const User = ({ getUser, isFetching, users, error }) => {
    useEffect(() => {
        getUser();
    }, [getUser]);

    const submitHandler = (e) => {
        e.preventDefault();
        getUser(e.target.gender.value, e.target.country.value);
    };

    return (
        <div>
            {isFetching ? (
                <p>Loading...</p>
            ) : (
                <div class="row profile-container">
                    <div className="col-sm-4">
                        <h3>Random Users</h3>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <span>Gender: </span>
                                <br />
                                <div className="form-check">
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
                                        htmlFor="male"
                                    >
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="female"
                                        id="female"
                                        name="gender"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="female"
                                    >
                                        Female
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value=""
                                        id="mixed"
                                        name="gender"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="mixed"
                                    >
                                        Mixed
                                    </label>
                                </div>
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
                    </div>
                    <div className="col-sm-8">
                        {users
                            ? users.map((user) => (
                                  <div
                                      className="profile"
                                      key={user.name.first}
                                  >
                                      <p>
                                          <img
                                              src={user.picture.large}
                                              alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
                                          />
                                      </p>
                                      <p>
                                          {`${user.name.title} ${user.name.first} ${user.name.last}, ${user.dob.age} yrs old.`}
                                      </p>
                                      <p>
                                          <Octicon
                                              icon={Home}
                                              size="small"
                                              verticalAlign="middle"
                                          />{" "}
                                          {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode} `}
                                      </p>
                                      <p>
                                          <Octicon
                                              icon={Mail}
                                              size="small"
                                              verticalAlign="middle"
                                          />
                                          {user.email}
                                      </p>
                                      <p>
                                          <Octicon
                                              icon={Mute}
                                              size="small"
                                              verticalAlign="middle"
                                          />
                                          {user.phone}
                                          <span class="space"></span>
                                          <Octicon
                                              icon={Megaphone}
                                              size="small"
                                              verticalAlign="middle"
                                          />
                                          {user.cell}
                                      </p>
                                  </div>
                              ))
                            : "waiting..."}
                    </div>
                </div>
            )}
        </div>
    );
};

// hook up the connect to our store
const mapStateToProps = (state) => {
    return {
        users: state.user,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { getUser })(User);
