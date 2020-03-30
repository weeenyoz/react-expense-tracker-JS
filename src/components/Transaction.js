import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = props => {
  const { id, text, amount } = props;

  const { dispatch } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";

  const deleteTransaction = () => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  return (
    <>
      <li className={sign === "-" ? "minus" : "plus"}>
        {text}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={deleteTransaction}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
