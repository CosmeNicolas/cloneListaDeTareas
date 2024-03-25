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