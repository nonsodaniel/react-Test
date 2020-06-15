import React, { Component } from 'react'
import Header from '../layouts/Header'
import './checkout.css'
import monkey from '../assets/images/monkey.jpg'

class Checkout extends Component {
    render() {
        return (
            <>
                <Header position="inherit" />
                <section id="checkout">
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-9 checkout-left">
                                <div className="card">
                                    <div className="mx-5 d-flex my-3">
                                        <button type="button" class="btn btn-danger" disabled={true}>
                                            <span class="badge badge-white">4</span>
                                        </button>
                                        <h5 className="align-self-end pl-4">Package</h5>
                                    </div>

                                    <img src={monkey} className="package-img" alt="..." />
                                </div>
                            </div>
                            <div className="col-md-3 checkout-right">
                                <div className="package-details border">
                                    <div className="package-details-header d-flex justify-content-around py-4 border-bottom">
                                        <h5>1 Package</h5> <span>x 4 people</span>
                                    </div>
                                    <div className="p-4 border-bottom font-12">
                                        <span>7 -14 April 2020</span>
                                    </div>

                                    <div className="p-4 border-bottom font-12">
                                        <h6>Guests</h6>
                                        <div className="d-flex justify-content-between py-1">
                                            <span>Adivts</span>
                                            <span>2</span>
                                        </div>
                                        <div className="d-flex justify-content-between py-1">
                                            <span>Children</span>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between p-4">
                                        <span>Total to pay</span>
                                        <h5>$700</h5>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="package-buttons">
                            <button type="button" class="btn btn-outline-danger btn-lg">Add more Activities</button>
                            <button type="button" class="btn btn-info  btn-lg">Book flight and hotel</button>
                        </div>


                        <div className="row">
                            <div className="form col-md-9 my-5 border contact-details">
                                <div className="d-flex py-5 px-4">
                                    <button type="button" class="btn btn-primary">
                                        2
                                <span class="sr-only">unread messages</span>
                                    </button>
                                    <h5 className="px-4 align-self-end">Contact Details</h5>
                                </div>
                                <div className="form">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Email</label>
                                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Password</label>
                                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Address</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress2">Address 2</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCity">City</label>
                                                <input type="text" class="form-control" id="inputCity" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputState">State</label>
                                                <select id="inputState" class="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputZip">Zip</label>
                                                <input type="text" class="form-control" id="inputZip" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center my-4">
                                            <button type="submit" class="btn bg-color text-white contact-continue-btn" disabled={true}>Continue</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Checkout
