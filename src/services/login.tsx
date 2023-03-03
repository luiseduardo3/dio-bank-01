import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

export const Login = async (email: string): Promise<boolean> => {
  const data: any = await api;

  if (email !== data.email) {
    return false;
  }

  return true;
};
