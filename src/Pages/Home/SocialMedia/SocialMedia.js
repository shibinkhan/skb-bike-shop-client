import React from 'react';
import img1 from '../../../Images/sm.png';
import img2 from '../../../Images/d0Facebook-logo.png';
import img3 from '../../../Images/580b57fcd9996e24bc43c521.png';
import img4 from '../../../Images/twitter-3-logo-png-transparent.png';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="container mb-5">
            <h1 class="text-center color fw-bold mt-3">Stay Connected</h1>
            <div class="row g-0">
                <div class="col-lg-6">
                    <img src={img1} alt="" class="img-fluid" />
                </div>
                <div class="col-lg-6 bg-sm py-5 d-flex justify-content-center align-items-center">
                    <div class="">
                        <div class="d-flex justify-content-center">
                            <h2 class="text-white display-5 fw-bold">FIND US ON</h2>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="https://www.facebook.com/shibin.khan.sk/" target="blank"><img
                                src={img2} alt="" width="50" class="img-fluid mx-1" /></a>
                            <a href="https://www.facebook.com/shibin.khan.sk/" target="blank"><img
                                src={img3} alt="" width="50"
                                class="img-fluid mx-1" /></a>
                            <a href="https://www.facebook.com/shibin.khan.sk/" target="blank"><img
                                src={img4} alt="" width="50"
                                class="img-fluid mx-1" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;