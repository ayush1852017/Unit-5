import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCharData } from "../Redux/actions";

export const CharacterPage = () => {
  const data = useSelector((state) => state?.reducer?.data);
  const loading = useSelector((state) => state?.reducer.loading);
  const error = useSelector((state) => state?.reducer.error);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharData({ dispatch, params }));
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>error...</div>}
      <div
        key={data?.id}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "1rem",
          padding: ".5rem",
          backgroundColor: "#000",
          color: "tomato",
          borderRadius: ".5rem",
        }}
      >
        <div>
          <img
            src={data?.image}
            style={{ borderRadius: ".5rem" }}
            width="200px"
            height="200px"
            alt="img"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <div>Name: {data?.name}</div>
          <div>Status: {data?.status}</div>
          <div>Species: {data?.species}</div>
          <div>Gender: {data?.gender}</div>
        </div>
      </div>
    </div>
  );
};
