Object.defineProperty(process, "env", {
  value: Cypress.env(),
});

export const env = process.env;
