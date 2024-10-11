import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="/images/profile-img.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">    
                                <div className="auth-logo">
                                    

                                <a href="index.html" className="auth-logo-dark">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <FontAwesomeIcon icon={faUser} className="rounded-circle" style={{ height: '34px', width: '34px' }} />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2">
                                    <form className="form-horizontal" action="POST">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" />
                                                <button className="btn btn-light" type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                            </div>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="remember-check" />
                                            <label className="form-check-label" htmlFor="remember-check">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
