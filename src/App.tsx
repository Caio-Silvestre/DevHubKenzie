import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginProvider from "./context/LoginContext";
import FormProvider from "./context/FormContext";
import HomeProvider from "./context/HomeContext";

function CustomHome() {
  return <Home />;
}
function App() {
  return (
    <FormProvider>
      <LoginProvider>
        <HomeProvider>
          <Routes>
            <Route path={"/home"} element={<CustomHome />} />
            <Route path={"/form"} element={<Form />} />
            <Route path={"/"} element={<Login />} />
            <Route path={"*"} element={<Login />} />
          </Routes>
        </HomeProvider>
      </LoginProvider>
    </FormProvider>
  );
}

export default App;
