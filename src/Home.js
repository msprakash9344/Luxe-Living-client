import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//banner
import carousal1 from "./images/carousal1.png";
import carousal2 from "./images/carousal2.png";
import banner3 from "./images/carousal3.png";

//offer banner 
import offerbanner from "./images/offer image.webp";

//categories images
import sofa from "./images/sofacategories.jpg";
import chair from "./images/chaircategories.jpg";
import tables from "./images/tablescategories.jpg";
import beds from "./images/bedscategories.jpg";
import dining from "./images/diningcategories.jpg";
import Wardrobes from "./images/Wardrobescategories.jpg";
import bookshelf from "./images/bookshelfcategories.webp";

//card images
import fabricsofa from "./images/fabric sofa.jpg";
import homechair from './images/homechair.jpg';
import hometable from "./images/hometables.jpg";
import homebed from "./images/homebed.jpg";
import homewardrobes from './images/homewardrobes.jpg';
import homedining from "./images/homedining.jpg";
import homesofa from "./images/homesofa.webp";
import homedining1 from "./images/homedining1.webp";
import homebed1 from "./images/homebed1.webp";

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

const Home = () => {
  
  // Card data        
  const cards = [
    { title: "Sleeper Sofa", text: "₹ 85,000.00", offerprice:"₹ 95,000.00" , offer:"15% off" ,imageUrl: fabricsofa, buttonText: "Buy Now" ,rating:"4.9"},
    { title: "Drafting Chair", text: "₹ 7,900.00",offerprice:'₹ 18,000.00',offer:"56% off" ,imageUrl: homechair, buttonText: "Buy Now",rating:"4.8" },
    { title: "Patio Dining Table", text: "₹ 8,500.00",offerprice:"₹ 14,990.00",offer:"47% off" ,imageUrl: hometable, buttonText: "Buy Now",rating:"4.7" },
    { title: "Adjustable Bed ", text: "₹ 16,000.00",offerprice:"₹ 39,000.00",offer:"58% off", imageUrl: homebed, buttonText: "Buy Now",rating:"4.9"},
    { title: "Sliding Door Wardrobe", text: "₹ 59.990.00",offerprice:"₹ 1,29,990.00",offer:"53% off" ,imageUrl: homewardrobes, buttonText: "Buy Now",rating:"4.7" },
    { title: "Rectangular Dining Table", text: "₹ 69,000.00",offerprice:"₹ 1,10,000.00",offer:"37% off" ,imageUrl: homedining, buttonText: "Buy Now",rating:"4.6" },
    { title: "Leather Three Seater Sofa", text: "₹ 1,08,000.00", offerprice:"₹ 2,39,990.00",offer:"58% off" ,imageUrl: homesofa, buttonText: "Buy Now",rating:"4.8" },
    { title: "Pedestal Dining Table", text: "₹ 34,990.00",offerprice:"₹ 60,000.00",offer:"46% off" ,imageUrl: homedining1, buttonText: "Buy Now",rating:"4.9" },
    { title: "Four-Poster Bed", text: "₹ 44,999.00",offerprice:"₹ 1,24,999.00",offer:"63% off", imageUrl: homebed1, buttonText: "Buy Now" ,rating:"4.6"}
  ];

  //furniture collection images
  const collection = [
  { name: "SOFAS", image: sofa},
  { name: "CHAIRS", image: chair},
  { name: "TABLES", image: tables ,nav:"/table"},
  { name: "DININGS", image: dining , nav:"/dining"},
  { name: "BEDS", image: beds , nav:"/bed"},
  { name: "BOOKSHELF", image: bookshelf},
  { name: "WARDOBES", image: Wardrobes }
];


//feedback images

const feedbackimage = [
  { image: fabricsofa,feeedbacks:'"This sofa exceeded my expectations! The cushioning is incredibly comfortable, and the fabric feels premium. It adds a touch of elegance to my living room."',name:"Ramesh",country:"India"},
  { image: homechair,feeedbacks:'"This chair is a game-changer! The ergonomic design provides excellent back support, and the cushioning is just right—neither too soft nor too firm. Perfect for long hours of work."',name:"Sophia" , country:"USA"},
  { image: homebed , feeedbacks:'"This bed is incredibly comfortable! The memory foam mattress contours perfectly to my body, providing excellent support. I wake up feeling refreshed every morning!"',name:"Ravi" , country:"Singapore"},
  { image: homedining , feeedbacks:'"Absolutely love this dining set! The wood finish is premium, and the chairs are super comfortable. It perfectly complements my dining room decor. Highly recommended!"',name:"Rahul",country:"Canada"},
  { image: hometable , feeedbacks:'"I love how spacious this table is! It comfortably accommodates my entire family during meals. The modern design adds a stylish touch to my home."',name:"John" , country:"Uk"},
  { image: homewardrobes , feeedbacks:'"The built-in mirror on the wardrobe is a great addition! It saves space and adds elegance to my room. The drawers and hanging sections are thoughtfully designed. Very satisfied!"' , name:"Aditi" , country:"India"}
]

  return (
    <>
      {/* Banner Image */}
      <div style={{marginTop:"77px"}}>
      <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active banner-container">
          <img src={carousal1} className="d-block w-100 banner-img" alt="Banner 1" />
          <div className="carousel-caption banner-overlay">
            {/* <h1 className="banner-text">First Slide Text</h1> */}
          </div>
        </div>

        <div className="carousel-item banner-container">
          <img src={carousal2} className="d-block w-100 banner-img" alt="Banner 2" />
          <div className="carousel-caption banner-overlay">
            {/* <h1 className="banner-text">Second Slide Text</h1> */}
          </div>
        </div>  

        <div className="carousel-item banner-container">
          <img src={banner3} className="d-block w-100 banner-img" alt="Banner 3" />
          <div className="carousel-caption banner-overlay">
            {/* <h1 className="banner-text">Third Slide Text</h1> */}
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    </div>  
   


      {/* categories */}
      <div className="container-fluid py-3">

      
      <div class="line-container">
        <hr class="line" />
        <span class="text">Popular Categories</span>
        <hr class="line" />
      </div>

      <div className="row g-3">
        <div className="col-6 col-md-3 col-lg-2 text-center">
          <a href="/sofa">
          <div className='categories-img-container'> 
            <img
              src={sofa}
              height={200}
              alt="sofa"
              className="categories-img"
            />
            </div>
          </a>
          <h5 className="mt-2">Sofas</h5>
        </div>


        <div className="col-6 col-md-3 col-lg-2 text-center">
          <a href="/chair">
          <div className='categories-img-container'> 
            <img
              src={chair}
              height={200}
              alt="Chair"
              className="categories-img"
            />
            </div>
          </a>
          <h5 className="mt-2">Chairs</h5>
        </div>



        <div className="col-6 col-md-3 col-lg-2 text-center">
          <a href="/tables">
          <div className='categories-img-container'> 
            <img
              src={tables}
              height={200}
              alt="table"
              className="categories-img"
            />
            </div>
          </a>
          <h5 className="mt-2">Tables</h5>
        </div>


        <div className="col-6 col-md-3 col-lg-2 text-center">
          <a href="/bed">
          <div className='categories-img-container'> 
            <img
              src={beds}
              height={200}
              alt="bed"
              className="categories-img"
            />
            </div>
          </a>
          <h5 className="mt-2">Beds</h5>
        </div>


        <div className="col-6 col-md-3 col-lg-2 text-center">
          <a href="/wardrobes">
          <div className='categories-img-container'> 
            <img
              src={Wardrobes}
              height={200}
              alt="wardrobes"
              className="categories-img"
            />
            </div>
          </a>
          <h5 className="mt-2">Wardrobes</h5>
        </div>


        <div className="col-6 col-md-3 col-lg-2 text-center">
          <a href="/dining">
          <div className='categories-img-container'> 
            <img
              src={dining}
              height={200}
              alt="dining"
              className="categories-img"
            />
            </div>
          </a>
          <h5 className="mt-2">Dining Sets</h5>
        </div>
        </div>
        </div>

        {/* offer banner    */}
        <img src={offerbanner} style={{width:'100%' , marginBottom:"60px" , marginTop:"10px"}}></img>
   

       {/* Cards Section */}

       <div class="line-container">
        <hr class="line" />
        <span class="text">New Arrivels</span>
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


        {/* furniture collection images*/}

        <div class="line-container">
        <hr class="line" />
        <span class="text">What We Do</span>
        <hr class="line" />
      </div>
      
        <div className="container-fluid" style={{padding:"70px" , marginTop:"-70px"}}>
      <div className="row">
        {/* Row 1: First Image (8 cols), Second Image (4 cols) */}
        <div className="col-lg-6 col-md-8 col-sm-12 mb-3">
          <div className="category-card">
            <img src={collection[0].image} alt={collection[0].name} className="category-img" />
            <a href="/sofa">
                <div className="overlay">
                  <h2 className="category-title">{collection[0].name}</h2>
                </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12 mb-3">
          <div className="category-card">
            <img src={collection[1].image} alt={collection[1].name} className="category-img" />
            <a href="chair">
                <div className="overlay">
                  <h2 className="category-title">{collection[1].name}</h2>
                </div>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Row 2: Three Images (Each 4 cols) */}
        {collection.slice(2, 5).map((category, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <div className="category-card">
              <img src={category.image} alt={category.name} className="category-img" />
              <a href={category.nav}>
              <div className="overlay">
                <h2 className="category-title">{category.name}</h2>
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {/* Row 3: First Image (4 cols), Second Image (8 cols) */}
        <div className="col-lg-5 col-md-4 col-sm-12 mb-3">
          <div className="category-card">
            <img src={collection[5].image} alt={collection[5].name} className="category-img" />
            <a href="/wardrobe">
                <div className="overlay">
                  <h2 className="category-title">{collection[5].name}</h2>
                </div>
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-md-8 col-sm-12 mb-3">
          <div className="category-card">
            <img src={collection[6].image} alt={collection[6].name} className="category-img" />
            <a href="/wardrobe">
                <div className="overlay">
                  <h2 className="category-title">{collection[6].name}</h2>
                </div>
            </a>
          </div>
        </div>
      </div>
    </div>
      

{/* customer feedback */}

       <div class="line-container">
        <hr class="line" />
        <span class="text">What Customer Say About Our Products</span>
        <hr class="line" />
      </div>

      <div className="feedback-container" style={{padding:"70px"}}>
      <div className="feedback-scroll">
        {feedbackimage.map((feedback , index) => (
          <div key={index} className="card feedback-card">
            <img src={feedback.image} className="feedback-img" alt="Chair" />
            <div>
              <p>{feedback.feeedbacks}</p>
              <h5 className="star">
                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>{" "}
                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>{" "}
                <i className="bi bi-star-fill"></i>
              </h5>
              <h4>{feedback.name}</h4>
              <p>{feedback.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



    <center>
    <div class="line-container">
        <hr class="line" />
        <span class="text">Promise to Our Customers</span>
        <hr class="line" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 col-sm-6">
            <div className="card-container shadow">
               <h1 className="offer-text"><span className="offer-color">100%</span><br></br>CUSTOMIZED</h1>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-6">
            <div className="card-container shadow">
               <h1 className="offer-text"><span className="offer-color">PREMIUM</span><br></br>QUALITY</h1>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-6">
            <div className="card-container shadow">
               <h1 className="offer-text"><span className="offer-color">ON-TIME</span><br></br>DELIVERY</h1>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-6">
            <div className="card-container shadow">
               <h1 className="offer-text"><span className="offer-color">LIFE-TIME</span><br></br>SERVICES</h1>
            </div>
          </div>
          </div>
        </div>
      </center>

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

export default Home;