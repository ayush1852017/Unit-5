import React, { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "../Routes/Error";
import { Link } from "react-router-dom";

export const Store = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.error(err);
      });
  }, []);
  return (
    <div>
      {loading && <div>loading</div>}
      {error && (
        <div>
          <Error />
        </div>
      )}
      {data?.map((item) => {
        return (
          <Link to={`/product/${item.id}`}>
            <div
              key={item.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div>
                <img src={item.img} alt="" width="170" height="120" />
              </div>
              <div>{item.title}</div>
              <div>${item.price}.00</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
