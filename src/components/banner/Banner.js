import React from 'react'
import GoogleStore from '../../assets/images/google-store.png'
import AppleStore from '../../assets/images/app-store.png'
import CustomerPic from '../../assets/images/banner-pix.png'
import $ from 'jquery';
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-wrap">
        <div className="row">
            <div className="col-sm-6 banner-left">
                <h4>The Digital</h4>
                <h1>Corporative Banking <br/> to enhance your corporative</h1>
                {/* <h1><span className="element"></span></h1> */}
                <div className="stores">
                    <a href="#">
                        <img src={GoogleStore} alt="goggle pic" id="google-store" />
                    </a>
                    <a href="#">
                        <img src={AppleStore} alt="apple pic" />
                    </a>
                </div>
            </div>
            <div className="col-sm-6 banner-right">
                <img src={CustomerPic} alt='customer pic' />
            </div>
        </div>
    </div>
  )
}

export default Banner
