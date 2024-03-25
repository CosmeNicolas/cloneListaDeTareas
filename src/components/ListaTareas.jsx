import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  console.log(tareas);
  if (Array.isArray(tareas)) {
    return (
      <ListGroup className="mt-2">
        {
          tareas.map((tarea)=>(
          <ItemTarea
            key={tarea._id}
            tarea={tarea}
            nombre={tarea.nombreTarea}
            /* borrarTarea={borrarTarea} */
          >
            
           
          </ItemTarea>
          ))
        }
      </ListGroup>
    );
  }

};

export default ListaTareas;