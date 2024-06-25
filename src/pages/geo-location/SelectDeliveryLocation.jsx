import React, { useState } from "react";
import "./SelectDeliveryLocation.css";

const SelectDeliveryLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            setLocation(data.postcode);
          } catch (err) {
            setError("Failed to retrieve location data");
          }
        },
        (err) => {
          setError(
            "Geolocation is not supported by this browser or permission denied"
          );
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };

  return (
    <div className="delivery-location-container">
      <button className="delivery-location-button" onClick={getLocation}>
        <span className="location-icon">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <span>Select Delivery Location</span>
        <span className="arrow-icon">➔</span>
      </button>
      {location && <p>Your pincode is: {location}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SelectDeliveryLocation;
