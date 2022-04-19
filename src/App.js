import React, {useState} from 'react';
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from './data.js';
import Card from './components/UI/Card';

function App(){
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <Card className="expense">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses}/>
    </Card>
  );
}

export default App;
