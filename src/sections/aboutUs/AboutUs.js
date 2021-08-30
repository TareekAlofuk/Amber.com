import './aboutUs.css'
import * as React from "react";

class AboutUs extends React.Component {

    render() {
        let content = this.props.language === 'ar' ?
            {
                sectionTitle:'من نحن؟',
                partOneTitle:'عن الهايبر',
                partOneFirstBody:'- Amber علامة تجارية مملوكة لصالح شركة ارض العنبر تهتم بتقديم الخدمات كافة في قطاع التجزئة لزبائننا الكرام في جميع متاجرنا (هايبر ماركت ، سوبر ماركت ، مني ماركت ) نبدا فتح فرعنا الاول في ابرز محافظات العراق النجف الاشرف التي تقع في جنوب غرب العاصمة بغداد وتقدم قريبا خدماتنا في عدة فروع داخل محافظات العراق',
                partOneSecondBody:'يغطي مساحة ٣٠٠٠م ويقع في مجمع النخلة الترفيهي الكائن في حي الاسكان.',
                partTwoTitle:'رؤية الهايبر',
                partTwoBody:'- يقدم هايبر ماركت عنبر جميع المنتجات الضرورية للعائلة مثل (المنظفات ، الحوم ، الالبان ، الاجهزة المنزلية ، المواد الغذائية ، العاب الاطفال ، اجهزة الهاتف المحمول ، الفواكه ، الخضروات ، القرطاسية ، مواد التجميل ، الملابس ) ؛ ويوفر خدمة التسوق الالكتروني عبر التطبيق Android والios مع التوصيل المجاني وتتوفر ايضا مواقف لسيارات مجانية وخدمات متنوعة اخرى وكل ذلك من اجل تلبية احتياجات الزبائن وتوفير كل سبل الراحة لهم .'
            }:
            {
                sectionTitle:'Who are we?',
                partOneTitle:'About the hyper',
                partOneFirstBody:'- Amber is a brand owned by the Land of Amber Company. It is concerned in providing all services in the retail sector to our valued customers in all our stores (hyper market, supermarket, mini market) Our services are in several branches within the governorates of Iraq.',
                partOneSecondBody:'It covers an area of 3000 square meters and located in the Al-Nakhla entertainment complex in the Al-Iskan neighborhood.',
                partTwoTitle:'Hyper’s vision',
                partTwoBody:'- Ambar hypermarket offers all the necessary products for the family such as (detergents, meats, dairy, houseware, foods, children\'s toys, mobile phones, fruits, vegetables, stationery, cosmetics, clothes); It provides an online shopping service via Android and iOS, with free delivery. There are also free parking spaces and various other services, all in order to meet the needs of customers and provide them with all means of comfort.'
            }
        return <section className={"aboutUs"} id={"aboutUs"}>
            <h1 className={'aboutUsTitle'}>
                {content.sectionTitle}
            </h1>
            <div className={'aboutUsContent'}>
                <div className={"contentSec1"}>
                    <h3>{content.partOneTitle}</h3>
                        <p>{content.partOneFirstBody}</p>
                        <p>{content.partOneSecondBody}</p>
                    <br/>
                    <h3>{content.partTwoTitle}</h3>
                         <p>
                             {content.partTwoBody}
                         </p>
                </div>
                <div className={"contentSec2"}>
                    <img src="./img/optionMarket.svg" alt="empty cart" className={'aboutUsImg'}/>
                </div>
            </div>

        </section>
    }
}
export default AboutUs
