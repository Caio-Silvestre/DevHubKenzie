import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { Modal } from "./style";

interface ModalNewTechPorps {
  modalVisi: boolean;
  setModalVisi: React.Dispatch<React.SetStateAction<boolean>>;
}
function ModalNewTech({ modalVisi, setModalVisi }: ModalNewTechPorps) {
  const { userData, newTech } = useContext(HomeContext);
  const formSchema = yup.object().shape({
    name_tech: yup.string().required("Coloque o nome da Tecnologia"),
    status_tech: yup.string().required("O campo status é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function modalOnOff(event: any) {
    event.preventDefault();
    modalVisi ? setModalVisi(false) : setModalVisi(true);
  }
  return (
    <Modal
      visi={!modalVisi ? "hidden" : "visible"}
      display={!modalVisi ? "none" : "block"}
      index={!modalVisi ? "-1" : "1000"}
    >
      <form
        className="form"
        onSubmit={(event) => {
          handleSubmit(newTech)(event).catch((error) => console.log(error));
          modalOnOff(event);
        }}
      >
        <header>
          <h1>Registrar Nova Tech</h1>
          <button onClick={(event) => modalOnOff(event)} className="closeModal">
            X
          </button>
        </header>
        <label>
          Nome:
          <input placeholder={"Nome"} {...register("name_tech")} />
          <span style={{ color: "red" }}>
            {errors.name_tech
              ? typeof errors.name_tech.message == "string"
                ? errors.name_tech.message
                : undefined
              : ""}
          </span>
        </label>

        <label>
          Selecionar Tecnologia:
          <select placeholder={"Status"} {...register("status_tech")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span style={{ color: "red" }}>
            {errors.status_tech
              ? typeof errors.status_tech.message == "string"
                ? errors.status_tech.message
                : undefined
              : ""}
          </span>
        </label>

        <button type="submit">Registrar Tech</button>
      </form>
    </Modal>
  );
}

export default ModalNewTech;
