const router = require('express').Router();

const roleController = require('../controller/roleController.js');

router.get('/', roleController.list);
router.post('/', roleController.create);
router.delete('/:id', roleController.destroy);

module.exports = router;