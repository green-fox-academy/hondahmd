import submitActions from 'actions/submitActions';

const server_location = 'http://127.0.0.1:8080';

function submitPost(data) {
    const newPost = {};
    newPost['title'] = data.title;
    newPost['url'] = data.url;
    
    return async (dispatch) => {
        let response = await fetch(`${server_location}/posts`, {
            'method': 'post',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(newPost)
        });
        let data = response.json();
        console.log(data);
        dispatch(submitActions.submitPostAction());
    } 
}

export default {
    submitPost
}
