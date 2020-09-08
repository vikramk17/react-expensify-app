import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : ''  ,
            note: props.expense ? props.expense.note : '', 
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onTextareaChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
        this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        let err = "Please provide description and amount ";
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: err }))
        } else{
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return(
            <div>
                {this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type='number' placeholder="Amount" value={this.state.amount} 
                    onChange={this.onAmountChange} />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>{ false }}
                    />
                    <textarea placeholder='Add a note for your expense (optional)' 
                    value={this.state.note} onChange={this.onTextareaChange} ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
            
        );
    }
}

export default ExpenseForm;