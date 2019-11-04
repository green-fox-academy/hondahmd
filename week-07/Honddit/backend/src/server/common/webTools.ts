/*
    Web Tools.
    Some commonly used web tools are defined here.
*/

// used for getting data and then handle it in func
const HANDLE_DATA = (func, req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    }); 
    req.on('end', () => func(body, req, res));
}

// check if the input is undefined
const CHECK_EMPTY = (input, res) => {
    if (input === undefined) {
        res.status(400).send("input is empty!");
        return false;
    }
    return true;
}

const HANDLE_ERROE = (func, req, res) => {
    try {
        func(req, res);
    } catch(error) {
        console.log(error);
    }
};

export default {
    HANDLE_DATA,
    CHECK_EMPTY,
    HANDLE_ERROE
}
