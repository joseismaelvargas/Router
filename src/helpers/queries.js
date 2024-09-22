export const URL_productos=import.meta.env.VITE_API_PRODUCTOS
//Solicitude Post
export const crearProductoApi=async(producto)=>{
    try{
     const respuesta=await fetch(URL_productos,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(producto)
     })
     return respuesta
    }catch(error){
    alert("Error al crear")
    return false
    }
}