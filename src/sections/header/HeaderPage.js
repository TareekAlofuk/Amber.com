import * as React from "react";
import './HeaderPage.css';


class HeaderPage extends React.Component {


    render() {
        return(
            <div className={'header'}>

                    <div>
                            <img src="./img/marketing.svg" alt="empty cart" className={'headerImg'}/>
                    </div>
                    <div className={'colorSection'}>
                        <div className={"headerText"}>
                            <div className={'firstHeaderText'}>عـنبــــــــر</div>
                            <div className={'secondHeaderText'}>فـي أرض الـعنبر</div>
                        </div>
                   </div>

            </div>
        )
    }
}


export default HeaderPage