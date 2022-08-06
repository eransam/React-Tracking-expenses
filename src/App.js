import React ,{useState} from 'react'
import NewExpenses from './components/NewExpenses/NewExpenses'
import Expenses from "./components/Expenses/Expenses"

    //כאן אנו יוצרים מערך אובייקטים
    const DUMMY_EXPENSES = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,

          date: new Date(2021, 5, 12),
        },
      ];


function App() {

    //כאן אנו יוצרים משתנה מסוג יוז-סטייס ונותנים לו ערך התחלתי שהוא המערך הרשום מעלה
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    //כאן אנו יוצרים פונ'אשר מקבלת ערך
    const addExpenseHandler = (expense)=>{

        //שווה לערך הנוכחי הקיים במשתנה prevExpenseומחילים לתוכו פונ' חץ אשר ה expenses קוראת למשתנה
        setExpenses((prevExpense)=>{
            
            //addExpenseHandler ואנו מחזירים לתוך ערך המשתנה את הערך הנוכחי פלוס הערך שהוזן בפרמטר של הפונ' שיצרנו
            return [expense,...prevExpense]
        });

    }
        

    return(
        <div>
            {/*addExpenseHandler כאן אנו מזמנים את הקומפוננטה הזו ושולחים אליה כפרופס את הפונ' הזו*/}
            <NewExpenses onAddExpense={addExpenseHandler} />
            {/* כאן אנו מזמנים את הקומפו הזו ושולחים אליה כפרופס את המשתנה אשר מכיל את האובייקט */}
            <Expenses items={expenses} />
        </div>
        );
    }

    export default App;
