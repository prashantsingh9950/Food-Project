import React from "react";
import "../styles/Offer.css";

const restaurantName = "Foodie's Hub";
const offers = [
  {
    restaurant: restaurantName,
    description: "Buy 1 Get 1 Free on all Burgers!",
    code: "FOODIEBOGO"
  },
  {
    restaurant: restaurantName,
    description: "Flat 30% off on all Pizzas!",
    code: "FOODIE30"
  },
  {
    restaurant: restaurantName,
    description: "Free Lassi on orders above ₹299",
    code: "FOODIELASSI"
  }
];

const Offer = () => {
  return (
    <div className="offer-page">
      <h2>Special Offers & Promo Codes</h2>
      <h3 style={{marginTop: 20}}>{restaurantName} - Special Offers</h3>
      <div className="offer-grid">
        {offers.map((offer, idx) => (
          <div key={idx} className="offer-card">
            <p>{offer.description}</p>
            <span className="offer-code">Use Code: <b>{offer.code}</b></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
