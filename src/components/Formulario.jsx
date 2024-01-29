import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Introduzca su nombre" minLength={3} maxLength={20} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido"> 
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Introduzca su apellido" minLength={3} maxLength={25} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Introduzca su número de DNI" min={11111111} max={99999999} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="introduzca su corro electrónico" min={10} max={50} required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
