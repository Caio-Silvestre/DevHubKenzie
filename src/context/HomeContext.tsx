import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { toast } from "react-toastify";
import { api } from "../pages/service/api";

import { FieldValues } from "react-hook-form";

interface HomeContextProps {
  loading: boolean;
  userData: UserData;
  userTech: Tech[];
  newTech: (data: FieldValues) => void;
  editTech: (data: FieldValues, id: string) => void;
  deleteTech: (id: string) => void;
}

interface HomeProviderProps {
  children: ReactNode;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: Tech[];
  works: object[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}
interface Tech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}
export const HomeContext = createContext<HomeContextProps>(
  {} as HomeContextProps
);

const HomeProvider = ({ children }: HomeProviderProps) => {
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
  const nav = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [userTech, setUserTech] = useState<Tech[]>([] as Tech[]);
  const userToken = localStorage.getItem("userToken");

  function newTech(data: FieldValues) {
    const dataNewTech = {
      title: data.name_tech,
      status: data.status_tech,
    };
    api
      .post(`/users/techs`, dataNewTech)
      .then((response) => {
        setUserTech((oldData) => [...oldData, response.data]);
        notify("Tecnologia criada com Sucesso");
      })
      .catch((err) => notify("Erro ao criar tecnologia, tente novamente"));
  }

  function editTech(data: FieldValues, id: string) {
    // const dataEditTech = {
    //   status: data.status_tech,
    // };
    console.log(data);
    api
      .put(`/users/techs/${id}`, data)
      .then((response) => {
        console.log(response);
        setUserTech((oldData) => [...oldData, response.data]);
        notify("Tecnologia editada com Sucesso");
      })
      .catch((err) => notify("Erro ao editar tecnologia, tente novamente"));
  }
  function deleteTech(id: string) {
    const userTechFilter = userTech.filter((tech) => {
      return tech.id !== id;
    });
    api
      .delete(`/users/techs/${id}`)
      .then((response) => {
        console.log(response);
        setUserTech(userTechFilter);
        notify("Tecnologia editada com Sucesso");
      })
      .catch((err) => notify("Erro ao editar tecnologia, tente novamente"));
  }

  useEffect(() => {
    async function loadUser() {
      await api
        .get(`/profile`)
        .then((response) => {
          setUserData(response.data);
          setUserTech(response.data.techs);
        })
        .catch((err) => {
          nav("/");
          console.log("Error ==> " + err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (userToken) {
      loadUser();
    }
  }, []);

  return (
    <HomeContext.Provider
      value={{ userData, newTech, loading, editTech, deleteTech, userTech }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
