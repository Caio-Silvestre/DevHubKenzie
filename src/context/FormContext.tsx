import { createContext, ReactNode } from "react";
import {  toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../pages/service/api";
import { FieldValues } from "react-hook-form";

interface FormContextProps {
  onSubmitFunction: (data: FieldValues) => void;
  nav: NavigateFunction;
}

interface FormProviderProps {
  children: ReactNode;
}

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

const FormProvider = ({ children }: FormProviderProps) => {
  const nav = useNavigate();
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
  const onSubmitFunction = (data: FieldValues) => {
    api
      .post("/users", data)
      .then((response) => nav("/"))
      .catch((error) =>
        notify("Revise os campos de cadastro. E-mail ou nome já cadastrado")
      );
  };
  return (
    <FormContext.Provider value={{ onSubmitFunction, nav }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
