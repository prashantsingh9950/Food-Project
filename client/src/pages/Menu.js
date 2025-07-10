import React, { useState } from "react";
import "../styles/Menu.css";
import { useCart } from "../context/CartContext";
import { MdRestaurantMenu } from "react-icons/md";

// All menu items combined into a single array
const menuItems = [
  "Cheese Burger", "Veggie Burger", "Chicken Whopper",
  "Margherita", "Farmhouse", "Peppy Paneer",
  "Crunchy Tacos", "Nacho Grande", "Burrito",
  "Salmon Roll", "Veg Maki", "Tempura Roll",
  "Paneer Butter Masala", "Dal Tadka", "Butter Naan",
  "Hyderabadi Biryani", "Veg Dum Biryani", "Egg Biryani",
  "White Sauce Pasta", "Arrabbiata", "Lasagna",
  "Masala Chai", "Vada Pav", "Kanda Bhajiya",
  "Masala Dosa", "Idli Sambhar", "Uttapam",
  "Steamed Momos", "Fried Momos", "Tandoori Momos",
  "Paneer Wrap", "Chicken Roll", "Aloo Frankie",
  "Chowmein", "Manchurian", "Spring Rolls",
  "Choco Lava", "Blueberry Cheesecake", "Red Velvet Jar",
  "Choco Chips", "Mango Sundae", "Strawberry Swirl",
  "Quinoa Salad", "Fruit Bowl", "Yogurt Mix",
  "Chole Bhature", "Rajma Rice", "Lassi",
  "Kathi Roll", "Paneer Tikka Roll", "Mutton Seekh",
  "Daal Baati", "Gatte ki Sabzi", "Churma",
  "Gongura Chicken", "Andhra Biryani", "Pesarattu",
  "Dhokla", "Khandvi", "Thepla",
  "Hakka Noodles", "Schezwan Rice", "Chili Paneer",
  "Brownie", "Ice Cream Combo", "Churros",
  "Grilled Sandwich", "BBQ Chicken", "Paneer Grill",
  "Falafel Pita", "Hummus Bowl", "Shawarma Wrap",
  "Paneer Sizzler", "Veg Sizzler", "Chicken Steak"
];


const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cart = useCart(); // 👈 Check if useCart is defined
  const addToCart = cart?.addToCart || (() => {}); // Fallback if undefined

  return (
    <div className="menu-page">
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <MdRestaurantMenu style={{ color: '#ff4500', fontSize: 32, marginRight: 6 }} /> Menu
      </h2>
      <div className="menu-items-grid">
        {menuItems.map((item, i) => {
          // Emoji mapping based on item name (like HomePage.js)
          const lower = item.toLowerCase();
          let emoji = '🍽️';
          if (lower.includes('pizza')) emoji = '🍕';
          else if (lower.includes('burger')) emoji = '🍔';
          else if (lower.includes('pasta') || lower.includes('noodle')) emoji = '🍝';
          else if (lower.includes('sushi') || lower.includes('roll') || lower.includes('maki')) emoji = '🍣';
          else if (lower.includes('biryani') || lower.includes('rice') || lower.includes('bowl')) emoji = '🍛';
          else if (lower.includes('ice') || lower.includes('sundae') || lower.includes('swirl')) emoji = '🍨';
          else if (lower.includes('fries')) emoji = '🍟';
          else if (lower.includes('taco')) emoji = '🌮';
          else if (lower.includes('momo')) emoji = '🥟';
          else if (lower.includes('cake') || lower.includes('lava') || lower.includes('brownie') || lower.includes('jar') || lower.includes('dessert') || lower.includes('cheese')) emoji = '🍰';
          else if (lower.includes('chai') || lower.includes('lassi')) emoji = '🍵';
          else if (lower.includes('wrap') || lower.includes('frankie') || lower.includes('shawarma') || lower.includes('sandwich')) emoji = '🌯';
          else if (lower.includes('dosa') || lower.includes('idli') || lower.includes('uttapam')) emoji = '🍳';
          else if (lower.includes('paneer')) emoji = '🧀';
          else if (lower.includes('salad') || lower.includes('fruit')) emoji = '🥗';
          else if (lower.includes('chole') || lower.includes('dal') || lower.includes('rajma') || lower.includes('sabzi')) emoji = '🍲';
          else if (lower.includes('naan') || lower.includes('thepla') || lower.includes('paratha') || lower.includes('roti')) emoji = '🥙';
          else if (lower.includes('churros')) emoji = '🥖';

          return (
            <div key={i} className="menu-item-card">
              <span className="food-emoji" style={{ fontSize: 36, marginBottom: 6 }}>{emoji}</span>
              <span>{item}</span>
              <div className="menu-buttons">
                <button
                  className="add-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className="buy-btn"
                  onClick={() => {
                    addToCart(item);
                    window.location.href = '/place-order';
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
