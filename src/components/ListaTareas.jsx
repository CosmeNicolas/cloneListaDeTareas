import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, setTareas }) => {
  console.log(tareas);

  return (
    <ListGroup className="mt-2 ">
       <ItemTarea

       tareas={tareas}
       setTareas={setTareas}
       />
    </ListGroup>
  );
};

export default ListaTareas;
