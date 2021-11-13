import React from 'react';
import img from '../../../Images/2350619-1.png';

const Faq = () => {
    return (
        // <div className="row">
        //     <div className="col-sm-12 col-md-6">

        //     </div>
        //     <div className="col-sm-12 col-md-6">

        //     </div>
        // </div>
        <div className="container">
            <h1 class="text-center color fw-bold mt-5">Frequently Asked Questions</h1>
            <div class="row d-flex justify-content-lg-between">
                <div class="col-lg-5 mx-auto">
                    <img src={img} alt="" class="img-fluid" />
                </div>
                <div class="col-lg-6">
                    <div class="accordion " id="accordionExample">
                        <div class="accordion-item my-4 honda-cbr-faq">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What are the most important things I should
                                    know about riding a bike?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Safety First! Always obey the rules of the road. Obey all traffic signals, signs,
                                    and laws. Get in the mindset of
                                    “driving” your bike—not just “riding” your bike. This will help you be a more
                                    focused and legally compliant bike rider.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item my-4 honda-cbr-faq">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can I tell if my helmet is old and I need a
                                    new one?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Bear in mind that if the helmet did its job most people would tell you that they did
                                    not even hit their head, or did not
                                    hit their head that hard. And the thin shells on most helmets now tend to hide any
                                    dents in the foam. But if you can see
                                    marks on the shell or measure any foam crush at all, replace the helmet.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item my-4 honda-cbr-faq">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    My bike has been in storage is it safe to ride?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Is it OK to keep a bike outside?
                                    The bottom line: Leaving your bike outside for a day or two won't do major damage.
                                    You may see signs of rust after a
                                    week of neglect. After one month in bad conditions, your beloved bike parts will
                                    start to degrade.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item my-4 honda-cbr-faq">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What rules should I follow when riding my bike?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>1. Be visible at all times. - Wear bright and visible clothes. Reflective stripes
                                        ads viability. Always stay out of
                                        blind zones. Alert other drivers before entering their blind zone.</p>
                                    <p>3. Everyone in the road is dumb and partially blind. - Well, just imagine so and
                                        be prepared for an unexpected turn or
                                        braking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;