// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import BasePage from '../pages/basePage.js'

/**
 * @class LoginPage
 * @description Page Object da página de Login.
 * Responsável por acessar, preencher e validar o formulário de login.
 * Estende BasePage para herdar seletores e funções comuns.
 */
class LoginPage extends BasePage {

  // ─── SELECTORS ──────────────────────────────────────────────────────────────
  selectorsList() {
    const selectors = {
      ...super.selectorsList(),
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      wrongCredentialAlert: '[role="alert"]',
    }
    return selectors
  }

  // ─── METHODS ────────────────────────────────────────────────────────────────
  accessLoginPage() {
    cy.visit('/auth/login')
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    this.clickSubmit() // ← herdado do BasePage
  }

  checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialAlert)
  }

}

export default LoginPage