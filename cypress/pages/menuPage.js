class MenuPage {

    selectorsList() {
        const selectors = {
            adminButton: ',[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
        }

        return selectors
    }

    accessAdmin() {
        cy.get(this.accessAdmin().adminButton).click()
    }

    accessPIM() {
        cy.get(this.accessPIM().pimButton).click()
    }

    accessLeave() {
        cy.get(this.accessLeave().leaveButton).click()
    }

    accessTime() {
        cy.get(this.accessTime().timeButton).click()
    }

    accessRecruitment() {
        cy.get(this.accessRecruitment().recruitmentButton).click()
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.accessPerformance().performanceButton).click()
    }

    accessDashboard() {
        cy.get(this.accessDashboard().dashboardButton).click()
    }

    accessDirectory() {
        cy.get(this.accessDirectory().directoryButton).click()
    }

    accessMaintenance() {
        cy.get(this.accessMaintenance().maintenanceButton).click()
    }

    accessClaim() {
        cy.get(this.accessClaim().claimButton).click()
    }

    accessBuzz() {
        cy.get(this.accessBuzz().buzzButton).click()
    }
}

export default MenuPage