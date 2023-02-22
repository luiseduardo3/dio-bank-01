import { createContext } from "react";

interface IAppContext {
  user: {
    name: string;
    senha: string;
  };
}

interface TChildren {
  children: React.ReactNode;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: TChildren) => {
  const user = {
    name: "Edu",
    senha: "23234",
  };
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
