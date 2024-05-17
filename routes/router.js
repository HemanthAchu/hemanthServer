const express =require('express')
const router =new express.Router()
const projectController =require('../Controller.js/control')
router.post('/add',projectController.addUsers)
router.get('/get',projectController.getData)
router.delete('/delete/:id',projectController.deleteData)
router.put('/edit-user',projectController.editUser)
// // In your Express router
// router.put('/edit/:id', projectController.editRecipe);

module.exports =router