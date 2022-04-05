import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  return (
    <div className="expense">
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App;
