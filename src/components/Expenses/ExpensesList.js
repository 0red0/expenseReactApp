import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
   if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Found NO Expenses.</h2>;
   }

   return (
      <ul className="expenses-list">
         {props.items.map((ex) => (
            <ExpenseItem
               key={ex.id}
               title={ex.title}
               amount={ex.amount}
               date={ex.date}
            />
         ))}
      </ul>
   );

   /* {props.items.length === 0 ? (
   <p>No Expenses To Show.</p>
) : (
   props.items.map((ex) => (
      <ExpenseItem
         key={ex.id}
         title={ex.title}
         amount={ex.amount}
         date={ex.date}
      />
   ))
)} */

   /* {props.items.length === 0 && <p>No Expenses To Show.</p>}
{props.items.length > 0 &&
   props.items.map((ex) => (
      <ExpenseItem
         key={ex.id}
         title={ex.title}
         amount={ex.amount}
         date={ex.date}
      />
   ))} */
}

export default ExpensesList;
