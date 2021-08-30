import * as React from "react";
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isNavOpen: false}
    }

    changeNavStatus = () => {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        let content = this.props.language === 'ar' ?
            {
                navOneText: 'الرئيسية',
                navTowText: 'خدماتنا',
                navThreeText: 'من نحن',
                navFourText: 'العلامات التجارية',
                navFiveText: 'سياسة الخصوصية',
                navSixText: 'English'
            } :
            {
                navOneText: 'HOME',
                navTowText: 'SERVICES',
                navThreeText: 'ABOUT US',
                navFourText: 'BRANDS',
                navFiveText: 'PRIVACY POLICY',
                navSixText: 'عربي'
            }
        return (
            <div className="navigation">
                <input type="checkbox" checked={this.state.isNavOpen} onClick={this.changeNavStatus}
                       className="navigation__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a href="/#"
                               onClick={this.changeNavStatus}
                               className="navigation__link">
                                {content.navOneText}
                            </a>
                        </li>

                        <li className="navigation__item">
                            <a href="/#ourServices"
                               onClick={this.changeNavStatus}
                               className="navigation__link">
                                {content.navTowText}</a>
                        </li>
                        <li className="navigation__item">
                            <a href="/#aboutUs"
                               onClick={this.changeNavStatus}

                               className="navigation__link"> {content.navThreeText}
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="/#brands"
                               onClick={this.changeNavStatus}
                               className="navigation__link">{content.navFourText}</a>
                        </li>
                        <li className="navigation__item">
                            <a href="/#"
                               className="navigation__link"
                               onClick={this.props.changePopupStatus}>{content.navFiveText} </a>
                        </li>
                        <li className="navigation__item">
                            <a href="/#"
                               className="navigation__link"
                               onClick={() => {
                                   this.props.changeLanguage();
                                   this.changeNavStatus();
                               }}
                            >
                                {content.navSixText}
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>

        );
    }

}

export default NavBar
