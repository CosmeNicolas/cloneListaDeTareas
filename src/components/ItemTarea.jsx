import { ListGroup, Button } from "react-bootstrap";
import { borrarTareaAPI, listarTareasAPI } from "./helpers/queries.js";
import Swal from "sweetalert2";


const ItemTarea = ({ tareas, setTareas}) => {
  const borrarTarea = async (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la Tarea?",
      text: "No puedes revertir este proceso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonTarea: "#3085d6",
      cancelButtonTarea: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(id);
        if (respuesta.status === 200) {
          const tareaActualizados = await listarTareasAPI();
          setTareas(tareaActualizados);
          Swal.fire({
            title: "Tarea eliminado",
            text: `La Tarea fue eliminado correctamente`,
            icon: "success",
          });
          setTareas(tareaActualizados);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El Tarea no fue eliminado, intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <>
      {tareas.map((tarea) => (
        <ListGroup.Item key={tarea._id} className="my-2 rounded-2 letras-tareas d-flex justify-content-between">
          {tarea.nombreTarea}
          <Button 
            onClick={()=>borrarTarea(tarea._id)}
           variant="danger" className="mx-2 letras">
            Borrar
          </Button>
        </ListGroup.Item>
      ))}
    </>
  );
};

export default ItemTarea;