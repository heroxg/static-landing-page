import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 footer-contents" id="footer_col1">
                    <p>ULA CORPORATIVE SOCIETY</p>
                    <ul>
                        <li>
                            <span>
                                <i className="fa fa-map-marker"></i>
                            </span>
                            Abc Hub, 10 Long street, Avenue Lagos Nigeria
                        </li>
                        <li>
                            <span>
                                <i className="fa fa-phone"></i>
                            </span>
                                09012332145, 07044423210
                        </li>
                        <li>
                            <span>
                                <i className="fa fa-envelope"></i>
                            </span>
                            info@ulacoperative.com
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4 footer-contents" id="footer-link">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Merchant</a></li>
                        <li><a href="#">Set up Coperative</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 footer-contents" id="social">
                    <h5>Connect with us on social Media</h5>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <p>Copyright 2019 ULA Coperative Society. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
