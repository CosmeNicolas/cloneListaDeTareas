import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas, borrarTarea, editarTarea}) => {
  return (
      <ListGroup className="mt-2">
    {
      tareas.map((elementoTarea, posicionTarea)=>
      <ItemTarea 
      key={posicionTarea} 
      nombreTarea={elementoTarea}
      borrarTarea={borrarTarea}
      editarTarea={editarTarea}>
        Tarea 1
      </ItemTarea>)
    }
    </ListGroup>
  );
};

export default ListaTareas;