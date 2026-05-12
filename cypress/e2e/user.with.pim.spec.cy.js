// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import PimPage from '../pages/pimPage.js'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const pimPage = new PimPage()

// ─── TEST CASES ───────────────────────────────────────────────────────────────
describe('Orange HRM | Authentication', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()

    menuPage.accessPIM()
    pimPage.checkPimPage()
    pimPage.accessOptionalFields()
    pimPage.showNickName()
    pimPage.showSsnNumber()
    pimPage.showSinNumber()
    pimPage.clickSubmit() // ← herdado do BasePage

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.first(), chance.last(), chance.twitter())
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId', 'DriverNumber', '2026-08-05', '12345', '123456')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})