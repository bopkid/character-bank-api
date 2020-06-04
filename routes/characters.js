const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.characters.index)


module.exports = router