import Table from 'react-bootstrap/Table';
import Header from '../Header';
import { Footer } from '../Footer';
import { json, Link,NavLink } from 'react-router-dom';
import { URL_productos } from '../../helpers/queries';
   import { useEffect, useState } from 'react';
 export const Administrador=()=>{
     const [leerapi,setleerapi]=useState([])

   const Api= async ()=>{
      try{
         const api=await fetch(URL_productos)
         console.log(api)
         if(api.status===200){
            let consumir=await api.json()
            console.log(consumir)
            setleerapi(consumir)
         }

      }catch{
         alert("error")
      }
        

   }

   useEffect(()=>{
   Api()
      
   },[])

     console.log(leerapi)
    return(
   
     <>
     <Header></Header>
     <h1 className='text-center my-3'>Administre sus Libros</h1>
     <Link className='btn btn-primary ms-3' to="/agregar">Agregar</Link>
     <Table className='container'>
     <thead>
        <tr>
          <th>id</th>
          <th>Libro</th>
       
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
      
                
                  {
                     leerapi.map((element)=>
                        <tr key={element.id}>
                     <td colSpan={1}>1</td>
                     <td>{element.titulo}</td>
                     <td>
                      <button className=" btn btn-danger" >Borrar</button>
                      <button className='btn btn-primary'>Editar</button>
                      
                      </td>
                  </tr>
                     )
                  }
                  <tr>
                   <td colSpan={1}>1</td>
                   <td>Las mil y una Noche</td>
                   <td>
                    <button className=" btn btn-danger" >Borrar</button>
                    <button className='btn btn-primary'>Editar</button>
                    
                    </td>
                </tr>
      
       
      </tbody>
    </Table>
    <Footer></Footer>
        
       </>
    )
}