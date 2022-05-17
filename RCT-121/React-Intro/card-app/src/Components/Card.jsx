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
        <div className="visible-card">
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
          <div className="card-show-button">
            {visible ? (
              <img
                src="https://img.icons8.com/cute-clipart/344/details-pane.png"
                width="40"
                height="40"
                alt=""
                onClick={handleVisibility}
              />
            ) : (
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-hide-bull-emoji-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                width="40"
                height="40"
                alt=""
                onClick={handleVisibility}
              />
            )}
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
