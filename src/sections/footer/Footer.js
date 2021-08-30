import './footer.css'
import * as React from "react";


class Footer extends React.Component {


    render() {
        let content = this.props.language === 'ar' ?
            {
                navOneText:'الرئيسية',
                navTowText:'خدماتنا',
                navThreeText:'من نحن',
                navFourText:'العلامات التجارية',
                navFiveText:'سياسة الخصوصية',
            } :
            {
                navOneText:'HOME',
                navTowText:'SERVICES',
                navThreeText:'ABOUT US',
                navFourText:'BRANDS',
                navFiveText:'PRIVACY POLICY',
            }
        return (
            <div className={'footer'} id={'footer'}>
                <div className={'iconContainer'}>
                    <lottie-player src={this.props.language === 'ar'?"./img/introAr.json" : "./img/introEn.json"}  background={"transparent"}  speed="1"   style={{height: '40vh'}} loop={true}  autoplay={true}/>
                </div>
                <div className={"footerNav"}>
                    <a href={"/#header"} className={"footerNavItem"}>{content.navOneText}</a>
                    <a href={"/#ourServices"} className={"footerNavItem "}>{content.navTowText}</a>
                    <a href={"/#aboutUs"} className={"footerNavItem"}>{content.navThreeText}</a>
                    <a href={"/#brands"} className={"footerNavItem"}>{content.navFourText}</a>
                    <a href={"/#footer"} onClick={this.props.changePopupStatus} className={"footerNavItem"}>{content.navFiveText}</a>
                </div>
                <div className={"copyRight"}>
                    <small>&copy; Copyright 2020, AMBER Hypermarket</small>
                </div>
            </div>
        );
    }
}


export default Footer