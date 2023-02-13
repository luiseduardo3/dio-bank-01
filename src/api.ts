const conta = {
  email: "luis@gmail.com",
  password: 123456,
  name: "Luis Eduardo",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
