import uuid from 'uuid';

//add expenses
export const addExpenses = ({description='', note='', amount=0, createdAt=0}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//remove expenses
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//edit expense
export const editExpense = (id, updated) => ({
    type: 'EDIT_EXPENSE',
        id, 
        updated
});
