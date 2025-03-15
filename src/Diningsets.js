import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

//banner 

import banner from "./images/carousal1.png";

//card images
import dining1 from "./images/dining1.webp";
import dining2 from "./images/dining2.webp";
import dining3 from "./images/dining3.webp";
import dining4 from "./images/dining4.webp";
import dining5 from './images/dining5.webp';
import dining6 from "./images/dining6.webp";
import dining7 from "./images/dining7.webp";
import dining8 from "./images/dining8.webp";
import dining9 from "./images/dining9.webp";

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
        { title: "Malaysian Wooden Dining 4 Seater Set", text: "₹ 24,999.00", offerprice:"₹ 60,000.00" , offer:"58% off" ,imageUrl: dining1, buttonText: "Buy Now" ,rating:"4.9"},
        { title: "Milan Italian Marble Dining 4 Seater", text: "₹ 65,000.00",offerprice:'₹ 1,84,999.00',offer:"64% off" ,imageUrl: dining2, buttonText: "Buy Now",rating:"4.8" },
        { title: "Penang Malaysian Glass Dining Table", text: "₹ 15,899.00",offerprice:"₹ 30,000.00",offer:"47% off" ,imageUrl: dining3, buttonText: "Buy Now",rating:"4.7" },
        { title: "Italian Natural Stone With 5D 6 Seater", text: "₹ 89,000.00",offerprice:"₹ 2,50,000.00",offer:"64% off", imageUrl: dining4, buttonText: "Buy Now",rating:"4.9"},
        { title: "Sheesham Wood Dining Table 6 Seater", text: "₹ 55.000.00",offerprice:"₹ 1,29,000.00",offer:"57% off" ,imageUrl: dining5, buttonText: "Buy Now",rating:"4.7" },
        { title: "American Natural Stone Dining Set", text: "₹ 1,49,990.00",offerprice:"₹ 2,80,000.00",offer:"46% off" ,imageUrl: dining6, buttonText: "Buy Now",rating:"4.6" },
        { title: "Italian Round Marble Dining Set 6S", text: "₹ 1,74,999.00", offerprice:"₹ 2,28,999.00",offer:"55% off" ,imageUrl: dining7, buttonText: "Buy Now",rating:"4.8" },
        { title: "Italian Marble Dining Set 8 Seater", text: "₹ 1,59,999.00",offerprice:"₹ 3,99,999.00",offer:"60% off" ,imageUrl:dining8, buttonText: "Buy Now",rating:"4.9" },
        { title: "Wooden Dining Table 6S With Bench", text: "₹ 41,999.00",offerprice:"₹ 99,999.00",offer:"62% off", imageUrl: dining9, buttonText: "Buy Now" ,rating:"4.6"}
      ];

    return(
        <>
  
        <img src={banner} className="w-100 mb-5"></img>

          {/* Cards Section */}

       <div class="line-container">
        <hr class="line" />
        <span class="text">Find Your Dream Dining – Explore Our Collection</span>
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