const submitPostAction = (posts) => ({
    type: 'SUBMIT_POST',
    payload: {
        posts
    }
});

export default {
    submitPostAction
}
