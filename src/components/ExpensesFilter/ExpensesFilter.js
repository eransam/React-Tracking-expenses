import React from 'react';
import './ExpensesFilter.css';

//יוצרים קומפוננטה שמקבלת ערך פרומפס מקומפוננטה אשר מזמנת אותה 
const ExpensesFilter = (props) => {
    //יוצריפ פונ' שמקבלת כפרמטר את המידע של האלמנט אשר מפעיל אותה
    const dropdownChangeHandler = (event) => {
        // ואז קוראת לפונקציה אשר נמצאת תחת המשתנה פרופס של הקומפו שזימנה אותה 
        //dropdownChangeHandler ושולחת לה כפרמטר את הווליו של האלמנט אשר הפעיל את הפונקציה
        props.onChangeFilter(event.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;