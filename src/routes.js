const { Router } = require('express')

const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')

const router = Router()

router.post('/user', UserController.store)
router.get('/users', UserController.index)
router.delete('/user/:id', UserController.delete)

router.post('/session', SessionController.store)

module.exports = router;