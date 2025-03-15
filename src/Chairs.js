import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

//banner 

import banner from "./images/carousal1.png";

//card images
import chair1 from "./images/chair1.webp";
import chair2 from "./images/chair2.webp";
import chair3 from "./images/chair3.webp";
import chair4 from "./images/chair4.webp";
import chair5 from './images/chair5.webp';
import chair6 from "./images/chair6.webp";
import chair7 from "./images/chair7.webp";
import chair8 from "./images/chair8.webp";
import chair9 from "./images/chair9.webp";

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

const sofa = () => {
     
      // Card data        
      const cards = [
        { title: "Office Chair With Revolving Base", text: "₹ 7,900.00", offerprice:"₹ 18,000.00" , offer:"54% off" ,imageUrl: chair1, buttonText: "Buy Now" ,rating:"4.9"},
        { title: "Leon Kids Chair", text: "₹ 4,500.00",offerprice:'₹ 10,990.00',offer:"59% off" ,imageUrl: chair2, buttonText: "Buy Now",rating:"4.8" },
        { title: " Atlas Visitor Chair", text: "₹ 4,990.00",offerprice:"₹ 10,999.00",offer:"54% off" ,imageUrl: chair3, buttonText: "Buy Now",rating:"4.7" },
        { title: "Jack Study Chair", text: "₹ 4,900.00",offerprice:"₹ 13,000.00",offer:"61% off", imageUrl: chair4, buttonText: "Buy Now",rating:"4.9"},
        { title: "Glory Mesh Computer Chair", text: "₹ 5.550.00",offerprice:"₹ 14,000.00",offer:"60% off" ,imageUrl: chair5, buttonText: "Buy Now",rating:"4.7" },
        { title: " Venice Italian Mesh Computer Chair", text: "₹ 7,990.00",offerprice:"₹ 22,500.00",offer:"64% off" ,imageUrl: chair6, buttonText: "Buy Now",rating:"4.6" },
        { title: "Milan Italian Visitor Chair", text: "₹ 15,990.00", offerprice:"₹ 34,990.00",offer:"54% off" ,imageUrl: chair7, buttonText: "Buy Now",rating:"4.8" },
        { title: "Storm Visitor Chair", text: "₹ 4,250.00",offerprice:"₹ 12,999.00",offer:"67% off" ,imageUrl:chair8, buttonText: "Buy Now",rating:"4.9" },
        { title: "Leatherette Chair with Revolving Base", text: "₹ 8,900.00",offerprice:"₹ 22,999.00",offer:"59% off", imageUrl: chair9, buttonText: "Buy Now" ,rating:"4.6"}
      ];

    return(
        <>
  
        <img src={banner} className="w-100 mb-5"></img>

          {/* Cards Section */}

       <div class="line-container">
        <hr class="line" />
        <span class="text">Find Your Dream Chair – Explore Our Collection</span>
        <hr class="line" />
      </div>

      <div className="container-fluid" style={{padding:"70px",marginTop:"-60px"}}>
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow">
                <div className="product-img-container">
                  <img src={card.imageUrl} className="card-img-top product-img p-2" alt="Card" style={{borderRadius:"15px"}}/>
                  <div className="product-rating-overlay">
                    <h6 className="product-rating-overlay-text"><i className="bi bi-star-fill"></i> {card.rating}</h6>
                  </div>  
                  <div className="product-offer-overlay">
                    <h6 className="product-offer-overlay-text">~ {card.offer}</h6>
                  </div>  
                </div>
                <div className="card-body">
                  <h5 className="product-title mb-2">{card.title}</h5>
                    <p className="fw-bold">{card.text} <span className="text-danger text-decoration-line-through">{card.offerprice}</span></p>
                  <a href="#" className="btn btn-primary">
                    {card.buttonText}
                  </a>  
                </div>
              </div>
            </div>
          ))}
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
    )
}

export default sofa;