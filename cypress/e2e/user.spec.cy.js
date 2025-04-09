import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage() // objeto da classe
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first({ gender: "Male" }), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({ max: 9999999999 })
    ,chance.natural({ max: 99999 }),chance.cpf(),chance.date({year: chance.integer({min: new Date().getFullYear(), max: new Date().getFullYear() + 8})}).toISOString().slice(0, 10))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})