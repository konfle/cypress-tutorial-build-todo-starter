describe("List items", () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })

    it("Properly displays completed items", () => {
        cy.get(".todo-list li")
          .filter(".completed")
          .should("have.length", 1)
          .find(".toggle")
          .should("be.checked")
          
        cy.contains(".todo-list li.completed", "Eggs")
    })

    it("Shows reaming todos in the footer", () => {
        cy.get(".todo-count")
          .should("contain", 3)
    })

    it("Removes a todo", () => {
        cy.route({
          url: "/api/todos/1",
          method: "DELETE",
          status: 200,
          response: {}
        })

        cy.get(".todo-list li")
          .as("list")
        
        cy.get("@list")
          .first()
          .find(".destroy")
          .invoke("show", )
          .click()
        
          /* 
          The not.contains assertion is replaced with a callback function
          inside the should assertion. The callback function uses Chai assertions
          (expect) to check for the absence of the "Milk" text within the $list element.
          */

          cy.get("@list")
            .should(($list) => {
            expect($list).to.have.length(3);
            expect($list.text()).to.not.contain("Milk");
          })
    })
})