const addIssue = (newData) => ({
    type: 'ADD_ISSUE',
    payload: {
        newData
    }
});

const getAllIssues = () => ({
    type: 'GET_ALL_ISSUES'
});

const deleteOneIssue = (id) => ({
    type: 'DELETE_ONE_ISSUE',
    payload: {
        id
    }
})

export default {
    addIssue,
    getAllIssues,
    deleteOneIssue
}
