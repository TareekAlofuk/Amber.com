import * as React from "react";
import './OurServices.css';


class OurServices extends React.Component {

    render() {
        return (
            <div className={'ourServices'} id={"ourServices"}>
                <div className={'sectionTitle'}>
                    خدماتنا
                </div>
                <div className="section-features">

                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-world"></i>*/}
                                <h3 className="heading-tertiary u-margin-bottom-small">تسوق وانت في البيت</h3>
                                <p className="feature-box__text">
                                    تسوق وانت في البيت  تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-compass"></i>*/}
                                <h3 className="heading-tertiary u-margin-bottom-small">تسوق وانت في البيت</h3>
                                <p className="feature-box__text">
                                    تسوق وانت في البيت  تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-map"></i>*/}
                                <h3 className="heading-tertiary u-margin-bottom-small">تسوق وانت في البيت</h3>
                                <p className="feature-box__text">
                                    تسوق وانت في البيت  تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت.

                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-heart"></i>*/}
                                <h3 className="heading-tertiary u-margin-bottom-small">تسوق وانت في البيت</h3>
                                <p className="feature-box__text">
                                    تسوق وانت في البيت  تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت تسوق وانت في البيت.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurServices