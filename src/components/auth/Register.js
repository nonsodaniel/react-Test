import React, { Component } from 'react'
import '../assets/css/auth.css'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <section id="register" className="bg-image">
                <Link to="/">
                    <div className="icon-cancel-div">
                        <i className="far fa-times-circle icon-cancel p-4"></i>
                    </div>
                </Link>

                <h6 className="text-white location-text">     zanzibar, Tanzania</h6>


                <div className="container main-container">
                    <div className="col-md-5 auth-col">
                        <div className="auth-title text-white d-flex justify-content-around my-4">
                            <h3>Experience  <br /> Africa <br /></h3>
                            <div className="auth-title-divide bg-white"></div>
                            <h3>Safe <br /> Affordable <br />Customized</h3>
                        </div>
                        <form className="pt-1">
                            <div className="form-auth">
                                <div className="col auth-form">
                                    <input type="text" className="form-control text-box my-3 text-white auth-text shadow-none border-danger" placeholder="Full name" />
                                </div>
                                <div className="col auth-form">
                                    <input type="text" className="form-control text-box my-3 text-white auth-text shadow-none border-danger" placeholder="Email" />
                                </div>
                                <div className="col auth-form">
                                    <input type="text" className="form-control text-box my-3 text-white auth-text shadow-none border-danger" placeholder="Country of residence" />
                                </div>
                                <div className="col form-check">
                                    <input type="text" className="form-control text-box my-3 text-white auth-text shadow-none border-danger" placeholder="Password" />
                                </div>

                                <div className="col form-check pl-5">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label checkbox-title text-white" for="exampleCheck1">I am a tour guide</label>
                                </div>

                                <div className="col form-check pl-5">
                                    <input type="checkbox" class="form-check-input " id="exampleCheck1" />
                                    <label class="form-check-label checkbox-title text-white" for="exampleCheck1">
                                        I have read all terms and understand the terms and conditions governing the use of this service
                                        </label>
                                </div>


                                <div className="col d-flex justify-content-center mt-4 mb-4 flex-column align-items-center">
                                    <button className="btn bg-color text-white w-75 mt-4 mb-4">SIGN UP</button>
                                    <span className="text-white font-14">Already have an account?</span>
                                    <Link to="/register"><span className="text-color">Login</span></Link>
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

export default Register
