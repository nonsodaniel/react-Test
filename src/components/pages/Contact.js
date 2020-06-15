import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            {/* <!-- start Main Wrapper --> */}
            <div className="main-wrapper scrollspy-container">

                <section className="page-wrapper page-result pb-0">

                    <div className="page-title bg-light mb-0">

                        <div className="container">

                            <div className="row gap-15 align-items-center">

                                <div className="col-12 col-md-7">

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><NavLink to="/"><i className="fas fa-home"></i></NavLink></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                        </ol>
                                    </nav>

                                    <h4 className="mt-0 line-125">Contact</h4>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="container pv-60">

                        <div className="map-contact-wrapper">

                            {/* <div id="map" data-lat="25.19739" data-lon="55.28821" style={{ width: "100%", height: "500px" }}></div> */}
                            <div className="d-flex justify-content-center">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1610365636916!2d3.3749193147705845!3d6.501288195297216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c605a6e533d%3A0xab788523f467b965!2sLeadSpace%20Yaba%20(Lagos)!5e0!3m2!1sen!2sng!4v1570396688214!5m2!1sen!2sng" width="1200" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen=""></iframe> */}

                            </div>

                            <div className="infobox-wrapper contact-infobox">
                                <div id="infobox">
                                    <div className="infobox-address">
                                        <h6>We Are Here</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-50"></div>

                        <div className="row gap-50 gap-lg-0">

                            <div className="col-12 col-lg-5 col-xl-4">

                                <h4 className="heading-title"><span>Drop us <span className="font200">a message:</span></span></h4>

                                <form id="contact-form">

                                    <div className="contact-successful-messages"></div>

                                    <div className="contact-inner">

                                        <div className="form-group">
                                            <label for="form_name">Full Name *</label>
                                            <input id="form_name" type="text" name="name" className="form-control" required="required" data-error="Your name is required." />
                                            <div className="help-block with-errors text-danger"></div>
                                        </div>

                                        <div className="form-group">
                                            <label for="form_email">Email Address *</label>
                                            <input id="form_email" type="email" name="email" className="form-control" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors text-danger"></div>
                                        </div>

                                        <div className="form-group">
                                            <label for="form_subject">Subject</label>
                                            <input id="form_subject" type="text" name="email" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="form_message">Message *</label>
                                            <textarea id="form_message" name="message" className="form-control" rows="7s" required="required" data-error="Please,leave us a message."></textarea>
                                            <div className="help-block with-errors text-danger"></div>
                                        </div>

                                        <input type="submit" className="btn btn-primary btn-send btn-wide mt-15" value="Send message" />

                                    </div>

                                </form>

                            </div>

                            <div className="col-12 col-lg-6 ml-auto">

                                <h4 className="heading-title"><span>Contact <span className="font200">information:</span></span></h4>
                                <p className="post-heading">Excited him now natural saw passage offices you minuter. At by asked being court hopes</p>

                                <ul className="contact-list-01">

                                    <li>
                                        <span className="icon-font"><i className="ion-android-pin"></i></span>
                                        <h6>Address</h6>
                                        No 70 Olonode street, off Hughes, <br />Alagomeji Yaba, 100001, Lagos<br />G92G+GR Lagos
								</li>

                                    <li>
                                        <span className="icon-font"><i className="ion-android-mail"></i></span>
                                        <h6>Email</h6>
                                        <NavLink to="/">toursom@travels.com</NavLink>
                                    </li>

                                    <li>
                                        <span className="icon-font"><i className="ion-android-call"></i></span>
                                        <h6>Phone</h6>
                                        +234 909-654-8615
								</li>

                                    {/* <li>
                                        <span className="icon-font"><i className="ion-android-print"></i></span>
                                        <h6>Fax</h6>
                                        (123) 254-8547
								</li> */}

                                </ul>

                                <div className="mb-50"></div>

                                <h4 className="heading-title"><span>Find <span className="font200">us on:</span></span></h4>

                                <div className="social-btns-01">
                                    <NavLink to="/" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fab fa-facebook"></i></NavLink>
                                    <NavLink to="/" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fab fa-twitter"></i></NavLink>
                                    <NavLink to="/" data-toggle="tooltip" data-placement="top" title="Google Plus"><i className="fab fa-google-plus "></i></NavLink>
                                    <NavLink to="/" data-toggle="tooltip" data-placement="top" title="Codepen"><i className="fab fa-codepen"></i></NavLink>
                                    <NavLink to="/" data-toggle="tooltip" data-placement="top" title="Behance"><i className="fab fa-behance"></i></NavLink>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
            {/* <!-- end Main Wrapper --> */}

        </>
    )
}

export default Contact
