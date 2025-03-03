import React, { useState } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Allwatches = () => {
  const watchesList = [
    {
      id: 1,
      brand: "MOVADO",
      model: "Men | Bold",
      price: "₹74,625",
      image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3600898_1.jpg",
    },
    {
      id: 2,
      brand: "GUESS",
      model: "Men | Phoenix",
      price: "₹12,695",
      image: "https://static.helioswatchstore.com/media/catalog/product/g/w/gw0386g3_2.jpg",
    },
    {
      id: 3,
      brand: "VERSACE",
      model: "Men | Field Force",
      price: "₹89,500",
      image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3600854_1.jpg",
    },
    {
      id: 4,
      brand: "CERRUTI",
      model: "Men | FW",
      price: "₹30,000",
      image: "https://static.helioswatchstore.com/media/catalog/product/f/c/fc-200b5s32b_1.jpg",
    },
  ];

  const [category, setCategory] = useState("Men");

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  const categoryWatches = {
    Men: [
      { id: 1, image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3600898_1.jpg", brand: "MOVADO", model: "Bold", price: "₹74,625" },
      { id: 2, image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1374101104100_1.jpg", brand: "TISSOT", model: "PRX", price: "₹37,000" },
      { id: 3, image: "https://static.helioswatchstore.com/media/catalog/product/v/e/vevk00620_1.jpg", brand: "VERSACE", model: "Field Force", price: "₹89,500" },
      { id: 4, image: "https://static.helioswatchstore.com/media/catalog/product/s/s/ssc764p1-1800x1800-pixels.jpg", brand: "SEIKO", model: "Coutura", price: "₹52,000" },
    ],
    Women: [
      { id: 5, image: "https://static.helioswatchstore.com/media/catalog/product/5/5/5519459_1_2_1.jpg", brand: "MICHAEL KORS", model: "Darci", price: "₹32,000" },
      { id: 6, image: "https://static.helioswatchstore.com/media/catalog/product/2/4/241612_1_2.jpg", brand: "ROLEX", model: "Lady-Datejust", price: "₹8,50,000" },
      { id: 7, image: "https://static.helioswatchstore.com/media/catalog/product/3/6/3600824_1.jpg", brand: "CARTIER", model: "Ballon Bleu", price: "₹6,75,000" },
      { id: 8, image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1292102201300_1.jpg", brand: "OMEGA", model: "Constellation", price: "₹4,50,000" },
    ],
  };

  return (
    <>
      <div className="all-watches">
        <img src="https://static.helioswatchstore.com/media/catalog/category/all_cat_updated.jpg" alt="16th ANNIVERSARY" className="Mens" />
      </div>

      <div className="watch-container">
        {watchesList.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.brand} />
            <h3>{watch.brand}</h3>
            <p>{watch.model}</p>
            <h4>{watch.price}</h4>
          </div>
        ))}
      </div>

      <div className="most-loved-container">
        <h2 className="section-title">MOST LOVED WATCHES</h2>

        <div className="category-toggle">
          <span className={category === "Men" ? "active" : ""} onClick={() => setCategory("Men")}>
            MEN
          </span>
          <span className={category === "Women" ? "active" : ""} onClick={() => setCategory("Women")}>
            WOMEN
          </span>
        </div>

        <Slider {...sliderSettings}>
          {categoryWatches[category].map((watch) => (
            <div key={watch.id} className="watch-card">
              <img src={watch.image} alt={watch.brand} className="watch-image" />
              <h3 className="watch-brand">{watch.brand}</h3>
              <p className="watch-model">{watch.model}</p>
              <p className="watch-price">{watch.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Allwatches;
