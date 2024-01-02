import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
      <ListGroup className="mt-2">

    {
      tareas.map((elementoTarea)=><ItemTarea>Tarea 1</ItemTarea>)
    }

      

    </ListGroup>
  );
};

export default ListaTareas;