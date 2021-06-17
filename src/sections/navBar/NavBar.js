import * as React from "react";
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isNavOpen:false}
    }
    changeNavStatus = () => {
        this.setState({isNavOpen:!this.state.isNavOpen})
    }

    render() {
        return (
            <div className="navigation">
                <input type="checkbox" checked={this.state.isNavOpen} onClick={this.changeNavStatus} className="navigation__checkbox" id="navi-toggle"/>

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="/#"
                                                            onClick={this.changeNavStatus}
                                                            className="navigation__link"><span>01</span> من
                            نحن</a></li>
                        <li className="navigation__item"><a href="/#"
                                                            onClick={this.changeNavStatus}

                                                            className="navigation__link"><span>02</span> منتجاتنا</a>
                        </li>
                        <li className="navigation__item"><a href="/#"
                                                            onClick={this.changeNavStatus}
                                                            className="navigation__link"> <span>03</span>خدماتنا</a>
                        </li>
                        <li className="navigation__item"><a href="/#"
                                                            className="navigation__link"
                                                            onClick={this.props.changePopupStatus}><span>04</span>سياسة
                            الخصوصية </a>
                        </li>
                        <li className="navigation__item"><a href="/#"
                                                            onClick={this.changeNavStatus}
                                                            className="navigation__link"><span>05</span>يس</a>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default NavBar
// <div className={'NavBar'}>
//     {/*<svg  height="612px" viewBox="0 0 612 612"  className={"openNavIcon"}>*/}
//     {/*    <path d="M0,95.625v38.25h612v-38.25H0z M0,325.125h612v-38.25H0V325.125z M0,516.375h612v-38.25H0V516.375z" className={"a"} />*/}
//     {/*</svg>*/}
// </div>