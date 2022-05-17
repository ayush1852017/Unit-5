import { useState } from "react";
import "./Card.css";

export const Card = (props) => {
  const { avtar, name, email, phone } = props;
  const [visible, setVisible] = useState(true);
  const handleVisibility = () => {
    setVisible(visible ? false : true);
  };
  return (
    <>
      <div className="card">
        <div className="visible-card" onClick={handleVisibility}>
          <div className="card-left">
            <img src={avtar} alt="" />
          </div>
          <div className="card-right">
            <div className="card-name">
              <h3>{name}</h3>
            </div>
            <div className="card-email">
              <p> {email}</p>
            </div>
          </div>
        </div>
        {visible ? (
          <div className="invisible-card1">
            {/* not visible */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/1034/1034131.png"
              alt=""
            />{" "}
            <p>{phone}</p>
          </div>
        ) : (
          <div className="invisible-card2">
            {/* not visible */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/1034/1034131.png"
              alt=""
            />
            <p>{phone}</p>
          </div>
        )}
      </div>
    </>
  );
};
