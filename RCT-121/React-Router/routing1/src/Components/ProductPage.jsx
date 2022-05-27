import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ProductPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setLoading(true);
    axios({
      url: `http://localhost:8080/products/${params.user_id}`,
      method: "GET",
    })
      .then((res) => {
        setData(res?.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(false);
        console.log(err);
      });
  }, [params.user_id]);
  console.log(data);
  return (
    <>
      {loading && <div>loading</div>}
      {error && <div>error</div>}

      <div key={data?.id} style={{ margin: "1rem" }}>
        <div>
          <span style={{ fontWeight: "bold" }}>{data?.id + 1}. </span>
          {data?.name}
        </div>
        <div>₹{data?.price}</div>
      </div>
    </>
  );
};
