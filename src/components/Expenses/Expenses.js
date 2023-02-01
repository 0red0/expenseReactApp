import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
   const [selectedYear, setSelectedYear] = useState("2019");

   function selectYearHandler(para) {
      setSelectedYear(para);
   }

   const expensesArr = props.items.filter(
      // (ex) => ex.date.toString().includes(selectedYear)
      (ex) => ex.date.getFullYear().toString().includes(selectedYear)
   );

   return (
      <div>
         <Card className="expenses">
            <ExpensesFilter
               selectedYear={selectedYear}
               onSelectYear={selectYearHandler}
            />
            <ExpensesChart expenses={expensesArr} />
            <ExpensesList items={expensesArr} />
         </Card>
      </div>
   );
}

export default Expenses;
