const router = require('express').Router();

const userController = require('../controller/userController.js');


// const logger2=require()
const logger=require('../middleware/logger');

// router.get('/', userController.list);
// router.post('/', userController.create);

router.route('/')
    .get(userController.list)
    // .get(logger2,userController.list)
    .get(userController.create);
router.delete('/:id', userController.destroy);

module.exports = router;