import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
   const [show, setShow] = useState(false);

   function saveExpenseHandler(para) {
      const newObj = {
         ...para,
         id: Date.now().toString(),
      };
      props.onAddExpense(newObj);
      setShow(false);
   }

   function showHandler() {
      setShow(true);
   }
   function hideHandler() {
      setShow(false);
   }

   return (
      <div className="new-expense">
         {!show && <button onClick={showHandler}>Add New Expense</button>}
         {show && (
            <ExpenseForm
               onSaveExpenseData={saveExpenseHandler}
               onCancel={hideHandler}
            />
         )}
      </div>
   );
}

export default NewExpense;
