// ─── IMPORTS ──────────────────────────────────────────────────────────────────

// ─── CUSTOM COMMANDS ──────────────────────────────────────────────────────────

/**
 * @command logOptions
 * @description Exibe no log todas as opções de um dropdown com seu índice e texto.
 * @uso Coloque ANTES do bloco de teste do combobox para identificar o índice correto.
 * @exemplo
 *   cy.get(selectorsList.genericCombobox).eq(2).click()
 *   cy.logOptions(selectorsList.genericComboboxItem) // debug
 *
 *   // Após identificar o índice, substitua por:
 *   cy.get(selectorsList.genericCombobox).eq(2).click()
 *   cy.get(selectorsList.genericComboboxItem).eq(3).click() // Blood Type → B+
 */
Cypress.Commands.add('logOptions', (selector) => {
  cy.get(selector).then(items => {
    items.each((index, el) => {
      cy.log(`${index} → ${el.innerText}`)
    })
  })
})