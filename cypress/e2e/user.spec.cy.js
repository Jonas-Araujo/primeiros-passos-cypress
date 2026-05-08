// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

// ─── TEST CASES ───────────────────────────────────────────────────────────────
describe('Orange HRM | Authentication', () => {
  
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.first(), chance.last(), chance.twitter())
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId', 'DriverNumber', '2026-08-05', '12345', '123456')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})