/// <reference types="cypress" />

describe('home', () => {
    beforeEach(() => {
        cy.visit('https://book.usesession.com/i/5DeS0FGAL');
    });

    it('should have session button', () => {
        cy.task('log', 'Testing website: https://book.usesession.com/i/5DeS0FGAL')

        cy.get('.session-item-button button')
            .should('be.visible')
            .click();
        
        let month = 'unknown';

        // make sure month is visible and set month
        cy.get('.items-center.h-12 .tracking-normal').should('be.visible').then((x) => {
            month = x.text();
        });

        // check to see if a clickable button is available
        cy.get('.px-5.pb-5 button').each((el) => {
            expect(el.hasClass('text-gray-300'), `Testing button with text: ${el.text()} for ${month}`).to.be.true;
        });

        // check next month
        cy.get('.items-center.h-12 button.justify-end')
            .should('be.visible')
            .click();

        // make sure month is visible and set month
        cy.get('.items-center.h-12 .tracking-normal').should('be.visible').then((x) => {
            month = x.text();
        });

        // check to see if a clickable button is available
        cy.get('.px-5.pb-5 button').each((el) => {
            expect(el.hasClass('text-gray-300'), `Testing button with text: ${el.text()} for ${month}`).to.be.true;
        });
    });
});