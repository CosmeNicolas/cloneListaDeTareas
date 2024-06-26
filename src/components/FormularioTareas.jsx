import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import Swal from 'sweetalert2'
import { crearTareaAPI, listarTareasAPI } from "./helpers/queries.js";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando]= useState(true)

 useEffect(() => {
  listarTareasInicio()
 }, []) 

 const listarTareasInicio = async()=>{
  try {
    const respuesta = await listarTareasAPI()
    if(respuesta.status === 200) {
      const tareasInicio = await respuesta
      setTareas(tareasInicio)
    } 
    const tareasInicio = await respuesta
    setTareas(tareasInicio)
    setCargando(false)
  } catch (error) {
    console.log(error)
  }
 }

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(tarea.trim() === ''){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa una tarea',
      });
      return
    }

    try {
      const respuesta =await crearTareaAPI(tarea)
      if (respuesta.status === 201) {
        const tareaCargadas = await listarTareasAPI();
        setTareas(tareaCargadas);
        setTarea('')
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tarea agregada con éxito',
        })
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al guardar la tarea",
      });
    }
  }

  return (
    <>
    <Form className="text-center" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Tareas 📝</Form.Label>
        <Form.Control
        name="nombreTarea" 
        type="text"
        placeholder="ingresar Tarea: ej Tarea 1"
        minLength={3}
        maxLength={50}
        onChange={(e)=>{setTarea(e.target.value)}}
        value={tarea}
        />
      </Form.Group>
      <Button type="submit" variant="dark" className="letras mt-1" >
        Crear Tarea
      </Button>
      <ListaTareas tareas={tareas}  setTareas={setTareas}/>
        {
          cargando &&
           <div className="spinner-border text-light text-center" role="status">
            <span className="visually-hidden">Cargando Tareas...</span>
           </div>
        }
    </Form>
    </>
  );
};

export default FormularioTareas;