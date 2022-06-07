import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllData } from "../Redux/actions";
import style from "../Components/app.module.css";
export const Characters = () => {
  const data = useSelector((state) => state?.reducer.data);
  const loading = useSelector((state) => state?.reducer.loading);
  const error = useSelector((state) => state?.reducer.error);
  const [sort, setSort] = useState("ASC");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData({ dispatch, page, sort }));
  }, [page, sort]);
  console.log(data);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <h2>Characters</h2>
      <button id="SORT_BUTTON" onClick={() => setSort("ASC")}>
        Sort by Ascending
      </button>
      <button id="SORT_BUTTON" onClick={() => setSort("DESC")}>
        Sort by Descending
      </button>
      <div className={style.container}>
        {data?.map((d) => {
          return (
            <Link
              to={`/character/${d.id}`}
              className={style.boxLink}
              style={{ textDecoration: "none" }}
            >
              <div key={d.id} className={style.charbox}>
                <div>
                  <img
                    src={d.image}
                    style={{ borderRadius: ".5rem" }}
                    width="200px"
                    height="200px"
                    alt="img"
                  />
                </div>
                <div className={style.boxNav}>
                  <div>Name: {d.name}</div>
                  <div>Status: {d.status}</div>
                  <div>Species: {d.species}</div>
                  <div>Gender: {d.gender}</div>
                </div>
              </div>
            </Link>
          );
        })}
        <div>
          <button
            disabled={page == 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
          <button onClick={() => setPage((prev) => prev + 1)}>next</button>
        </div>
      </div>
    </>
  );
};
