import { addExpenses, editExpense, removeExpense } from '../../actions/expenses';

test('Testing remove expense', () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    })
});


test('Testing edit expense', () => {
    const action = editExpense('12',{note: 'New input'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '12',
        updated: {
            note: 'New input'
        }
    })
})

test('Testing add expense', () => {
    const data = {
        description: "Rent",
        note: "Pending rent",
        amount: 12990,
        createdAt: 1000
    }
    const action = addExpenses(data);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
        ...data,
        id: expect.any(String)
        }
    })
})


test('random add expense', () => {
    const action = addExpenses();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})