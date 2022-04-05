import React from 'react'
import ExpenseItem from "./ExpenseItem";
import { expenses } from '../../data.js';
import './Expenses.css';

const Expense = () => {
   
  return (
    <div className='expenses'>
  
      {expenses.map((expense, i) => 
      <ExpenseItem 
        key={i} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}        
      ></ExpenseItem>   
               
      )} 
    </div>
  )
}

export default Expense