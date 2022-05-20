export const RestaurantDetails = ({
  name,
  image,
  votes,
  reviews,
  minPrice,
  cuisine,
  rating,
}) => {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div>{cuisine}</div>
        <div>Cost ₹{minPrice} for one</div>
      </div>
      <div>
        <div>{rating}</div>
        <p>{votes}</p>
        <p>{reviews}</p>
      </div>
    </div>
  );
};
