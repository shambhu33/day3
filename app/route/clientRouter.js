const router = require('express').Router();
const userController = require('../controller/userController.js');

router.get('/', userController.list);
router.post('/', userController.create);
router.delete('/:id', userController.destroy);

module.exports = router;