import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

//banner 

import banner from "./images/carousal1.png";

//card images
import table1 from "./images/table1.webp";
import table2 from "./images/table2.webp";
import table3 from "./images/table3.webp";
import table4 from "./images/table4.webp";
import table5 from './images/table5.webp';
import table6 from "./images/table6.webp";
import table7 from "./images/table7.webp";
import table8 from "./images/table8.webp";
import table9 from "./images/table9.webp";



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
        { title: "Malaysian Wooden Center Table", text: "₹ 8,500.00", offerprice:"₹ 14,990.00" , offer:"43% off" ,imageUrl: table1, buttonText: "Buy Now" ,rating:"4.9"},
        { title: "Malaysian Wooden Coffee Table", text: "₹ 7,000.00",offerprice:'₹ 15,990.00',offer:"56% off" ,imageUrl: table2, buttonText: "Buy Now",rating:"4.8" },
        { title: " Glass Center Table", text: "₹ 8,900.00",offerprice:"₹ 17,999.00",offer:"47% off" ,imageUrl: table3, buttonText: "Buy Now",rating:"4.7" },
        { title: "Reno Sintered Top Coffee Table", text: "₹ 25,000.00",offerprice:"₹ 56,000.00",offer:"55% off", imageUrl: table4, buttonText: "Buy Now",rating:"4.9"},
        { title: "Audi Wooden Study Desk", text: "₹ 11.000.00",offerprice:"₹ 31,000.00",offer:"65% off" ,imageUrl: table5, buttonText: "Buy Now",rating:"4.7" },
        { title: "American Wooden 4 Stool Coffee Table", text: "₹ 17,500.00",offerprice:"₹ 55,000.00",offer:"68% off" ,imageUrl: table6, buttonText: "Buy Now",rating:"4.6" },
        { title: " American Marble Center Table", text: "₹ 25,999.00", offerprice:"₹ 44,999.00",offer:"44% off" ,imageUrl: table7, buttonText: "Buy Now",rating:"4.8" },
        { title: "Italian Stone Table with 5D Printed Top", text: "₹ 29,000.00",offerprice:"₹ 61,999.00",offer:"53% off" ,imageUrl:table8, buttonText: "Buy Now",rating:"4.9" },
        { title: "Malaysian Marble Coffee Table", text: "₹ 19,000.00",offerprice:"₹ 32,000.00",offer:"40% off", imageUrl: table9, buttonText: "Buy Now" ,rating:"4.6"}
      ];

    return(
        <>
  
        <img src={banner} className="w-100 mb-5"></img>

          {/* Cards Section */}

       <div class="line-container">
        <hr class="line" />
        <span class="text">Find Your Dream Table – Explore Our Collection</span>
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