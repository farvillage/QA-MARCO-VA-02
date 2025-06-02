/// <reference types="cypress" />

describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('https://tilapia-store-sigma.vercel.app/products.html'); 
    cy.clearLocalStorage();
  });

  it('Adicionar um produto', () => {
    cy.get('.add-to-cart').first().click(); 

    cy.get('#cart-items li')
      .should('have.length', 1)
      .and('contain', 'x1'); 

    cy.get('#cart-total')
      .should('not.contain', 'R$0,00');
  });

  it('Adicionar vários produtos', () => {
    cy.get('.add-to-cart').eq(2).click(); 
    cy.get('.add-to-cart').eq(2).click();
    cy.get('.add-to-cart').eq(3).click(); 

    cy.get('#cart-items li').should('have.length', 2);
    cy.get('#cart-items').should('contain', 'x2');
    cy.get('#cart-items').should('contain', 'x1');
  });
});


