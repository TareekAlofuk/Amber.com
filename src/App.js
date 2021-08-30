import './App.css';
import HeaderPage from "./sections/header/HeaderPage";
import NavBar from "./sections/navBar/NavBar";
import OurServices from "./sections/ourServices/OurServices";
import Footer from "./sections/footer/Footer";
import * as React from "react";
import Brands from "./sections/Brands/Brands";
import AboutUs from "./sections/aboutUs/AboutUs";
import PrivacyPolicy from "./sections/popupSections/privacyPolicy";
import MoboileApp from "./sections/mobileApp/MoboileApp";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {popupIsOpen:false , isLoading:true , language:localStorage.getItem('language') || 'ar'}
    }
    changePopupStatus = () => {
        this.setState({popupIsOpen:!this.state.popupIsOpen})
    }

    changeLanguage = () => {
        this.state.language === 'ar' ? this.setState({language:'en' , isLoading:true}) :this.setState({language:'ar', isLoading:true}) ;
        setTimeout(() => {this.setState({isLoading:false})} , 6000);
    }
    componentDidMount() {
        setTimeout(() => {this.setState({isLoading:false})} , 6000);
    }

    render() {
        localStorage.setItem('language' , this.state.language);
            return (
                <div className="App" dir={this.state.language === 'ar'?'rtl' : 'ltr'}>
                    {this.state.isLoading ? <div className={'start'}>
                        <lottie-player src={this.state.language === 'ar'?"./img/introAr.json" : "./img/introEn.json"}  background={"transparent"}  speed="1"  style={{width: '600px' , height: '600px'}}  loop={true}  autoplay={true}/>
                    </div> : ''
                    }
                    <PrivacyPolicy isOpen={this.state.popupIsOpen} changePopupStatus={this.changePopupStatus} language={this.state.language}/>
                    <NavBar changeLanguage={this.changeLanguage} changePopupStatus={this.changePopupStatus} language={this.state.language}/>
                    <HeaderPage language={this.state.language}/>
                    <OurServices language={this.state.language} />
                    <AboutUs language={this.state.language} />
                    <MoboileApp language={this.state.language}/>
                    <Brands language={this.state.language} />
                    <Footer changePopupStatus={this.changePopupStatus} language={this.state.language}/>
                </div>
            );


    }
}

export default App ;
