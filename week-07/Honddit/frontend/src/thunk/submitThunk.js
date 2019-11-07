import submitActions from 'actions/submitActions';

const server_location = 'http://127.0.0.1:8080';

function submitPost(data) {
    const newPost = {};
    newPost['title'] = data.title;
    newPost['url'] = data.url;
    
    return async (dispatch) => {
        const response = await fetch(`${server_location}/posts`, {
            'method': 'post',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(newPost)
        });
        const data = await response.json();
        if(data[0]) dispatch(submitActions.submitPostAction(data[0]));
        else alert('submit failed, please submit again!');
    } 
}

export default {
    submitPost
}
