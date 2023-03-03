import { Login } from "./login";

describe("Login", () => {
  const mockEmail = "luis@gmail.com";

  it("deve exibir um alert com boas vindas caso o e-mail seja válido", async () => {
    const response = await Login(mockEmail);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o e-mail seja inválido", async () => {
    const response = await Login("email@invalido.com");
    expect(response).toBeFalsy();
  });
});
