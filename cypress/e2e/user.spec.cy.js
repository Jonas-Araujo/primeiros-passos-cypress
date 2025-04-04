import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage() // objeto da classe
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active', // Porque não temos um outro elemento para selecionar especificamente
    dateField: '[placeholder="mm-dd-yyyy"]',
    genericComboBox: '.oxd-select-text--arrow',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(27)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
    submitButton: '.orangehrm-left-space',
    dateCloseButton: '.--close',
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLNIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2015-02-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true }) // Forçar click independente do elemento que estiver na frente
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close').click()

    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true }) // Force true "Atravessar outros elementos"
    cy.get(selectorsList.thirdItemComboBox).click()
  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})