import './footer.css'
import * as React from "react";


class Footer extends React.Component {


    render() {
        return (
            <div className={'footer'}>
                <div className={'iconContainer'}>
                    <img src={'img/logo.png'} className={'logo'} alt={'logo'}/>
                    <img src={'img/logoName.png'} className={'logoName'} alt={'logoName'}/>
                </div>
                <div className={"footerNav"}>
                    <a href={"/#"} className={"footerNavItem"}>من نحن</a>
                    <a href={"/#"} className={"footerNavItem"}>منتجاتنا</a>
                    <a href={"/#"} className={"footerNavItem"}>البراند</a>
                    <a href={"/#ourServices"} className={"footerNavItem "}>خدماتنا</a>
                    <button onClick={this.props.changePopupStatus} className={"footerNavItem buttonNavItem"}>سياسة الخصوصية</button>
                </div>
                <div className={"copyRight"}>
                    <small>&copy; Copyright 2020, Example Corporation</small>
                </div>
            </div>
        );
    }
}


export default Footer