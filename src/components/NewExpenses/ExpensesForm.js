import {React , useState} from 'react';

import "./ExpensesForm.css";



//יוצרים קומפוננה בצורת פונ' חץ
const ExpenseForm  = (props) => {
    
    //מכיוון שערכם הולך להשתנות useState יוצרים משתנים מסוג
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setenterAmount] = useState('');
    const [enterDate, setenterDate] = useState('');

    //את המידע של האלמנט שהפעיל אותה event פונק' אשר תקבל לערך הפרמטר שלה 
    const titleChangeHandler = (event)=>{
        //של האלמנט שהפעיל אותה value את  enterTitle ולאחר מכן תכניס לתוך המשתנה
        setEnterTitle(event.target.value);
    };

    //כנ''ל
    const amountChangeHandler = (event)=>{
        setenterAmount(event.target.value);
    };

    //כנ''ל
    const dateChangeHandler = (event)=>{
        setenterDate(event.target.value);
    };

    //את המידע של האלמנט שהפעיל אותה event פונק' אשר תקבל לערך הפרמטר שלה 
    //במקרה שלנו זה המידע של כל הפורם עצמו
    const submitHundler = (event)=>{
    //פקודה זו עוצרת את ההרצה האוטומטית של הקוד וכך נותנת לנו לעשות פעולות מסויימות עם המידע
    event.preventDefault();
    //כאן אנו ניצור משתנה שמכיל אובייקט עם הערכים הללו:
    const expenseData = {
        title: enterTitle,
        amount: +enterAmount,
        date: new Date(enterDate)
    };

    //לאחר שיצרנו משתנה ושמרנו לתוכו את הערכים שהזין המשתמש בפורום שלנו 
    //אנו נאפס שוב את ערכי המשתנים כדי שהמשתמש יוכל להזין שוב ערכים חדשים
    console.log("expenseData: " , expenseData);
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setenterAmount("");
    setenterDate("");
    };

    return( 
                //submitHundler בעת לחיצת הכפתור שבפורום תופעל הפונ' ה
                <form onSubmit={submitHundler}>
                    <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            {/* two way buinding- */}
                            {/*בעת שינוי ובו זמנית אנו נשנה את ערך  titleChangeHandler בתוך תיבת האינפוט אנו נפעיל את פונ' */}
                            {/*שלנו בהתאם לפעולות הפונ' שמופעלת בעת שינוי value ה */}
                            <input type='text' value={enterTitle} onChange={titleChangeHandler}/>
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            {/* כנ''ל */}
                            <input type='number' value={enterAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            {/* כנ''ל */}
                            <input type='date' value={enterDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>


                        </div>
                    </div>
                    <div className='new-expense__actions'>
                        <button onClick={props.onCancel}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                        </div>
                </form>
            );
    };

    export default ExpenseForm