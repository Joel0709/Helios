import React, { useState } from "react";











const stateCityData = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
};

const Stores = () => {


  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(stateCityData[state] || []);
    setSelectedCity(""); 
  };


  return (

    <>
    <div>
      <img src="https://static.helioswatchstore.com/static/version1740413808/frontend/Swissup/argento-home-child/en_US/Magespacex_Storepickup/images/store_banner.jpg" className='Mens'/>
    </div>

<div className="dropdown-container">
<label>Select State</label>
<select value={selectedState} onChange={handleStateChange}>
  <option value="">Select</option>
  {Object.keys(stateCityData).map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ))}
</select>

<label>Select City</label>
<select
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
  disabled={!selectedState}
>
  <option value="">Select</option>
  {cities.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>
</div>
</>
  )
}

export default Stores