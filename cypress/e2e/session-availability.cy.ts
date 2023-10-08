/// <reference types="cypress" />

describe('home', () => {
    beforeEach(() => {
        cy.visit('https://book.usesession.com/i/5DeS0FGAL');
    });

    it('should have session button', () => {
        cy.get('.session-item-button button')
            .should('be.visible')
            .click();

        cy.get('.px-5.pb-5 button').each((el) => {
            expect(el.hasClass('text-gray-300')).to.be.true;
        });
    });
});