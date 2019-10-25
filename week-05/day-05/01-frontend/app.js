const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    const input = req.query.input;
    if (input === undefined) {
        res.json({
            'error': 'Please provide an input!'
        });
    } else {
        res.json({
            'received': input,
            'result': input * 2
        })
    }
});

app.get('/greeter', (req, res) => {
    const {name ,title} = req.query;
    if (name !== undefined && title !== undefined) {
        res.json({
            'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
        });
    } else if (name !== undefined) {
        res.json({
            'error': 'Please provide a title!'
        });
    } else if (title !== undefined) {
        res.json({
            'error': 'Please provide a name!'
        });
    } else {
        res.json({
            'error': 'Please provide a name and a title!'
        });
    }
});

app.get('/appenda/:appendable', (req, res) => {
    const input = req.params.appendable;
    if (input !== undefined) {
        res.json({
            'appended': `${input}a`
        });
    } else {
        res.status(404);
    }
});

app.post('/dountil/:action', (req, res) => {
    const input = req.params.action;
    const until = Number(req.body.until);
    if (until !== undefined) {
        if (input === 'sum') {
            res.send({
                'result': (1 + until) * until / 2
            });
        } else if (input === 'factor') {
            res.send({
                'result': multiply(until)
            });
        }
    } else {
        res.send({
            'error': 'Please provide a number!'
        });
    }
});

app.listen(PORT, () => {
    console.log(`server is now running on port ${PORT}`);
});

function multiply(input) {
    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i;
    }
    return result;
}