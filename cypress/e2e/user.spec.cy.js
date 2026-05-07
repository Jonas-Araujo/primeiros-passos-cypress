  // ─── IMPORTS ──────────────────────────────────────────────────────────────────
import userData from '../fixtures/users/userData.json'

describe('Orange HRM | Authentication', () => {

  // ─── SELECTORS ────────────────────────────────────────────────────────────────
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]',

    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]', // Aguardando ser utilizado
    dateCloseButton: '.--close',
    submitButton: '[type="submit"]',
  }

  // ─── TEST CASES ───────────────────────────────────────────────────────────────

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click().wait(5000)
    cy.get(selectorsList.firstNameField).clear().type('FName')
    cy.get(selectorsList.middleNameField).clear().type('MDName')
    cy.get(selectorsList.lastNameField).clear().type('LName')
    cy.get(selectorsList.genericField).eq(3).clear().type('NName')    
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('123')
    cy.get(selectorsList.genericField).eq(7).clear().type('2026-07-05')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('1234')
    cy.get(selectorsList.genericField).eq(9).clear().type('12345')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})