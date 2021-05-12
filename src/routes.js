const { Router } = require('express')
const authMiddleware = require('./middlewares/auth')

const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')

const router = Router()

router.post('/user', UserController.store)
router.post('/session', SessionController.store)


router.use(authMiddleware)
router.get('/users', UserController.index)
router.delete('/user/:id', UserController.delete)



module.exports = router;