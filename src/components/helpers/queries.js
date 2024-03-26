const URI_TAREAS=import.meta.env.VITE_API_TAREAS
console.log(URI_TAREAS)

export const listarTareasAPI = async()=>{
    try {
        const respueta = await fetch(URI_TAREAS)
        const listarTareas = await respueta.json()
        return listarTareas
    } catch (error) {
        console.log(error)
    }
}

export const obtenerTareaAPI = async(req, res)=>{
    try {
        const respuesta = await fetch(`${URI_TAREAS}/${id}`);
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}

export const crearTareaAPI =async(nuevaTarea)=>{
    try {
        const respuesta = await fetch(URI_TAREAS,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({nombreTarea: nuevaTarea}),
        });
        console.log(respuesta);
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}

export const borrarTareaAPI = async(id)=>{
    try {
        const respuesta = await fetch(`${URI_TAREAS}/${id}`, {
          method: "DELETE",
        });
        console.log(respuesta);
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}