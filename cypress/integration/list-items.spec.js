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

    it.only("Shows reaming todos in the footer", () => {
        cy.get(".todo-count")
          .should("contain", 3)
    })
})