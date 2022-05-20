import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaginationComponent } from "./PaginationComponent";
import { RestaurantDetails } from "./RestaurantDetails";
export const FetchDataComponent = () => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState("");
  const [text, setText] = useState("");
  const [q, setQ] = useState("");
  const [ratingOrder, setRatingOrder] = useState("asc");
  const [costOrder, setCostOrder] = useState("asc");
  const [filterRating, setFilterRating] = useState(0);

  useEffect(() => {
    fetchdata({ page, ratingOrder, costOrder, filterRating, q });
  }, [page, ratingOrder, costOrder, filterRating, q]);

  const fetchdata = async ({
    page,
    ratingOrder,
    costOrder,
    filterRating,
    q,
  }) => {
    axios({
      method: "GET",
      url: "http://localhost:8080/data",
      params: {
        _page: page,
        _limit: 5,
        _sort: "rating, cost",
        _order: `${ratingOrder},${costOrder}`,
        _rating_gte: filterRating,
        q: q,
      },
    })
      .then((res) => {
        setResData(res.resData);
        console.log(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
    console.log(resData);
  };
  return (
    <div>
      <h1>Restaurent Details</h1>
      {loading && <div>Loading</div>}
      <div>
        <h3>Search</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setQ(text)}>Search</button>
      </div>
      <div>
        <button
          disabled={ratingOrder === "asc"}
          onClick={setRatingOrder("asc")}
        >
          Sort by high Rating
        </button>
        <button
          disabled={ratingOrder === "desc"}
          onClick={setRatingOrder("desc")}
        >
          Sort by low Rating
        </button>
      </div>
      <div>
        <button disabled={costOrder === "asc"} onClick={setCostOrder("asc")}>
          Sort by high Cost
        </button>
        <button disabled={costOrder === "desc"} onClick={setCostOrder("desc")}>
          Sort by low Cost
        </button>
      </div>
      <div>
        <h4>Filter ratings</h4>
        <button onClick={() => setFilterRating(4)}>greater than 4</button>
        <button onClick={() => setFilterRating(3)}>greater than 3</button>
        <button onClick={() => setFilterRating(2)}>greater than 2</button>
        <button onClick={() => setFilterRating(1)}>greater than 1</button>
        <button onClick={() => setFilterRating(0)}>All</button>
      </div>
      <div>
        {/* pagination */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
        <PaginationComponent
          currentPage={page}
          lastPage={5}
          onPageChange={setPage}
        />
      </div>
      <div>
        {resData.map((item) => (
          <RestaurantDetails key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
