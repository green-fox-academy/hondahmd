const todoMoves = new Map();
todoMoves.set('ADD_ISSUE', addIssue);
todoMoves.set('GET_ALL_ISSUES', getAllIssues);
todoMoves.set('DELETE_ONE_ISSUE', deleteOneIssue);

const todo = (state = [], action) => {
    if (todoMoves.has(action.type)) return todoMoves.get(action.type)(state, action.payload);
    else return state;
}

function addIssue(state, payload) {
    return [
        ...state,
        payload['newData']
    ]
}

function getAllIssues(state, payload) {
    return state;
} 

function deleteOneIssue(state, payload) {
    return state.filter(issue => issue.id !== payload.id);
}

export default todo;
