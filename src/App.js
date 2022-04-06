import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense)
  }
  return (
    <div className="expense">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense />
    </div>
  );
}

export default App;
