import { useState } from "react";
import "./Cards.css";
const arr = [
  {
    id: 1,
    avtar:
      "https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Annette Murphy",
    email: "annetemurphy@gmail.com",
    mobile: "78697965589",
  },
  {
    id: 2,
    avtar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Theresa Watson",
    email: "theresawatson@gmail.com",
    mobile: "098765435678",
  },
  {
    id: 3,
    avtar:
      "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Cody Horward",
    email: "codyhorward@gmail.com",
    mobile: "9876546789",
  },
  {
    id: 4,
    avtar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Max Lane",
    email: "maxlane@gmail.com",
    mobile: "97865435654",
  },
  {
    id: 5,
    avtar:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Marvin Fisher",
    email: "marvinfisher@gmail.com",
    mobile: "78697965589",
  },
];
export const Cards = () => {
  const [user, setUsers] = useState(arr);
  const [visible, setVisible] = useState(true);
  const handleVisibility = () => {
    setVisible(!visible ? true : false);
    console.log(1);
  };
  return (
    <>
      {user.map((e) => {
        return (
          <div className="card">
            <div className="visible-card" onClick={handleVisibility}>
              <div className="card-left">
                <img src={e.avtar} alt="" />
              </div>
              <div className="card-right">
                <div className="card-name">
                  <h3>{e.name}</h3>
                </div>
                <div className="card-email">
                  <p> {e.email}</p>
                </div>
              </div>
            </div>
            {visible ? (
              <div className="invisible-card1">
                {/* not visible */}
                <>
                  <p>Mobile No.</p> <p>{e.mobile}</p>
                </>
              </div>
            ) : (
              <div className="invisible-card2">
                {/* not visible */}
                <>
                  <p>Mobile No.</p> <p>{e.mobile}</p>
                </>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
