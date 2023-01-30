import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
   const [enteredTitle, setEnteredTitle] = useState("");
   const [enteredAmount, setEnteredAmount] = useState("");
   const [enteredDate, setEnteredDate] = useState("");

   // const [userInput, setUserInput] = useState({
   //    enteredTitle: "",
   //    enteredAmount: "",
   //    enteredDate: "",
   // });

   const titleChangeHandler = (e) => {
      setEnteredTitle(e.target.value);
      // setUserInput({
      //    ...userInput,
      //    enteredTitle: e.target.value,
      // });
   };
   const amountChangeHandler = (e) => {
      setEnteredAmount(e.target.value);
      // setUserInput({
      //    ...userInput,
      //    enteredAmount: e.target.value,
      // });
   };
   const dateChangeHandler = (e) => {
      setEnteredDate(e.target.value);
      // setUserInput({
      //    ...userInput,
      //    enteredDate: e.target.value,
      // });
      //this is safer so it uses the latest state
      // setUserInput((prevState) => {
      //    return { ...prevState, enteredDate: e.target.value };
      // });
   };
   const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate),
      };
      console.log(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
               ></input>
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  min=".01"
                  step=".01"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
               ></input>
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  min="2019-1-1"
                  max="2023-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
               ></input>
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;
