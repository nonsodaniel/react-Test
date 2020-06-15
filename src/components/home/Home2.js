import React, { Component } from 'react'
import Slider from "react-slick";
import Axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Home2 extends Component {
    state = {
        isLoading: true, images: [],
        URL: "https://api.unsplash.com/photos/random?count=30&client_id=Od0sXvqphCVnmXukVaHww8eDgNP-q3mAtyhB-bbUAZ8",
    }
    componentDidMount() {
        this.loadWallpapers()
    }
    loadWallpapers = async () => {
        this.setState({ isLoading: true })
        let { URL } = this.state
        Axios.get(URL)
            .then(res => {
                this.setState({ images: res.data, isLoading: false })
            }).catch(err => console.log(err))
    }
    render() {
        console.log(this.state.images)
        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,


            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        let { images } = this.state
        return (
            <div className="details-container col-md-6 my-5">
                <h1 className="px-3 pb-2 text-white hero-text">
                    Find tours and<br /> leisure in africa
                    </h1>
                <div className="form-container my-5">
                    <div class="col-md-10 mb-3">
                        <div class="input-group">
                            <input type="text" class="form-control font-12" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required={true} />
                            <div class="input-group-append">
                                <span class="input-group-text next-btn bg-color text-white px-4 font-12" id="inputGroupPrepend">OK</span>
                            </div>
                            <div class="invalid-feedback">
                                Please choose a username.
                                </div>
                        </div>
                    </div>
                </div>
                <div className="location-slider">
                    <Slider {...settings}>
                        {
                            images && images.length > 0 ? (
                                images.map(o => {
                                    let image = o.urls.regular
                                    console.log(image)
                                    return (
                                        <>

                                            <div className="tour-locations">
                                                <img src={image} alt="../" className="location-image" />
                                            </div>

                                        </>
                                    )
                                })
                            ) : (
                                    <div className="tour-locations">
                                        No images
            </div>
                                )

                        }

                    </Slider>
                </div>
            </div >
        )
    }
}

export default Home2
