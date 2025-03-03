import React, { useState } from "react"; 
import "./Watch.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import frontimage from './Assets/Screenshot 2025-03-02 231319.png'
import { FaShieldAlt, FaStar, FaBatteryFull, FaPercentage } from "react-icons/fa";


const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      image: "https://www.helioswatchstore.com/media/Featured-blog3.jpg",
      title: "BEST PERPETUAL CALENDAR WATCHES",
      description:
        "Imagine a world where you never have to adjust your calendar manually. Well, that world is closer than you think! Explore the world of Perpetual Calendar Watches, where timekeeping meets precision at its finest.",
      buttonText: "EXPLORE",
    },
    {
      image: "https://www.helioswatchstore.com/media/Featured-blog2.jpg",
      title: "LUXURY CHRONOGRAPH COLLECTION",
      description:
        "Discover the elegance of chronograph watches, combining functionality with timeless design. Perfect for those who appreciate fine craftsmanship.",
      buttonText: "EXPLORE",
    },
    {
      image: "https://static.helioswatchstore.com/media/wysiwyg/homepage/divers-resized.webp",
      title: "PREMIUM AUTOMATIC TIMEPIECES",
      description:
        "Experience the craftsmanship of self-winding automatic watches that redefine precision and style. Elevate your wristwear game today.",
      buttonText: "EXPLORE",
    },
    {
      image: "https://www.helioswatchstore.com/media/Featured-blog1.jpg",
      title: "THE CLASSIC VINTAGE SERIES",
      description:
        "Step into the past with vintage watches that bring timeless aesthetics and remarkable durability to the modern world.",
      buttonText: "EXPLORE",
    },
  ];



    const [category, setCategory] = useState("Men");
  
    const secondsettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
    };
  
    const watches = {
      Men: [
        { id: 1, image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3600898_1.jpg", brand: "MOVADO", model: "Bold", price: "₹74,625" },
        { id: 2, image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1374101104100_1.jpg", brand: "TISSOT", model: "PRX", price: "₹37,000" },
        { id: 3, image: "https://static.helioswatchstore.com/media/catalog/product/v/e/vevk00620_1.jpg", brand: "VERSACE", model: "Field Force", price: "₹89,500" },
        { id: 4, image: "https://static.helioswatchstore.com/media/catalog/product/s/s/ssc764p1-1800x1800-pixels.jpg", brand: "SEIKO", model: "Coutura", price: "₹52,000" },
        { id: 5, image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1154173705100_1.jpg", brand: "TAG HEUER", model: "Carrera", price: "₹1,25,000" },
        { id: 6, image: "https://static.helioswatchstore.com/media/catalog/product/n/j/nj0150-81x_1.jpg", brand: "OMEGA", model: "Seamaster", price: "₹2,00,000" },
        { id: 7, image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3601075_1.jpg", brand: "ROLEX", model: "Submariner", price: "₹9,00,000" },
      ],
      Women: [
        { id: 1, image: "https://static.helioswatchstore.com/media/catalog/product/5/5/5519459_1_2_1.jpg", brand: "MICHAEL KORS", model: "Darci", price: "₹32,000" },
        { id: 2, image: "https://static.helioswatchstore.com/media/catalog/product/2/4/241612_1_2.jpg", brand: "ROLEX", model: "Lady-Datejust", price: "₹8,50,000" },
        { id: 3, image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3600824_1.jpg", brand: "CARTIER", model: "Ballon Bleu", price: "₹6,75,000" },
        { id: 4, image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1292102201300_1.jpg", brand: "OMEGA", model: "Constellation", price: "₹4,50,000" },
        { id: 5, image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1292102201300_1.jpg", brand: "TAG HEUER", model: "Aquaracer", price: "₹1,10,000" },
      ],
    };


    const brands = [
      { logo: "https://static.helioswatchstore.com/media/aigner-logo.jpg" },
      { logo: "https://static.helioswatchstore.com/media/amazfit-logo.jpg" },
      { logo: "https://static.helioswatchstore.com/media/anneklein-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/armaniexchange-logo_1.jpg" },
      {  logo: "https://static.helioswatchstore.com/media/balmain-logo.jpg" },
      { logo: "https://static.helioswatchstore.com/media/boss-logo_1.jpg" },
      {logo: "https://static.helioswatchstore.com/media/calvinklein-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/casio-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/cerruti-logo_1.jpg" },
      {  logo: "https://static.helioswatchstore.com/media/charriol-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/citizen-logo_1.jpg" },
      {logo: "https://static.helioswatchstore.com/media/coach-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/daniel-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/diesel-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/edge-logo_1.jpg" },
      {logo: "https://static.helioswatchstore.com/media/emporioarmani-logo_1.jpg" },

      { logo: "https://static.helioswatchstore.com/media/Borel_Brand_Logo.jpg" },
      { logo: "https://static.helioswatchstore.com/media/fitbit-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/fossil-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/fc-logo_2.jpg" },
      {  logo: "https://static.helioswatchstore.com/media/gshock-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/Garmin-logo.jpg" },
      {logo: "https://static.helioswatchstore.com/media/gc-logo_2.jpg" },
      { logo: "https://static.helioswatchstore.com/media/guess-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/herbelin-logo_1.jpg" },
      {  logo: "https://static.helioswatchstore.com/media/jc-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/citizen-logo_1.jpg" },
      {logo: "https://static.helioswatchstore.com/media/coach-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/daniel-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/diesel-logo_1.jpg" },
      { logo: "https://static.helioswatchstore.com/media/edge-logo_1.jpg" },
      {logo: "https://static.helioswatchstore.com/media/emporioarmani-logo_1.jpg" },
    ];
    
    const celebrities = [
      {
        image: "https://static.helioswatchstore.com/media/easyslide/Movado.jpg", // Replace with actual image URL
      },
      {
        image: "https://static.helioswatchstore.com/media/easyslide/Calvin_Klein.jpg",
      },
      {
        image: "https://static.helioswatchstore.com/media/easyslide/shop_the_celebrity-04_2_1.webp",
      },

      {
        image: "https://static.helioswatchstore.com/media/easyslide/TH3.jpg",
      },
      {
        image: "https://static.helioswatchstore.com/media/easyslide/Raga.jpg",
      },
      {
        image: "https://static.helioswatchstore.com/media/easyslide/Police_2.jpg",
      },
    ];
    

    const locations = [
      { city: "Chennai", places: "Pondy Bazaar, OMR, Anna Nagar, Velachery, VR Mall, Cathedral Road, Express Avenue, Gandhi Nagar, Phoenix Mkt City, Ashok Nagar, Near Starbucks Cafe" },
      { city: "Jaipur", places: "Divya Mall, Malviya Nagar, M I Road, Hanuman Nagar" },
      { city: "Ahmedabad", places: "Alphanoe, Maninagar, CG Road, 4D Square Mall, TRP Mall, Palladium Mall" },
      { city: "Bengaluru", places: "Nexus Seawood's Mall, Phoenix Mall, E City, Kammanahalli, Marathahalli, Sarjapura, Koramangala, Indiranagar, MG Road, Jayanagar, Banashankari, Hsr Layout, Commercial St., Global Mall, Malleswaram, Bannerghatta Rd, K R Puram, vijayanagar, Basavanagudi, RT Nagar" },
      { city: "Kolkata", places: "Park Street, Rajarhat, Mani Square, City Centre, Acropolis Mall, Lindsey Street, Behala, Kakurgachi, Rashbehari Avenue" },
      { city: "Mumbai", places: "Seawoods, Belapur" },
      { city: "Visakhapatnam", places: "Vip Road, Dwarakanagar" },
      { city: "Nashik", places: "Samarth Nagar" },
      { city: "Vijayawada", places: "M.G. Road" },
      { city: "Trivandrum", places: "Kowdiar, Lulu Mall" },
      { city: "Patna", places: "Frazer Road, Chajjubagh, Boring Rd, JAGDEO PATH, KANKARBAGH" },
      
    ];


  return (
    <>
<div>
  <img src={frontimage} className='frontimage' />
</div>
<section className="trust-section">
      <div className="trust-item">
        <FaShieldAlt className="icon" />
        <p>BUY WITH TITAN’S TRUST</p>
      </div>
      <div className="trust-item">
        <FaStar className="icon" />
        <p>EARN TATA NEU POINTS</p>
      </div>
      <div className="trust-item">
        <FaBatteryFull className="icon" />
        <p>FREE BATTERY REPLACEMENT</p>
      </div>
      <div className="trust-item">
        <FaPercentage className="icon" />
        <p>INTEREST FREE EMI <br /> (*T&C APPLY)</p>
      </div>
    </section>


<div>
<div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="carousel-content">
              <img src={slide.image} alt={slide.title} className="carousel-image" />
              <div className="text-content">
                <h3 className="carousel-title">{slide.title}</h3>
                <p className="carousel-description">{slide.description}</p>
                <button className="carousel-button">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</div>


<div className="most-loved-container">
      <h2 className="section-title">MOST LOVED WATCHES</h2>

      <div className="category-toggle">
        <span className={category === "Men" ? "active" : ""} onClick={() => setCategory("Men")}>MEN</span>
        <span className={category === "Women" ? "active" : ""} onClick={() => setCategory("Women")}>WOMEN</span>
      </div>

      <Slider {...secondsettings}>
        {watches[category].map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.brand} className="watch-image" />
            <h3 className="watch-brand">{watch.brand}</h3>
            <p className="watch-model">Men | {watch.model}</p>
            <p className="watch-price">{watch.price}</p>
          </div>
        ))}
      </Slider>
    </div>


    <div className="brands-container">
      <h2>40+ INTERNATIONAL BRANDS</h2>
      <p>ONE TRUSTED DESTINATION</p>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div >
      <img src="https://static.helioswatchstore.com/media/catalog/category/POLICE_NEW_ARRIVALS_1_1_.jpg" className="police" />
    </div>

    <div className="celebrity-section">
      <h2>SHOP THE <span className="highlight">CELEBRITY LOOK</span></h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3} 
        navigation={true} 
        loop={true} 
      >
        {celebrities.map((celeb, index) => (
          <SwiperSlide key={index}>
            <div className="celebrity-card">
              <img src={celeb.image} alt={celeb.name} className="celebrity-img" />
              <p className="brand-name">{celeb.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


<div>

<footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>KNOW HELIOS</h3>
          <ul>
            <li>About Us</li>
            <li>About Titan Company Limited</li>
            <li>Bulk Purchase & Corporate Gifting</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>TERMS & CONDITIONS</h3>
          <ul>
            <li>Shipping & Return Policies</li>
            <li>Privacy Policy</li>
            <li>T&C and FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <ul>
            <li>For Sale: heliossupport@titan.co.in</li>
            <li>For Complaints: 1800 266 0123</li>
            <li>Chat Time: Mon-Sat, 9:00 to 17:30</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <span>🐦 Twitter</span>
            <span>📘 Facebook</span>
            <span>📸 Instagram</span>
          </div>
        </div>
      </div>

      <div className="store-locations">
      {locations.map((location, index) => (
        <p key={index}>
          <strong>Watches in {location.city}:</strong> {location.places}.
        </p>
      ))}
    </div>
      <div className="footer-bottom">
        <p>© 2024 Helios - The Watch Store. All Rights Reserved. Titan Company Limited.</p>
      </div>
    </footer>

</div>
    </>
  )
}

export default Home;