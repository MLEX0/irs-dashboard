const Router=require('express')
const router =new Router()
const DashBoardController=require('../controller/dashboard.controller')

router.get('/count',DashBoardController.getCountAll)
router.get('/gender',DashBoardController.getGender)
router.get('/snils',DashBoardController.getSnils)
router.get('/education',DashBoardController.getEducation)
router.get('/age',DashBoardController.getAge)
router.get('/inn',DashBoardController.getInnNumber)
router.get('/militaryticket',DashBoardController.getMilitaryTicket)
router.get('/passport',DashBoardController.getPassportSerial)


module.exports=router