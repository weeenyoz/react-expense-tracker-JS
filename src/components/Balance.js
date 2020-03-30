import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const totalAmount = transactions
    .map(transaction => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  console.log("totalamount: ", totalAmount);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </div>
  );
};

export default Balance;
