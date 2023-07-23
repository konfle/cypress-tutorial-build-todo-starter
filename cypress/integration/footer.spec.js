describe("Footer", () => {
    context("With a single todo", () => {
        it("Displays a singular todo in count", () => {
            cy.seedAndVisit([{id: 1, 
                              name:"Buy milk", 
                              isComplete: false}])
            cy.get(".todo-count")
              .should("contain", "1 todo left")
        })
    })

    context("With multiple todos", () => {
        beforeEach(() => {
            cy.seedAndVisit()
        })

        it("Dispalys plural todos in count", () => {
            cy.get(".todo-count")
              .should("contain", "3 todos left")
        })
    })
})