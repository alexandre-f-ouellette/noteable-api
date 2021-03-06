var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./userController');

// setup boilerplate route jsut to satisfy a request
// for building
router.param('id', controller.params);
router.get('/me', controller.me);

router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;
