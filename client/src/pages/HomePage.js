import React from "react";
import "../styles/HomePage.css"; // ✅ Correct path for CSS

const restaurantName = "Foodie's Hub";
const restaurantIntro = "Welcome to Foodie's Hub! Enjoy our delicious multi-cuisine menu, best offers, and quick delivery.";
const foodItems = [
  { id: 1, name: "Cheese Burger", image: "🍔" },
  { id: 2, name: "Margherita Pizza", image: "🍕" },
  { id: 3, name: "Paneer Butter Masala", image: "🍛" },
  { id: 4, name: "Biryani", image: "🍚" },
  { id: 5, name: "Ice Cream", image: "🍨" },
  { id: 6, name: "French Fries", image: "🍟" }
];

const Home = () => {
  return (
    <div className="home-container">
      <h2>{restaurantName}</h2>
      <p style={{fontSize: '1.1em', marginBottom: 20}}>{restaurantIntro}</p>
      <h3>Our Popular Dishes 🍽️</h3>
      <div className="food-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <span className="food-emoji">{item.image}</span>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
