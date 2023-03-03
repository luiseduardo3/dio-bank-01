import { createContext, useState } from "react";

interface IAppContext {
  user: {
    name: string;
    senha: string;
  };
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

interface TChildren {
  children: React.ReactNode;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: TChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const user = {
    name: "Edu",
    senha: "23234",
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
