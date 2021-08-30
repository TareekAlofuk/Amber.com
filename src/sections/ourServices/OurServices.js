import * as React from "react";
import './OurServices.css';


class OurServices extends React.Component {


    render() {
        let Text = this.props.language === 'ar' ?
            {
                sectionTitle:'خدماتنا',
                serviceOneTitle:'التسوق الالكتروني',
                serviceOneBody:'تتوفر خدمة التسوق الالكتروني عبر التطبيق Android والios',
                serviceTwoTitle:'خدمة التوصيل',
                serviceTwoBody:'تتوفر خدمة توصيل مجانية لزبائن الهايبر عند بلوغ سعر الطلب الى ٢٥,٠٠٠ دينار عراقي',
                serviceThreeTitle:'مواقف سيارات',
                serviceThreeBody:'تتوفر مواقف سيارات خاصة آمنة و مجانية و سهلة الوصول للزبائن',
                serviceFourTitle:'بطاقة ياسمين',
                serviceFourBody:'احصل على خصومات وجوائز بالاضافة الى الشراء بالدفع عبر بطاقة (ياسمين) الخاصة بزبائن هايبر ماركت عنبر',
            }:
            {
                sectionTitle:'Our services',
                serviceOneTitle:'Online shopping',
                serviceOneBody:'We provide an online shopping app that is available on both Android and IOS',
                serviceTwoTitle:'Delivery Services',
                serviceTwoBody:'A free delivery when the total amount of purchasing is over 25,000IQD ',
                serviceThreeTitle:'Car parking',
                serviceThreeBody:'Free, safe and easy to reach car-park',
                serviceFourTitle:'Yasmeen card',
                serviceFourBody:'Get discounts and prizes plus paying using Yasmeen card specially to the hyper customers',
            }
        return (
            <div className={'ourServices'} id={"ourServices"}>
                <h1 className={'sectionTitle'}>
                    {Text.sectionTitle}
                </h1>
                <div className="section-features">

                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-world"></i>*/}
                                <img height={50} width={50} src="img/servicesIcons/cart-outline.svg" alt="icon" />
                                <h3 className="heading-tertiary u-margin-bottom-small" style={{fontSize:"1.17em"}} >{Text.serviceOneTitle}</h3>
                                <p className="feature-box__text">
                                    {Text.serviceOneBody}
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-map"></i>*/}
                                <img height={50} width={50} src="img/servicesIcons/delivery.svg" alt="icon" />
                                <h3 className="heading-tertiary u-margin-bottom-small">{Text.serviceTwoTitle}</h3>
                                <p className="feature-box__text">
                                    {Text.serviceTwoBody}
                                </p>
                            </div>
                        </div>



                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <img height={50} width={50} src="img/servicesIcons/car-sport-outline.svg" alt="icon" />
                                {/*<i className="feature-box__icon icon-basic-heart"></i>*/}
                                <h3 className="heading-tertiary u-margin-bottom-small">{Text.serviceThreeTitle}</h3>
                                <p className="feature-box__text">
                                    {Text.serviceThreeBody}
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                {/*<i className="feature-box__icon icon-basic-compass"></i>*/}
                                <img height={50} width={50} src="img/servicesIcons/card-outline.svg" alt="icon" />
                                <h3 className="heading-tertiary u-margin-bottom-small">{Text.serviceFourTitle}</h3>
                                <p className="feature-box__text">
                                    {Text.serviceFourBody}
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