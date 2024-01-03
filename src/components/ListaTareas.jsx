import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas, borrarTarea}) => {
  return (
      <ListGroup className="mt-2">
    {
      tareas.map((elementoTarea, posicionTarea)=>
      <ItemTarea 
      key={posicionTarea} 
      nombreTarea={elementoTarea}
      borrarTarea={borrarTarea}>
        Tarea 1
      </ItemTarea>)
    }
    </ListGroup>
  );
};

export default ListaTareas;