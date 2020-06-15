import React, { Component } from 'react'

export class Home1 extends Component {
    render() {
        return (
            <div className="details-container col-md-6 my-4">
                <h2 className="px-3 pb-4 text-white">
                    Find tours and<br /> leisure in africa
                    </h2>
                <div className="form-container">
                    <div class="col-md-10 mb-3">
                        <div class="input-group">
                            <input type="text" class="form-control font-12" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required={true} />
                            <div class="input-group-append">
                                <span class="input-group-text next-btn bg-color text-white font-12" id="inputGroupPrepend">Next</span>
                            </div>
                            <div class="invalid-feedback">
                                Please choose a username.
                                </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home1
