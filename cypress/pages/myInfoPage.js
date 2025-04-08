class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active', // Porque não temos um outro elemento para selecionar especificamente
            dateField: '[placeholder="mm-dd-yyyy"]',
            genericComboBox: '.oxd-select-text--arrow',
            secondItemComboBox: '.oxd-select-dropdown > :nth-child(27)',
            thirdItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
            submitButton: '.orangehrm-left-space',
            dateCloseButton: '.--close',
        }

        return selectors
    }
    
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicense, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
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