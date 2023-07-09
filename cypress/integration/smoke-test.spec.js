describe("The application loads", () => {
    beforeEach(() => {
      cy.seedAndVisit([])
  })

    it("navigates to the / route", () => {
    });

    it("has the basic Todo list container", () => {
      cy.get(".todo-list").should("exist");
    });
});
