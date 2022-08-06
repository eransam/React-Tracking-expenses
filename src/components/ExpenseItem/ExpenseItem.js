import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import CardWrapper from '../card-wrapper/card-wrapper';
import React from 'react';


//כפרמטר ולאחר מכן אנו נוסיף נקודה ושם שם משתנה  props כאשר אנו נוסיף  
//אנו בעצם נזין את הערף שהזמנו בתוך המשתנה בקומפוננטה הראשית אשר קראנו לקומפוננטה זו בתוכה 
//app.js במקרה הזה הזמנו ערכים בקומפוננטת 
//*ניתן לרשום פונ' קומפוננה גם כפונ' חץ כך:
const ExpenseItem = (props) => {

    //כאשר אנו יוצרים משתנה אשר אנו רוצים שערכו השתנה במהלך חיי הקומפוננטה אנו שמים
    //שפקודה זו מרנדרת את הקומפוננטה בכל שינוי בערך המשתנה הנבחר useStateאותו בתוך פקודת ה
    //פה אנו מגדירים ערך התחלתי למשתנה = useState(props.title)
    const title = props.title;

    return (
        <li>
        <CardWrapper className='expense-item'>
            {/*app אשר הוזנו בקומפוננטת  propשל ה  date  כאן אנו מזמנים קומפוננטה ושולחים אלייה ערכים מהמשתנה  */}
            {/* זאת קומפוננטה אשר מציגה בצורה יפה את התאריך */}
            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            
        </CardWrapper>
        </li>
      );
  }
  
  export default ExpenseItem;
  