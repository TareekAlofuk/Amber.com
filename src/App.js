import './App.css';
import HeaderPage from "./sections/header/HeaderPage";
import NavBar from "./sections/navBar/NavBar";
import OurServices from "./sections/ourServices/OurServices";
import Footer from "./sections/footer/Footer";
import Popup from "./helperComponents/popup/Popup";
import * as React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {popupIsOpen:false};
    }
    changePopupStatus = () => {
        this.setState({popupIsOpen:!this.state.popupIsOpen})
        console.log("ok")
    }
    render() {
    return (
    <div className="App">
        <Popup   isOpen={this.state.popupIsOpen} changePopupStatus={this.changePopupStatus}/>
        <NavBar changePopupStatus={this.changePopupStatus}/>
        <HeaderPage/>
        <OurServices/>
        <Footer changePopupStatus={this.changePopupStatus}/>
    </div>
  );
    }
}

export default App;
