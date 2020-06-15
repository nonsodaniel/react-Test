import React, { Component } from 'react'
import '../assets/css/auth.css'

class TourGuideRegister extends Component {
    render() {
        return (
            <section id="register" className="bg-image">
                <div className="icon-cancel-div">
                    <i className="far fa-times-circle icon-cancel p-4"></i>
                </div>
                <h6 className="text-white location-text">     zanzibar, Tanzania</h6>
                <div className="container-fluid main-container border-dark" style={{ margin: "60px 0" }}>

                    <div className="row">
                        <div className="col-md-8">
                            <div className=" auth-col">

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
                                            <span className="text-color font-14">Login</span>
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className="col-md-3 biz-details-right bg-white">
                            <h3 className="text-center text-dark pt-3">Your Business Details</h3>
                            <form className="">
                                <div className="col auth-form">
                                    <input type="text"
                                        className="form-control text-box my-3 text-dark font-14 biz-details shadow-none border-danger"
                                        placeholder="Business Name" />
                                </div>
                                <div className="col auth-form">
                                    <input type="text"
                                        className="form-control text-box my-3 text-dark font-14 biz-details shadow-none border-danger"
                                        placeholder="Office Address" />
                                </div>
                                <p className="font-12 px-4 text-center">Upload business registration document and a valid government approved ID card.</p>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="img-overlay"></div>
            </section>
        )
    }
}

export default TourGuideRegister
