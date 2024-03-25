import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import Swal from 'sweetalert2'
import { listarTareasAPI } from "./helpers/queries";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

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
  } catch (error) {
    console.log(error)
  }
 }
 
 /*  const borrarTarea = (nombreTarea) =>{
    const copiarTareas = tareas.filter((tarea)=> tarea !== nombreTarea);
    setTareas(copiarTareas)
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Tarea Borrada con éxito',
    })
  } */

  const handleSubmit = (e) => {
    e.preventDefault()

    if(tarea.trim() === ''){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa una tarea',
      });
      return
    }

    setTareas([...tareas,tarea])
    setTarea('')

    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Tarea agregada con éxito',
    })
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
      <Button type="submit" variant="danger" className="letras mt-1" >
        Crear 
      </Button>
      <ListaTareas tareas={tareas}  /* borrarTarea={borrarTarea} *//>
    </Form>
    </>
  );
};

export default FormularioTareas;