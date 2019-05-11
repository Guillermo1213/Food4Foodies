const express = require('express');
const router = express.Router();

router.get('/api/user', (req, res) => {
    res.send(<h1>Hello World</h1>);
})

router.get('/api/fruits', (req, res) => {
    res.json(['apple', 'banana', 'cherry'])
});

module.exports = router;