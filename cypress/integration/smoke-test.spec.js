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
