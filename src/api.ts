const conta = {
  email: "luis@gmail.com",
  password: 123456,
  name: "Luis Eduardo",
  balance: 2000.0,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
