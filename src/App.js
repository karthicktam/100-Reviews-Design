// Design: https://dribbble.com/shots/7434211-Review-Panel-UI-Design -->
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function Reviews(props) {
  const { rating, percent } = props.item;

  return (
    <div className="review">
      <span className="icon-container">
        {rating} <FontAwesomeIcon icon={faStar} />
      </span>
      <div className="progress">
        <div className="progress-done" style={{ width: `${percent}%` }}></div>
      </div>
      <span className="percent">{percent}%</span>
    </div>
  );
}

export default function App() {
  const ratingsArr = [
    {
      rating: 5,
      percent: 0
    },
    {
      rating: 4,
      percent: 0
    },
    {
      rating: 3,
      percent: 0
    },
    {
      rating: 2,
      percent: 0
    },
    {
      rating: 1,
      percent: 0
    }
  ];

  const percentArrOriginal = [68, 19, 9, 3, 7];

  const [items, setItems] = useState(ratingsArr);
  const [percentArr] = useState(percentArrOriginal);

  useEffect(() => {
    setItems(
      items.map((item, idx) => {
        item.percent = percentArr[idx];
        return item;
      })
    );
  }, [percentArr]);

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      {items.map((item) => (
        <Reviews item={item} key={item.rating} />
      ))}
    </div>
  );
}
