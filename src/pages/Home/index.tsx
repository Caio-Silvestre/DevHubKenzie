import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { HomeDiv } from "./style";
import { TehcList } from "./style";
import { SquareX } from "./style";

import ModalNewTech from "../ModalNewTech";
import ModalEditTech from "../ModalEditTEch";

import { BsPlusSquare } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { useState } from "react";

function Home() {
  const nav = useNavigate();
  const [modalVisi, setModalVisi] = useState<boolean>(false);
  const [modalEditVisi, setModalEditVisi] = useState<boolean>(false);
  const [idTech, setIdTech] = useState<string>("");
  const { userData, loading, userTech } = useContext(HomeContext);

  // useEffect(() => {
  //   function loadTech() {
  //     userData.techs?.map((tech, index) => setUserTechs([...userTechs, tech]));
  //   }
  //   loadTech();
  // }, []);
  if (loading) {
    return <div>Carregando Página</div>;
  }

  function logout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    localStorage.clear();
    nav("/");
  }
  // console.log(userTech);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HomeDiv>
        <header>
          <img src={logo} alt="Logo" />
          <button onClick={(event) => logout(event)}>Logout</button>
        </header>
        <main>
          <div className="userData">
            <h2>Olá {userData.name}</h2>

            <p>{userData.course_module}</p>
          </div>
          <div className="techsDiv">
            <header>
              <h4 className="tehcTitle">Tecnologias</h4>
              <button
                className="newTechBtn"
                onClick={() => {
                  setModalVisi(true);
                }}
              >
                <SquareX />
              </button>
            </header>
            <TehcList>
              {userTech?.map((techs, index) => {
                return (
                  <div key={index} className="techs">
                    <p>{techs.title}</p>
                    <div>
                      <span>{techs.status}</span>
                      <p
                        onClick={(event) => {
                          event.preventDefault();
                          setModalEditVisi(true);
                          setIdTech(techs.id);
                        }}
                        id={techs.id}
                      >
                        ...
                      </p>
                    </div>
                  </div>
                );
              })}
            </TehcList>
          </div>
        </main>
        <ModalNewTech modalVisi={modalVisi} setModalVisi={setModalVisi} />
        <ModalEditTech
          modalVisi={modalEditVisi}
          setModalVisi={setModalEditVisi}
          idTech={idTech}
        />
      </HomeDiv>
    </motion.div>
  );
}

export default Home;
