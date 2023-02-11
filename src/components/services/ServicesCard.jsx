import React from 'react'
import CardImage from '../../assets/images/card1.png'
import CardImage2 from '../../assets/images/card2.png'
import CardImage3 from '../../assets/images/mobile-pix.png'

const ServicesCard = () => {
  return (
    <div className='container'>
    <div className='row'>
      <div className="col-sm-12 col-md-4 col-lg-4 card-unique animate__animated animate__bounceOutLeft">
            <div className="col-sm-12 card-unique-inner">
                <div className="main-card">
                    <img src={CardImage}  alt="card-image" />
                    <p className="ficon"><i class="fa fa-cc-mastercard"></i></p>
                    <h4>Online Banking</h4>
                    <p>Login to your account from anwhere, access your cooperative account online to make deposits, withdrawals and more</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 card-unique">
            <div className="col-sm-12 card-unique-inner">
                <div className="main-card">
                    <img src={CardImage2} alt='card image2' />
                    <p  className="ficon"><i class="fa fa-bank"></i></p>
                    <h4>USSD BANKING</h4>
                    <p>Access your account from anwhere and at anytime, check your balance, deposit and do more with our USSD (*347*888#).</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
            <div className="col-sm-12 col-md-4 col-lg-4 card-unique">
                <div className="col-sm-12 card-unique-inner">
                    <div className="main-card">
                        <img src={CardImage2} alt='card image3' />
                        <p className="ficon"><i class="fa fa-mobile"></i></p>
                        <h4>MOBILE BANKING</h4>
                        <p>Save, Invest, Make payments easier and faster, Access your account at your convenience with smartteller mobile app.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default ServicesCard
