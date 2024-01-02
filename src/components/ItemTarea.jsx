import { ListGroup, Button} from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
   <ListGroup.Item className="mt-1 d-flex justify-content-between">
    {nombreTarea}
    <Button variant="dark" className="mx-2 letras"
    onClick={()=>borrarTarea(nombreTarea)}>
      Borrar
    </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;