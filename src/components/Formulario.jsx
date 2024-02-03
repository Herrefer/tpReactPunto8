import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  // estados de cada input del form
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDNI] = useState("");
  const [correo, setCorreo] = useState("");
  // expresiones regulares

  const expRegNombre = /^[a-zA-ZÀ-ÿ]{3,20}$/;
  const expRegApellido = /^[a-zA-ZÀ-ÿ]{3,25}$/;
  const expRegDNI = /^[0-9]{8,8}$/;
  const expRegCorreo =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //Funciones del formulario
  function verificarFormulario(e) {
    if (
      expRegNombre.test(nombre) &&
      expRegApellido.test(apellido) &&
      expRegDNI.test(dni) &&
      expRegCorreo.test(correo)
    ) {
      alert("Datos enviados correctamente");
    } else {
      alert("Por favor, verifique que los datos concuerden con lo solicitado");
    }
  }

  return (
    <div>
      <Form onSubmit={verificarFormulario}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Martin"
            minLength={3}
            maxLength={20}
            required
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          <Form.Text>Escriba primer nombre</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Mamani"
            minLength={3}
            maxLength={25}
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
            required
          />
          <Form.Text>Escriba primer apellido</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 45258654"
            min={11111111}
            max={99999999}
            onChange={(e) => setDNI(e.target.value)}
            value={dni}
            required
          ></Form.Control>
          <Form.Text>
            Escriba su DNI sin espacios ni puntos
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="nombre@empresa.com"
            min={10}
            max={50}
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
            required
          />
          <Form.Text>
            Puede usar letras y carácteres especiales
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
