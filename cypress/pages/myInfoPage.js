class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            genericCombobox: '.oxd-select-text',
            genericComboboxItem: '[role="listbox"] > *', // > * filhos diretos do dropdown
            dateCloseButton: '.--close',
            submitButton: '[type="submit"]',
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().genericComboboxItem).eq(26).click() // Nationality - Brazilian
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().genericComboboxItem).eq(2).click()  // Marital Status - Married
        cy.get(this.selectorsList().genericCombobox).eq(2).click()
        cy.get(this.selectorsList().genericComboboxItem).eq(3).click()  // Blood Type - B+
    }
}

export default MyInfoPage