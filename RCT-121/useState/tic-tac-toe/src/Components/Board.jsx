import React from "react";
import "./Board.css";
export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  return (
    <>
      <div className="gameBoard">
        {/* <div></div> */}
        {/* <div className="cell x"></div>
        <div className="cell circle"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
  <div className="cell"></div>*/}
      </div>
      <div>
        <div></div>
        <button className="restartGame">restart</button>
      </div>
    </>
  );
};
