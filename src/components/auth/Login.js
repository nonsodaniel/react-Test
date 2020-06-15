import React, { Component } from 'react'
import '../assets/css/auth.css'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <section id="login" className="bg-image">
                <Link to="/">
                    <div className="icon-cancel-div">
                        <i className="far fa-times-circle icon-cancel p-4"></i>
                    </div>
                </Link>
                <h6 className="text-white location-text">     zanzibar, Tanzania</h6>


                <div className="container main-container" style={{ height: "100vh" }}>
                    <div className="col-md-5 auth-col py-5">
                        <div className="auth-title text-white d-flex justify-content-around">
                            <h3>Welcome  <br /> Back <br /></h3>
                            <div className="auth-title-divide bg-white"></div>
                            <h3>Your Journey <br />Starts Here</h3>
                        </div>
                        <form className="pt-3">
                            <div className="form-auth">
                                <div className="col auth-form">
                                    <input type="text" className="form-control text-box my-3 text-white auth-text border-danger" placeholder="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control text-box my-3 text-white auth-text border-danger" placeholder="Last name" />
                                </div>
                                <div className="col d-flex justify-content-center mt-4 mb-4 flex-column align-items-center">
                                    <button className="btn bg-color text-white w-75 mt-4 mb-4">Login</button>
                                    <span className="text-white">Don't have an account?</span>
                                    <Link to="/register"><span className="text-color">Sign Up</span></Link>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>


                <div className="img-overlay"></div>
            </section>
        )
    }
}

export default Login
