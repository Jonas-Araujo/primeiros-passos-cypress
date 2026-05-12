// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import BasePage from '../pages/basePage.js'

/**
 * @class DashboardPage
 * @description Page Object da página Dashboard.
 * Responsável por verificar se o login foi realizado com sucesso.
 * Estende BasePage para herdar seletores e funções comuns.
 */
class DashboardPage extends BasePage {

  // ─── SELECTORS ──────────────────────────────────────────────────────────────
  selectorsList() {
    const selectors = {
      ...super.selectorsList(),
      dashboardGrid: '.orangehrm-dashboard-grid',
    }
    return selectors
  }

  // ─── METHODS ────────────────────────────────────────────────────────────────
  checkDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashboardGrid).should('be.visible')
  }

}

export default DashboardPage