import * as React from "react";
import './HeaderPage.css';


class HeaderPage extends React.Component {


    render() {
        let content = this.props.language === 'ar'?{
            firstHeaderText:'عـنبــــــــر',
            secondHeaderText:'من أرض الـعنبر',
            cartImage:'./img/marketing 1.png',
            className:{first:'arabicFirstTextAnimation' , second:'arabicSecondTextAnimation'}
        }:{
            firstHeaderText:'Amber',
            secondHeaderText:'from the land of amber',
            cartImage:'./img/marketing 1.png',
            className:{first:'EnglishFirstTextAnimation' , second:'EnglishSecondTextAnimation'}
        }
        return(
            <div className={'header'} id={'header'}>

                    <div className={'cartImageContainer'}>
                            <img src={content.cartImage} alt="empty cart" className={'cartImage'}/>
                    </div>
                    <div className={'colorSection'}>
                        <div className={"headerText"}>
                            <div className={content.className.first + ' firstHeaderText'}>{content.firstHeaderText}</div>
                            <div className={content.className.second + ' secondHeaderText'}>{content.secondHeaderText}</div>
                        </div>
                   </div>

            </div>
        )
    }
}


export default HeaderPage