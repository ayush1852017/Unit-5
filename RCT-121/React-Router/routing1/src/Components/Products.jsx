import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Products = () => {
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
        setError(false);
      })
      .catch((err) => {
        setError(false);
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {data?.map((d) => {
        return (
          <div key={d.id} style={{ margin: "1rem" }}>
            <div>
              <span style={{ fontWeight: "bold" }}>{d.id + 1}. </span>
              {d.name}
            </div>
            <div>₹{d.price}</div>
            <Link to={`/product/${d.id + 1}`}>
              <button
                style={{ width: "150px", height: "30px", margin: ".5rem" }}
              >
                see more
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};
