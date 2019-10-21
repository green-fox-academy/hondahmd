const redux = require('redux');

const initState = {
    counter: 0,
    tags: []
};

const manipulations = redux.combineReducers({
    changeCounter,
    changeTag
})
const store = redux.createStore(manipulations);

store.dispatch({type: 'SET', amount: 6});
console.log(store.getState());
store.dispatch({type: 'INCREASE'});
console.log(store.getState());
store.dispatch({type: 'INCREASE', amount: 2});
console.log(store.getState());
store.dispatch({type: 'RESET'});
console.log(store.getState());
store.dispatch({type: 'INCREASE'});
console.log(store.getState());
store.dispatch({type: 'DECREASE', amount: 4});
console.log(store.getState());

store.dispatch({type: 'ADD_TAG', tag: 'blue'});
console.log(store.getState());
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
console.log(store.getState());
store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
console.log(store.getState());
store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
console.log(store.getState());
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
console.log(store.getState());
store.dispatch({type: 'REMOVE_TAGS'});
console.log(store.getState());

function changeCounter(state = initState.counter, action) {
    switch (action.type) {
        case 'SET':
            return (action.amount)
        case 'INCREASE':
            if (action.amount !== undefined) {
                return (state + action.amount)
            } else {
                return (state + 1)
            }   
        case 'DECREASE':
            if (action.amount !== undefined) {
                return (state - action.amount)
            } else {
                return (state - 1)
            }
        case 'RESET':
            return(0)
        default:
            return state;
    }
}

function changeTag(state = initState.tags, action) {
    switch (action.type) {
        case 'ADD_TAG':
            if (state.indexOf(action.tag) === -1) {
                return ([
                    ...state,
                    action.tag
                ])
            }
        case 'REMOVE_TAG':
            if (state.indexOf(action.tag) !== -1) {
                state.splice(state.indexOf(action.tag), 1);
                return (state)
            }
        case 'REMOVE_TAGS':
            return ([])
        default:
            return (state);
    }
}