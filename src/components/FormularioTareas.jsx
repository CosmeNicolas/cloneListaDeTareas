import { Form, Button } from "react-bootstrap";


const FormularioTareas = () => {
  return (
    <>
    <Form className="text-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Tareas 📝</Form.Label>
        <Form.Control 
        type="text"
        placeholder="ingresar Tarea: ej Tarea 1"
        minLength={3}
        maxLength={50}
        />
      </Form.Group>
      <Button variant="danger" className="letras mt-1" >
        Crear 
      </Button>
    </Form>
    </>
  );
};

export default FormularioTareas;