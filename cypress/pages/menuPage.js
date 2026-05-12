// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import BasePage from '../pages/basePage.js'

/**
 * @class MenuPage
 * @description Page Object do menu de navegação lateral.
 * Responsável por acessar os módulos do sistema via menu.
 * Estende BasePage para herdar seletores e funções comuns.
 */
class MenuPage extends BasePage {

  // ─── SELECTORS ──────────────────────────────────────────────────────────────
  selectorsList() {
    const selectors = {
      ...super.selectorsList(),
      adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
      pimButton: '[href="/web/index.php/pim/viewPimModule"]',
      leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
      timeButton: '[href="/web/index.php/time/viewTimeModule"]',
      recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
      myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
      performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
      dashboardButton: '[href="/web/index.php/dashboard/index"]',
      directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
      maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
      claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
      buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
    }
    return selectors
  }

  // ─── METHODS ────────────────────────────────────────────────────────────────
  accessAdmin()       { cy.get(this.selectorsList().adminButton).click() }
  accessPIM()         { cy.get(this.selectorsList().pimButton).click() }
  accessLeave()       { cy.get(this.selectorsList().leaveButton).click() }
  accessTime()        { cy.get(this.selectorsList().timeButton).click() }
  accessRecruitment() { cy.get(this.selectorsList().recruitmentButton).click() }
  accessMyInfo()      { cy.get(this.selectorsList().myInfoButton).click() }
  accessPerformance() { cy.get(this.selectorsList().performanceButton).click() }
  accessDashboard()   { cy.get(this.selectorsList().dashboardButton).click() }
  accessDirectory()   { cy.get(this.selectorsList().directoryButton).click() }
  accessMaintenance() { cy.get(this.selectorsList().maintenanceButton).click() }
  accessClaim()       { cy.get(this.selectorsList().claimButton).click() }
  accessBuzz()        { cy.get(this.selectorsList().buzzButton).click() }

}

export default MenuPage