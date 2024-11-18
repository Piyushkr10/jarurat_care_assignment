const express=require('express')
const router = express.Router();
const serviceController = require('../controllers/serviceController')

router.post('/services',serviceController.addService);

router.get('/services/:id',serviceController.getAllServices);

router.put('/services/:id',serviceController.updatedService);

router.delete('/services/:id',serviceController.deleteService);

module.exports = router;