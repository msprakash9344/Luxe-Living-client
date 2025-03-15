import React from "react";
import './Signup.css';


//footer image

import delivery from './images/footerimg1.webp';
import returns from './images/footerimg2.webp';
import payments from './images/footerimg3.webp';
import timing from './images/footerimg4.webp';
import pay1 from './images/footerpay1.webp';
import pay2 from './images/footerpay2.webp';
import pay3 from './images/footerpay3.webp';
import pay4 from './images/footerpay4.webp';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import snapchat from './images/snapchat.png';
import youtube from './images/youtube.png';

function Signup() {
    return(
      <>
<div class="container-fluid mt-5 p-5 shadow bg-light">
  <div class="row signup-container">

    <div class="col-md-6 left-section">
      <div>
        <h2>Exclusive Furniture Deals</h2>
        <p>Sign up now and get the latest updates and offers on premium furniture!</p>
      </div>
    </div>


    <div class="col-md-6 right-section">
      <form style={{width: "100%" , maxwidth:"400px"}}>
      <h1 className="text-center">Create Account</h1>
        <div class="form-group">
          <input type="text" class="form-control mb-2" placeholder="First Name" required/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control mb-2" placeholder="Last Name" required />
        </div>
        <div class="form-group">
          <input type="email" class="form-control mb-2" placeholder="Email Address" required />
        </div>
        <div class="form-group">
          <input type="tel" class="form-control mb-2" placeholder="Phone Number" required />
        </div>
        <div class="form-group">
          <input type="password" class="form-control mb-2" placeholder="Password" required />
        </div>
        <div class="form-group">
          <input type="password" class="form-control mb-2" placeholder="Confirm Password" required />
        </div>
        <button type="submit" class="btn btn-custom mb-2">CREATE AN ACCOUNT</button>

        <p className="text-center mt-2">Existing User? <a href="/login" className="text-decoration-none">Login</a></p>
      </form>
    </div>
  </div>
</div>


 {/* footer */}

     <footer className="bg-dark text-light mt-5">
      <div className="container-fluid">
        <div className="row p-4 border-bottom">
          {/* Newsletter Subscription */}
          <div className="col-md-6 pt-3" style={{lineHeight:"25px"}}>
            <h5>SUBSCRIBE TO NEWSLETTER</h5>
            <p>Be the first to know about new arrivals, sales & promos by submitting your email!</p>
          </div>  
          <div className="col-6 text-center pt-4">
            <div className="input-group mb-4 justify-content-center">
              <input type="email" className="form-control w-50" placeholder="Please enter your email" />
              <button className="btn btn-dark">Subscribe</button>
            </div>
          </div>
        </div>
      
        {/* Footer Links */}
        <div className="row border-bottom p-4 mt-4">
          <div className="col-md-2">
            <h6>QUICK LINKS</h6>
            <ul className="list-unstyled mt-3" style={{lineHeight:"30px" ,fontSize:"13px"}}>
              <li>Home</li>
              <li>Luxe-Living Stores</li>
              <li>Media</li>
              <li>Share Feedback</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6>SERVICES</h6>
            <ul className="list-unstyled mt-3" style={{lineHeight:"30px" ,fontSize:"13px"}}>
              <li>Dismantling Service</li>
              <li>Re-Installation</li>
              <li>Loose Fitting</li>
              <li>Complaints</li>
            </ul>
          </div>

          <div className="col-md-2" style={{lineHeight:"30px" ,fontSize:"13px"}}>
            <h6>CORPORATE INFO</h6>
            <ul className="list-unstyled mt-3">
              <li>Blogs</li>
              <li>Become A Franchise</li>
              <li>Rent Your Property</li>
            </ul>
          </div>

          <div className="col-md-2" style={{lineHeight:"30px" ,fontSize:"13px"}}>
            <h6>LUXE-LIVING</h6>
            <ul className="list-unstyled mt-3">
              <li>Our Story</li>
              <li>Sell With Luxe-Living</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-md-2" style={{lineHeight:"30px" ,fontSize:"13px"}}>
            <h6>MY ACCOUNT</h6>
            <ul className="list-unstyled mt-3">
              <li>My Cart</li>
              <li>My Orders</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div className="col-md-2" style={{lineHeight:"30px"}}>
            <h6>SOCIAL ACCOUNTS</h6>
            <div className="d-flex mt-3">
              <img src={facebook} height={"40px"} ></img>
              <img src={instagram} height={"40px"} style={{marginLeft:"-5px"}}></img>
              <img src={snapchat} height={"35px"} className="me-1 mt-1"></img>
              <img src={youtube} height={"40px"} ></img>
            </div>
            <h6 className="mt-3">PAY USING</h6>
            <img src={pay1} alt="MasterCard" width="40" className="me-1"/>
            <img src={pay2} alt="Visa" width="40" className="me-1"/>
            <img src={pay3} alt="Visa" width="40" className="me-1"/>
            <img src={pay4} alt="Visa" width="40" className="me-1"/>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="footer-icon row text-center m-4">
          <div className="col-md-3">
            <img src={delivery} height={"50px"}></img>
            <p>FREE DELIVERY</p>
          </div>
          <div className="col-md-3">
          <img src={returns} height={"50px"}></img>
            <p>EASY RETURNS</p>
          </div>
          <div className="col-md-3">
          <img src={payments} height={"50px"}></img>
            <p>SECURE PAYMENT</p>
          </div>
          <div className="col-md-3">
          <img src={timing} height={"50px"}></img>
            <p>9 AM TO 6:30 PM | 7 DAYS</p>
          </div>
        </div>

    

        {/* Copyright */}
        <div className="text-center mt-3 p-4">
          <p className="pt-3 ">© 2025, Luxe-Living Inc. Pvt. Ltd. | All rights reserved. | <a href="#" class="text-decoration-none">Privacy Policy</a> | <a href="#" class="text-decoration-none">Terms & Conditions</a> | <a href="#" class="text-decoration-none">Policies</a></p>
        </div>
      </div>
    </footer>
    </>
    );
};

export default Signup;