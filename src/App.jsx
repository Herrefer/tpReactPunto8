import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TituloFormulario from "./components/TituloFormulario";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
        <TituloFormulario></TituloFormulario>
        <Container>
          <Formulario></Formulario>
        </Container>
    </>
  );
}

export default App;
