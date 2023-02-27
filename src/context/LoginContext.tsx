import { createContext, ReactNode} from "react";
import axios from "axios";
import { useState } from "react";
import {  toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";

interface LoginContextProps {
  onSubmitFunction: (data: FieldValues) => void;
  userToken: string;
  nav: NavigateFunction;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [userToken, setUserToken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);

  const nav = useNavigate();

  function isAuth(state: boolean) {
    if (!state) {
      nav("/");
    } else {
      nav("/home");
    }
  }
  const notify = (message: string) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  function onSubmitFunction(data: FieldValues) {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("userToken", response.data.token);
        setUserToken(response.data.token);
        setAuth(true);
        isAuth(auth);
      })
      .catch((error) => notify("E-mail ou senha inválidos"));
  }

  return (
    <LoginContext.Provider value={{ onSubmitFunction, nav, userToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
