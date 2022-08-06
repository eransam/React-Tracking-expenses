import "./ExpensesList.css";
import React from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";




const ExpensesList = (props) => {


    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">no expenses found.</h2>
    }

    return(
        <ul className="expenses-list">
            {props.items.map((expense)=>(
            <ExpenseItem
    
            //כדי שריאקט תוכל לזהות key כאשר אנו מזמנים קומפוננטה יותר מפעם אחת אנו צריכים להוסיף לה את הפרופרטי
            //כל מופע של קומפו בניפרד
            key={expense.id}
    
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))}

        </ul>
    )
            }
  
  export default ExpensesList;