import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('ko-KR', {month: 'long'});
  const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;