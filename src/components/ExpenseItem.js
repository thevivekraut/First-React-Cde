// import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div><h2>Expense Item</h2></div>
      <div className="expense-item__description">
      Food Rs 10
      <div className="expense-item__price">Petrol Rs 100</div>
      <div className="expense-item__price">Movies Rs 200</div>
    </div>
    </div>
  );
}

export default ExpenseItem;
