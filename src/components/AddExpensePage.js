import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpenses } from '../actions/expenses'; 

const AddExpensePage = (props) => {
    return(
        <div>
            <h2>Add Expense</h2>
            <ExpenseForm onSubmit={(expense)=>{
                props.dispatch(addExpenses(expense)); 
                props.history.push('/');
            }}/>
        </div>
    )
}

export default connect()(AddExpensePage);