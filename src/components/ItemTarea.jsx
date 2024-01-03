import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTarea,editarTarea }) => {
  return (
    <ListGroup.Item className="mt-1 d-flex justify-content-around">
      {nombreTarea}
      <Button variant="dark" className="mx-2 letras"
        onClick={() => borrarTarea(nombreTarea)}>
        Borrar
      </Button>
      <Button variant="warning" className="mx-2 letras"
        onClick={() => editarTarea(nombreTarea)}>
        Editar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;