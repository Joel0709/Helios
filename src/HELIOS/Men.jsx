import React from 'react'

const Men = () => {

  const watches = [
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
    {
      id: 1,
      brand: "MOVADO",
      model: "Men | Bold",
      price: "₹74,625",
      image: "https://static.helioswatchstore.com/media/catalog/product/m/i/mih.02.002.bg_1_3.jpg",
    },
    {
      id: 2,
      brand: "GUESS",
      model: "Men | Phoenix",
      price: "₹12,695",
      image: "https://static.helioswatchstore.com/media/catalog/product/2/5/25200210_1_3.jpg",
    },
    {
      id: 3,
      brand: "VERSACE",
      model: "Men | Field Force",
      price: "₹89,500",
      image: "https://static.helioswatchstore.com/media/catalog/product/n/j/nj0151-88m_1.jpg",
    },
    {
      id: 4,
      brand: "CERRUTI",
      model: "Men | FW",
      price: "₹30,000",
      image: "https://static.helioswatchstore.com/media/catalog/product/g/1/g1160_1.jpg",
    },
    {
      id: 1,
      brand: "MOVADO",
      model: "Men | Bold",
      price: "₹74,625",
      image: "https://static.helioswatchstore.com/media/catalog/product/d/1/d128_1_2_1.jpg",
    },
    {
      id: 2,
      brand: "GUESS",
      model: "Men | Phoenix",
      price: "₹12,695",
      image: "https://static.helioswatchstore.com/media/catalog/product/f/b/fb521bkgb_1_2.jpg",
    },
    {
      id: 3,
      brand: "VERSACE",
      model: "Men | Field Force",
      price: "₹89,500",
      image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1374101104100_1.jpg",
    },
    {
      id: 4,
      brand: "CERRUTI",
      model: "Men | FW",
      price: "₹30,000",
      image: "https://static.helioswatchstore.com/media/catalog/product/g/w/gw0386g2_1.jpg",
    },
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
    {
      id: 1,
      brand: "MOVADO",
      model: "Men | Bold",
      price: "₹74,625",
      image: "https://static.helioswatchstore.com/media/catalog/product/m/i/mih.02.002.bg_1_3.jpg",
    },
    {
      id: 2,
      brand: "GUESS",
      model: "Men | Phoenix",
      price: "₹12,695",
      image: "https://static.helioswatchstore.com/media/catalog/product/2/5/25200210_1_3.jpg",
    },
    {
      id: 3,
      brand: "VERSACE",
      model: "Men | Field Force",
      price: "₹89,500",
      image: "https://static.helioswatchstore.com/media/catalog/product/n/j/nj0151-88m_1.jpg",
    },
    {
      id: 4,
      brand: "CERRUTI",
      model: "Men | FW",
      price: "₹30,000",
      image: "https://static.helioswatchstore.com/media/catalog/product/g/1/g1160_1.jpg",
    },
    {
      id: 1,
      brand: "MOVADO",
      model: "Men | Bold",
      price: "₹74,625",
      image: "https://static.helioswatchstore.com/media/catalog/product/d/1/d128_1_2_1.jpg",
    },
    {
      id: 2,
      brand: "GUESS",
      model: "Men | Phoenix",
      price: "₹12,695",
      image: "https://static.helioswatchstore.com/media/catalog/product/f/b/fb521bkgb_1_2.jpg",
    },
    {
      id: 3,
      brand: "VERSACE",
      model: "Men | Field Force",
      price: "₹89,500",
      image: "https://static.helioswatchstore.com/media/catalog/product/t/1/t1374101104100_1.jpg",
    },
    {
      id: 4,
      brand: "CERRUTI",
      model: "Men | FW",
      price: "₹30,000",
      image: "https://static.helioswatchstore.com/media/catalog/product/g/w/gw0386g2_1.jpg",
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
      <img src="https://static.helioswatchstore.com/media/catalog/category/mens_cat_updated.jpg" className='Mens'/>
    </div>

    <div>
      <div className="watch-container">
      {watches.map((watch) => (
        <div key={watch.id} className="watch-card">
          <img src={watch.image} alt={watch.brand} />
          <h3>{watch.brand}</h3>
          <p>{watch.model}</p>
          <h4>{watch.price}</h4>
        </div>
       ))}
    </div>
    </div>

    <div className="description-container">
      <h2>EXPLORE MEN’S WATCHES ONLINE BY HELIOS WATCH STORE</h2>
      <p>
        You may be attending a dinner party in a dapper tuxedo. Or you may go out for a date in your best designer jacket. A lazy Sunday brunch can also be an option. No matter the occasion, you need the perfect men's watch to add the final touch to your look. 
        With years of expertise in the watch industry, Helios is one of India's largest 
        <span className="highlight"> Watch Retailers </span> that has been around for more than a decade.
      </p>

      <p>
        Helios also brings you 
        <span className="highlight"> Couple Watches </span> in beautiful silhouettes so that you can twin with your partner. These Watches also make for the perfect wedding gift or anniversary gift for husband and wife.
      </p>

      <h2>SHOP BRANDED WATCHES FOR MEN ANYWHERE ANYTIME WITH HELIOS WATCH STORE</h2>
      <p>
        Helios has become synonymous with providing the best deals on top categories, free shipping, in-store pickup and delivery, same-day delivery, free battery replacement, speedy customer service, and hassle-free return/exchange policies.
      </p>

      <h2>EXPLORE MEN’S WATCHES ONLINE BY HELIOS WATCH STORE</h2>
      <p>
        You may be attending a dinner party in a dapper tuxedo. Or you may go out for a date in your best designer jacket. A lazy Sunday brunch can also be an option. No matter the occasion, you need the perfect men's watch to add the final touch to your look. 
        With years of expertise in the watch industry, Helios is one of India's largest 
        <span className="highlight"> Watch Retailers </span> that has been around for more than a decade.
      </p>

      <p>
        Helios also brings you 
        <span className="highlight"> Couple Watches </span> in beautiful silhouettes so that you can twin with your partner. These Watches also make for the perfect wedding gift or anniversary gift for husband and wife.
      </p>

      <h2>SHOP BRANDED WATCHES FOR MEN ANYWHERE ANYTIME WITH HELIOS WATCH STORE</h2>
      <p>
        Helios has become synonymous with providing the best deals on top categories, free shipping, in-store pickup and delivery, same-day delivery, free battery replacement, speedy customer service, and hassle-free return/exchange policies.
      </p>

      <h2>EXPLORE MEN’S WATCHES ONLINE BY HELIOS WATCH STORE</h2>
      <p>
        You may be attending a dinner party in a dapper tuxedo. Or you may go out for a date in your best designer jacket. A lazy Sunday brunch can also be an option. No matter the occasion, you need the perfect men's watch to add the final touch to your look. 
        With years of expertise in the watch industry, Helios is one of India's largest 
        <span className="highlight"> Watch Retailers </span> that has been around for more than a decade.
      </p>

      <p>
        Helios also brings you 
        <span className="highlight"> Couple Watches </span> in beautiful silhouettes so that you can twin with your partner. These Watches also make for the perfect wedding gift or anniversary gift for husband and wife.
      </p>

      <h2>SHOP BRANDED WATCHES FOR MEN ANYWHERE ANYTIME WITH HELIOS WATCH STORE</h2>
      <p>
        Helios has become synonymous with providing the best deals on top categories, free shipping, in-store pickup and delivery, same-day delivery, free battery replacement, speedy customer service, and hassle-free return/exchange policies.
      </p>

      
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

export default Men