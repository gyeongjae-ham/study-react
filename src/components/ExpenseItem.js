import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('ko-KR', {month: 'long'});
  const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;