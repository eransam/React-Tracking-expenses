import "./Expenses.css";
import React,{useState} from 'react';
import CardWrapper from "../card-wrapper/card-wrapper";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpenseChart/ExpenseChart";

//item אנו נקרא לקומפוננטה זו ונכניס ערכים למשתנה  app.js  בקובץ 
//אפשרי גם לרשום פונקציות קומפוננטה בשיטת פונקציית חץ כך:
const Expenses = (props) => {

    
    const [filteredYear,setFilteredYear] = useState("2020");

    //כאן אנו יוצרים פונ' אשר מקבלת ערך בפרמטר שלה ומדפיסה אותו על הקונסול
    const filterChangeHandler = (selectedYear)=> {
        setFilteredYear(selectedYear);
    }

    //אשר נשלח לנו מקומפוננטת האב ומחילה עליו את פונ' items פונ' אשר לוקחת את מערך האובייקטים מהמשתנה 
    //הפילטר אשר מחזירה רק את האובייקטים אשר עמדו בתנאי הסינון של פונ' הפילטר
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <>
        <CardWrapper className="Expenses">

        {/*שיצרנו filterChangeHandler את הפונקציה  onChangeFilter כאן אנו מזמנים את הקומפו הזה ושולחים לו לפרופס תחת המשתנה */}
        {/*ומדפיסים אותה בקונסול מפה Expenses למעלה לקומפו  ExpensesFilter וכך בעצם אנו מעבירים את הבחירה אשר קרתה בקומפו */}
        {/* וכך בעצם אנו מעלים מידע לקומפו האב */}
        
        <ExpensesFilter
         selected={filteredYear}
          onChangeFilter={filterChangeHandler} />

          <ExpensesChart Expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </CardWrapper>
      </>
      );
  }
  
  export default Expenses;