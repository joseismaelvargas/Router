import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from "react-hook-form"
import Header from '../Header';
import { Footer } from '../Footer';
import { useState } from 'react';
import { crearProductoApi } from '../../helpers/queries';
import { URL_productos } from '../../helpers/queries';
export const AgregarProduct=()=>{
  const { register, handleSubmit ,formState:{errors},reset} = useForm();
  const [libros,setlibros]=useState([])
const agregar= async (data)=>{

  // pedir ala api crear un producto
  const respuesta=await crearProductoApi(data)
  console.log(respuesta)
  reset()

  
}
console.log(libros)

    return(

        <>
        <Header></Header>
        <h2 className='text-center my-3'>Agregar Producto</h2>
        <Form className='container' onSubmit={handleSubmit(agregar)}>
        <FloatingLabel
        controlId="floatingInput"
        label="Titulo del Libro"

        className="mb-3"
      >
        <Form.Control type="text" placeholder="Titulo"  {...register("titulo")}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Portada">
        <Form.Control type="text" placeholder="Portada"  {...register("img")}/>
      </FloatingLabel>

      <FloatingLabel className='m-3' controlId='floatingInput' label="Info">
        <Form.Control placeholder='Info'  style={{ height: '100px' }} {...register("info")}></Form.Control>
      </FloatingLabel>
     <FloatingLabel className='m-3' controlId='floatingInput' label="Precio">
      <Form.Control placeholder='Precio'  style={{width:'200px'}} type='text' {...register("precio")}></Form.Control>
      <button className='btn btn-primary my-3' type='submit'>Agregar Libro</button>

     </FloatingLabel>
      
      </Form>
      <Footer></Footer>

        </>
    )
}