const router = require('express').Router();
const db = require("../../db/db.json")
router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    req.body.id = db.length + 1
    db.push(req.body)
    res.json(db)
})

module.exports = router; 