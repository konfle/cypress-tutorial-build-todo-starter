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

    it.only("Marks an incomplete item complete", () => {
      cy.fixture("todos")
        .then(todos => {
          // _.head to take a first item of array
          const target = Cypress._.head(todos)
          cy.route(
            "PUT",
            "/api/todos/${targed.id}",
            // _.merge to return updated response
            Cypress._.merge(target, {isCompleted: true})
          )
        })

      cy.get(".todo-list li")
        .first()
        .as("first-todo")

      cy.get("@first-todo")
        .find(".toggle")
        .click()
        .should("be.checked")

      cy.get("@first-todo")
        .should("have.class", "completed")

      cy.get(".todo-count")
        .should("contain", 2)
    })
})