class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active', // Porque não temos um outro elemento para selecionar especificamente
            dateField: '[placeholder="mm-dd-yyyy"]',
            genericComboBox: '.oxd-select-text--arrow',
            secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
            thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
            dateCloseButton: '.--close',
            submitButton: '.orangehrm-left-space',
        }

        return selectors
    }
    
    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, expiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true }) // Force true "Atravessar outros elementos"
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true }) // Forçar click independente do elemento que estiver na frente
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage