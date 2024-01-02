import { ListGroup, Button} from "react-bootstrap";

const ItemTarea = () => {
  return (
   <ListGroup.Item className="mt-1 d-flex justify-content-between">
    Tarea 1
    <Button variant="dark" className="mx-2 letras">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;