import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { Modal } from "./style";

interface ModalEditTechProps {
  idTech: string;
  modalVisi: boolean;
  setModalVisi: React.Dispatch<React.SetStateAction<boolean>>;
}
function ModalEditTech({
  modalVisi,
  setModalVisi,
  idTech,
}: ModalEditTechProps) {
  const { editTech, deleteTech } = useContext(HomeContext);
  const formSchema = yup.object().shape({
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
      index={!modalVisi ? "-1 " : "1000"}
    >
      <form
        className="form"
        onSubmit={(event) => {
          handleSubmit((data) => {
            editTech(data, idTech);
          });
          event.preventDefault();
          modalOnOff(event);
        }}
      >
        <header>
          <h1>Editar Tech</h1>
          <button onClick={(event) => modalOnOff(event)} className="closeModal">
            X
          </button>
        </header>

        <label>
          Editar Status:
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
        <button type="submit">Editar</button>
        <button
          style={{ background: "red", border: "none" }}
          onClick={(event) => {
            event.preventDefault();
            deleteTech(idTech);
            modalOnOff(event);
          }}
        >
          Apagar
        </button>
      </form>
    </Modal>
  );
}

export default ModalEditTech;
