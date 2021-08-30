import './brands.css'
import * as React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class Brands extends React.Component {

     items = [
         <img src="img/logoOfBrands/1.png" alt="logo"  />,
         <img src="img/logoOfBrands/2.png" alt="logo" />,
         <img src="img/logoOfBrands/3.png" alt="logo" />,
         <img src="img/logoOfBrands/4.png" alt="logo" />,
         <img src="img/logoOfBrands/5.png" alt="logo" />,
         <img src="img/logoOfBrands/6.png" alt="logo" />,
         <img src="img/logoOfBrands/7.png" alt="logo" />,
         <img src="img/logoOfBrands/8.png" alt="logo" />,
         <img src="img/logoOfBrands/9.png" alt="logo" />,
         <img src="img/logoOfBrands/10.png" alt="logo" />,
         <img src="img/logoOfBrands/11.png" alt="logo" />,
         <img src="img/logoOfBrands/12.png" alt="logo"  />,
         <img src="img/logoOfBrands/13.png" alt="logo" />,
         <img src="img/logoOfBrands/14.png" alt="logo" />,
         <img src="img/logoOfBrands/15.png" alt="logo" />,
         <img src="img/logoOfBrands/16.png" alt="logo" />,
         <img src="img/logoOfBrands/17.png" alt="logo" />,
         <img src="img/logoOfBrands/18.png" alt="logo" />,
         <img src="img/logoOfBrands/19.png" alt="logo" />,
         <img src="img/logoOfBrands/20.png" alt="logo" />,
         <img src="img/logoOfBrands/21.png" alt="logo"  />,
         <img src="img/logoOfBrands/22.png" alt="logo" />,
         <img src="img/logoOfBrands/23.png" alt="logo" />,
         <img src="img/logoOfBrands/24.png" alt="logo" />,
         <img src="img/logoOfBrands/25.png" alt="logo" />,
         <img src="img/logoOfBrands/26.png" alt="logo" />,
         <img src="img/logoOfBrands/27.png" alt="logo" />,
         <img src="img/logoOfBrands/28.png" alt="logo" />,
         <img src="img/logoOfBrands/29.png" alt="logo" />,
         <img src="img/logoOfBrands/30.png" alt="logo" />,
         <img src="img/logoOfBrands/31.png" alt="logo" />,
         <img src="img/logoOfBrands/32.png" alt="logo" />,
         <img src="img/logoOfBrands/33.png" alt="logo" />,
     ];
    responsive = {
        0: { items: 1,disableDotsControls:true },
        700:{items:2 },
        950:{items:3},
        1024: { items: 3},
        1400:{items:4},
        2000:{items:5}
    }
    render() {

        return (
            <div className={'carouselContainer'} id={'brands'}>
                <AliceCarousel
                    items={this.items}
                    infinite
                    autoPlay
                    autoPlayInterval={1500}
                    responsive={this.responsive}
                    keyboardNavigation={true}
                    mouseTracking={true}
                    autoPlayDirection={"ltr"}
                />
            </div>
        );
    }
}

export default Brands