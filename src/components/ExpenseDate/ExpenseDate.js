import './ExpenseDate.css';

//כפרמטר ולאחר מכן אנו נוסיף נקודה ושם שם משתנה  props כאשר אנו נוסיף  
//אנו בעצם נזין את הערף שהזמנו בתוך המשתנה בקומפוננטה הראשית אשר קראנו לקומפוננטה זו בתוכה 
//app.js במקרה הזה הזמנו ערכים בקומפוננטת 
function ExpenseDate(props) {

    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear()

    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>

      );
  }
  
  export default ExpenseDate;
  