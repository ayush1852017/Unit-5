import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Error } from "../Routes/Error";
export const ProductPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    axios({
      url: `http://localhost:8080/products/${params.user_id}`,
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
  // console.log(data?.id);
  const cartHandle = async (name, price) => {
    const isExist = false;
    const result = await axios.get(`http://localhost:8080/cart`);
    console.log(result?.data);
    const qt = 1;
    if (result.data.length === 0) {
      const order = { name: name, price: price, quantity: qt };

      axios.post(`http://localhost:8080/cart, ${order}`);
    } else {
      result.data.map((item) => {
        if (name === item.name) {
          item.quantity += 1;
          const order = {
            name: name,
            price: price,
            quantity: item.quantity,
          };
          axios.put(`http://localhost:8080/cart/${item.id}`, order);
        }
      });
      if (isExist == false) {
        const order = {
          name: name,
          price: price,
          quantity: qt,
        };
        axios.post("http://localhost:8080/cart", order);
      }
    }
  };
  return (
    <div>
      {loading && <div>loading</div>}
      {error && (
        <div>
          <Error />
        </div>
      )}

      <div key={data?.id}>
        <div>
          <img src={data?.img} alt="" width="70" height="70" />
        </div>
        <div>{data?.name}</div>
        <div>${data?.price}.00</div>
        <div>
          <button onClick={() => cartHandle(data?.name, data?.price, 1)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
