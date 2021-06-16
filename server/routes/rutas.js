const express = require('express');
const router = express.Router();

const main = require('../controllers/mainController');
const buMar=require('../controllers/busMariposasController');
const admi=require('../controllers/administradorController');
const vAdmi=require('../controllers/vAdmin');
const edit=require('../controllers/editarController');




router.get('/', main.list);
router.get('/busMariposas', buMar.list);
router.get('/administradores', admi.list)
router.get('/vAdmin', vAdmi.list);
router.get('/editarMariposa', edit.list);



module.exports = router;
