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
    <div
      style={{
        display: "flex",
        border: "1px solid #000",
        padding: "1rem",
        gap: "2rem",
        margin: "1rem",
      }}
    >
      <div>
        <img src={image} width="100px" alt="" />
      </div>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        <div>{name}</div>
        <div>{cuisine}</div>
        <div>Cost ₹{minPrice} for one</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        <div
          style={{
            backgroundColor: "green",
            padding: "0.25rem",
            color: "#fff",
          }}
        >
          {rating}
        </div>
        <div>{votes}</div>
        <div>{reviews}</div>
      </div>
    </div>
  );
};
