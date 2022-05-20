import React, { useState } from "react";
// import data from "../data.json";
export const AddRestaurant = () => {
  const [addDetail, setAddDetail] = useState({
    name: "",
    categories: "",
    payment_method: "",
    total_votes: "",
    food_img: "",
    reviews: "",
    cost_for_one: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAddDetail({ ...addDetail, [name]: value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // // data.data = [...data.data, addDetail];
    // data.data = data.data.push(addDetail);
    // console.log(data.data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Restaurant Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="categories"
          id=""
          placeholder="Category"
          onChange={handleChange}
        />
        <select name="payment_method">
          <option value="card">Card</option>
          <option value="upi">Upi</option>
          <option value="cash">Cash</option>
        </select>
        <input
          type="text"
          name="total_votes"
          id=""
          placeholder="Votes"
          onChange={handleChange}
        />
        <input
          type="text"
          name="food_img"
          id=""
          placeholder="FoodImg"
          onChange={handleChange}
        />
        <input
          type="text"
          name="reviews"
          id=""
          placeholder="Reviews"
          onChange={handleChange}
        />
        <input
          type="text"
          name="cost_for_one"
          id=""
          placeholder="cost"
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
