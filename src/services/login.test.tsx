import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "luis@gmail.com";

  it("deve exibir um alert com boas vindas caso o e-mail seja válido", async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`);
  });

  it("Não deve exibir a mensagem de boas vindas sem o email", () => {
    login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo");
  });

  it("Deve exibir um erro caso o e-mail seja inválido", async () => {
    await login("email@invalido.com");
    expect(mockAlert).toHaveBeenCalledWith("Email inválido");
  });
});
