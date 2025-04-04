class MenuPage {
    selectorsList () {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]', //myInfoButton
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }

        return selectors
    }

    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    accessPim() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    accessTime() {
        cy.get(thins.selectorsList().timeButton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessMyInfo() { // myInfoButton
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessDashboard() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    accessDirectory() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    accessMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }

    accessClaim() {
        cy.get(this.selectorsList().claimButton).click()
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage