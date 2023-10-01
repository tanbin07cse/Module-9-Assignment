const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController.js');
const adminController = require('../controllers/adminController.js');
const subAdminController = require('../controllers/subAdminController.js');
const postController = require('../controllers/postController.js');

router.get('/create',userController.create);
router.get('/update',userController.update);
router.get('/delete',userController.delete);
router.get('/read',userController.read);

router.get('/create',adminController.create);
router.get('/update',adminController.update);
router.get('/delete',adminController.delete);
router.get('/read',adminController.read);

router.get('/create',subAdminController.create);
router.get('/update',subAdminController.update);
router.get('/delete',subAdminController.delete);
router.get('/read',subAdminController.read);

router.get('/create',postController.create);
router.get('/update',postController.update);
router.get('/delete',postController.delete);
router.get('/read',postController.read);

// router.get('/undefined',userController.undefined);



module.exports=router;