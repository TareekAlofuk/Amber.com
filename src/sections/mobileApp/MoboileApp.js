import * as React from "react";
import './mobileApp.css'

class MoboileApp extends  React.Component {
    render() {
        let content = this.props.language === 'ar' ? {
            title:"تسوق من التطبيق" ,
            headerText:'استمتع بتجربة تسوق فريدة',
            paragraph:'استمتع بتجربة التسوق من خلال التطبيق واحصل على العروض والخصوم المميزة مع خدمة التوصيل ستتمكن من تغطية جميع احتياجاتك وانت في المنزل.'
        }:{
            title:"Online shopping" ,
            headerText:'Enjoy a unique shopping experience',
            paragraph:'Enjoy online shopping via our phone application and get the latest sales and discounts with our delivery service that surely will fill all your needs wherever you were'
        }
        return <section className={'mobileAppSection'}>
            <h1 className={'mobileAppTitle'}>
                {content.title}
            </h1>
            <div className={'mobileAppHeader'} >

                <div className={'firstPart'}>
                    <h2>{content.headerText}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </h2>
                    <p>
                        {content.paragraph}
                    </p>
                    <div className={'downloadImgContainer'}>
                        <a href={'https://www.apple.com/app-store/'}>
                            <img src="./img/appStore.png"  alt="download App for android" className={'downloadImg'}/>
                        </a>
                        <a href={'https://play.google.com/store'}>
                            <img src="./img/playStore.png" alt="download App for ios" className={'downloadImg'}/>
                        </a>
                    </div>
                </div>
                <div className={'secondPart'}>
                    <img src="./img/phone.png" alt="phone" className={'phoneImg'}/>
                </div>
            </div>
        </section>
    }
}

export default MoboileApp