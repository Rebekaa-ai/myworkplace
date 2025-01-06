describe('Test Alert Table and Mouse hover',() =>{ 
 
 
    it('Test Alert',()=>{ 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
     cy.get ('#alertbtn').click() 
       cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{ 
            const txt =$el.text() 
           if(txt.includes("Receptionist")){ 
                cy.get("tr td:nth-child(2)").eq($index).next().then(function(price){ 
                    const p= price.text() 
         cy.log(p) 
          }) 
                cy.get("tr td:nth-child(2)").eq($index).prev().then(function(price){ 
                   const p= price.text() 
                    cy.log(p) 
                }) 
                /*if(txt.includes("Jack")){ 
                    cy.get('.tableFixHead > #product > tbody > :nth-child(5) > :nth-child(1)') 
                 
             
                    cy.get('.tableFixHead > #product > tbody > :nth-child(5) > :nth-child(2)') 
                    cy.get('.tableFixHead > #product > tbody > :nth-child(5) > :nth-child(3)') 
                        const p= price.text() 
                       cy.log(p) */ 
            } 
 
        }) 
        cy.on("", ()=>{ 
 
        }) 
    it('Test Table', () =>{ 
 
    }) 
   it('Test Mouse hover', ()=>{ 
 
   }) 
 
//cy.get('.tableFixHead > #product > tbody > :nth-child(4) > :nth-child(2)') 
//cy.get('.tableFixHead > #product > tbody > :nth-child(4) > :nth-child(2)') 
it.only('Test Table', () => { 
    cy.vistit('https://rahulshettyacademy.com/AutomationPractice/') 
    cy.get("tr td:nth-child(2)").each(($el, $index, $list) =>{ 
        const txt =$el.text() 
        if(txt.includes("Receptionist")){ 
            cy.get("tr td:nth-child(2)").eq($index).next().then(function(City){ 
                const p= City.text() // except (p).to.equals(25) 
                cy.log(p) 
            }) 
            cy.get("tr td:nth-child(2)").eq($index),prev().then(function(name){ 
 
            }) 
 
        } 
    }) 
}) 
    }) 
})