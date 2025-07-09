# Cypress Setup

1. Initialize npm: `npm init -y`
2. Install Cypress: `npm install cypress --save-dev`
3. Setup Cypress folder structure and run Cypress app: `npx cypress open`
4. Select E2E testing and go with default selection choices
5. Update baseUrl in `cypress.config.js` as needed
6. Create `e2e` folder for test files
7. Create test files ending in `.cy.js`

Note: Remember to run Liver Server for local tests.


Include beforeeach so it runs before it statements, otherwise it will only run it once
