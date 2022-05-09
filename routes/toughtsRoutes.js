const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughtController.createTought)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.post('/add', ToughtController.createToughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.removeTought)
router.get('/', ToughtController.showToughts)


module.exports = router