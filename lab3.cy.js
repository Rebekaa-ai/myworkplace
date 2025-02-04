describe("Test loop,checkbox and dropdown" , ()=>{  
    it('Test loop', () =>{ 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
        cy.get('.search-keyword').type("ca") 
 
      cy.get(".products") 
        .find(".product") 
        .eq(0) 
        .contains("ADD TO CART") 
        .click() 
 
        cy.get(".products") 
        .find(".product") 
        .each(($el, $index, $list)=>{ 
 
        }) 
}); 
}) 
 
it.only('test checkbox and dropdown', () => { 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
 
    cy.get('#checkBoxOption1') 
      .check() 
      .should() 
      .and('have.value', 'option1') 
 
    cy.get('#checkBoxOption1') 
        .uncheck() 
        .should('be.not.checked') 
 
    cy.get('#dropdown-class-example') 
      .select('options3') 
      .should('have.value','options3')   
 
    cy.get('#autocomplete').type('eth') 
    cy.get('.ui-menu-item div').each(($el, $index, $list)=>{ 
 
        const ctr = $el.text() 
        if(ctr ==='Netherlands'){ 
            cy.wait(''); 
            $el.click() 
        } 
    }) 
})