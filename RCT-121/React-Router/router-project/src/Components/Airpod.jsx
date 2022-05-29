import axios from "axios";
import React, { useEffect, useState } from "react";

export const Airpod = () => {
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
      {error && <div>error</div>}
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.img} alt="" width="70" height="70" />
            </div>
            <div>{item.title}</div>
            <div>${item.price}.00</div>
          </div>
        );
      })}
    </div>
  );
};
