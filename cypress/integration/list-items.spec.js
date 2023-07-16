describe("List items", () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })

    it.only("Properly displays completed items", () => {
        cy.get(".todo-list li")
          .filter(".completed")
          .should("have.length", 1)
          .find(".toggle")
          .should("be.checked")
          
        cy.contains(".todo-list li.completed", "Eggs")
    })
})