import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const getTotalValues = type => {
    const totalAmount = transactions
      .filter(({ amount }) => {
        return type === "income" ? amount > 0 : amount < 0;
      })
      .map(({ amount }) => amount);

    return totalAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  };

  const totalIncomes = getTotalValues("income");
  const totalExpenses = getTotalValues("expenses");

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIncomes}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(totalExpenses)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
