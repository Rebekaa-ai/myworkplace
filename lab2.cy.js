describe("lab2", ()=>{ 
 
}) 
 
it("Locaters", ()=>{ 
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/") 
  
 
  cy.get('.search-keyword') 
   .type("ca") 
   .should('have.value','ca') 
   .and('have.length',1) 
   .and('have.attr','type','search') 
 
 
 // cy.get('.product').should('have.length',4) 
  cy.get('.product:visible').should('have.length',4) 
 
  //parent child 
  cy.get('.products').find('.product').should('have.length',4) 
 
 
  //cy.get("#name").type("Rebeka") 
  //cy.get("#inputs").type("Atnafie") 
 // cy.xpath("//input[@id='name']").type("from ") 
 // cy.get('#displayed-text') 
   
    it("Asssertion", ()=>{ 
        expect(true).to.be.true 
 
        assert.isAbove(6,1, '6 > 1' ) 
        assert.isBelow(1,6, '1 < 6' ) 
    }) 
})