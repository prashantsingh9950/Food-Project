import React, { useState } from "react";
import "../styles/PlaceOrder.css";

const PlaceOrder = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "cod"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  // Prepare payload
  const payload = {
    name: form.name,
    phone: form.phone,
    address: form.address,
    paymentMethod: form.payment,
    cardDetails: form.payment === "card" ? {
      cardNumber: form.cardNumber,
      expiry: form.expiry,
      cvv: form.cvv
    } : undefined,
    upiId: form.payment === "upi" ? form.upiId : undefined,
    offerCode: form.offerCode || undefined
    // No extra fields needed for COD
  };
  try {
    const res = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Order failed. Try again.");
    }
  } catch (err) {
    alert("Server error. Try again.");
  }
};

  return (
    <div className="place-order-page">
      <h2>Place Your Order</h2>
      {submitted ? (
        <div className="order-success">
          <h3>Order Placed Successfully!</h3>
          <p>Thank you, {form.name}! Your order will be delivered soon.</p>
        </div>
      ) : (
        <form className="order-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone No:
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="10 digit number"
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={3}
            />
          </label>
          <label>
  Payment Options:
  <select name="payment" value={form.payment} onChange={handleChange} required>
    <option value="card">Card</option>
    <option value="upi">UPI</option>
    <option value="cod">Cash on Delivery</option>
  </select>
</label>

{/* Card Details */}
{form.payment === "card" && (
  <div className="card-details">
    <h4>Enter Card Details</h4>
    <label>
      Card Number:
      <input
        type="text"
        name="cardNumber"
        value={form.cardNumber || ""}
        onChange={handleChange}
        maxLength={16}
        pattern="[0-9]{16}"
        placeholder="16 digit card number"
        required
      />
    </label>
    <label>
      Expiry Date:
      <input
        type="text"
        name="expiry"
        value={form.expiry || ""}
        onChange={handleChange}
        placeholder="MM/YY"
        required
      />
    </label>
    <label>
      CVV:
      <input
        type="password"
        name="cvv"
        value={form.cvv || ""}
        onChange={handleChange}
        maxLength={3}
        pattern="[0-9]{3}"
        required
      />
    </label>
  </div>
)}

{/* UPI Details */}
{form.payment === "upi" && (
  <div className="upi-details">
    <h4>Enter UPI Details</h4>
    <label>
      UPI ID:
      <input
        type="text"
        name="upiId"
        value={form.upiId || ""}
        onChange={handleChange}
        placeholder="yourupi@bank"
        required
      />
    </label>
  </div>
)}
          <label>
  Offer Code (optional):
  <input
    type="text"
    name="offerCode"
    value={form.offerCode || ""}
    onChange={handleChange}
    placeholder="Enter promo code"
  />
</label>

{/* Show price summary (dummy for now) */}
<div style={{margin: '16px 0'}}>
  <b>Order Total:</b> ₹{form.offerCode === 'FOODIE30' ? '140' : '200'}
  {form.offerCode === 'FOODIE30' && <span style={{color: 'green', marginLeft: 8}}>(30% OFF!)</span>}
</div>

<button className="place-order-btn" type="submit">Place Your Order</button>
        </form>
      )}
    </div>
  );
};

export default PlaceOrder;
