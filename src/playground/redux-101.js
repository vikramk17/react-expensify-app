import { createStore } from 'redux';

//Action generator functions
const incrementCount = ({incrementBy = 1} = {})=>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}={})=>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () =>({
    type: 'RESET',
});

//Reducers
//1.reducer is a pure function
//2.never change action or state

let countReducer = (state = {count: 0}, action )=>{
    switch(action.type){
        case "INCREMENT":
             return{
                count: state.count + action.incrementBy
            }
        case "DECREMENT": 
            return{
                count: state.count - action.decrementBy
            }
        case "SET":
            return{
                count: action.count
            }
        case "RESET":
            return{
                count: 0
            }
        default :
        return state;
    }
}

const store = createStore(countReducer)

const unsubscibe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 100}))

