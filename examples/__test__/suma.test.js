const { suma } = require("../suma");

describe("suma", () => {
  it("sumar 2 numeros", () => {
    const resultado = suma(1, 1);

    expect(resultado).toBe(2);
  });
});
