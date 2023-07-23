describe("The application loads", () => {
    beforeEach(() => {
      cy.seedAndVisit([])
  })

    it("Navigates to the / route", () => {
    });

    it("Has the basic Todo list container", () => {
      cy.get(".todo-list").should("exist");
    });
});

describe("Smoke tests", () => {
  beforeEach(() => {
    cy.request("GET", "/api/todos")
      .its("body")
      .each(todo => cy.request("DELETE", `/api/todos/${todo.id}`))
  })

  context("With no todos", () => {
    it.only("Saves new todos", () => {
      cy.visit("/")
      cy.focused()
        .type("Buy milk{enter}")

      cy.get(".todo-list li")
        .should("have.length", 1)
    })
  })
})