import "./NewExpenses.css";
import React ,{useState} from 'react';
import ExpenseForm  from './ExpensesForm';

//****כך אנו מעבירים מידע למעלה לקומפוננטת האב****
//item אנו נקרא לקומפוננטה זו ונכניס ערכים למשתנה  app.js  בקובץ 
//אפשרי גם לרשום פונקציות קומפוננטה בשיטת פונקציית חץ כך:
const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    //יוצרים פונ' אשר מקבלת אובייקט במקרה שלנו 
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        //יוצרים משתנה 
        const expeseData = {
            //ומעבירים עליו העתק של האובייקט המועבר
            ...enteredExpenseData,
            //ומוסיפים עוד פרמטר
            id: Math.random().toString()
        };
        //אשר בפרופס של הקומפוננטה המזמנת את קומפוננטה זו onAddExpense כך אנו מעבירים את האובייקט למשתנה 
        props.onAddExpense(expeseData);
        setIsEditing(false);
    };

        const startEditingHandler = () =>{
            setIsEditing(true);
        };

        const stopEditingHandler = () =>{
            setIsEditing(false);
        };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>add new expense</button>}

            {/*saveExpenseDataHandler אשר מקבלת כפרומפס את המשנה הזה המחיל את הפונ' ExpenseForm בקטמפוננטה ראשית זו אנו מחזירים את הקומפוננטה  */}
            {/*ונשלח לה כפרמטר את האובייקט החדש שנוצר saveExpenseDataHandler אנו נזמן את פונ'ExpenseForm לאחר מכן בקומפוננטה */}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    )
  };
  
  export default NewExpenses;