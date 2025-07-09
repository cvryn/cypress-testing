describe("my first test", () => {
    it("visits example.com", () => {
        cy.visit("https://example.com");
        cy.contains("Example Domain").should("be.visible");
    });
});
