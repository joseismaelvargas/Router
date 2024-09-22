import { useEffect, useState } from "react"
import { URL_productos } from "../helpers/queries"
 export const Main=()=>{
     const[leerapi,setleerApi]=useState([])
   const Api=async()=>{

    

      try{
         const api=await fetch(URL_productos)
         if(api.status===200){
            let respuesta=await api.json()
            setleerApi(respuesta)

         }
      }catch{
         alert("Error")
      }
   }
   useEffect(()=>{
        Api()
   },[])

    return(
        <>
        <main>
             <section className="imagen-Fondo">
                <div className="div1">
                     <h1 className="jacques-francois-shadow-regular text-center ">Los Mejores Libros </h1>
                <h1 className="jacques-francois-shadow-regular text-center ">Para Leer</h1>
                <h4 className="subtitle">Ingresá en PlayStore para descargar la app.</h4>
                <button className="button  btn btn-primary "><h3 className="gratis">!Libros Gratis!</h3></button>
              
                </div>
               
             </section>
             <section className="container">
                <div >
                    <img src="https://s1.eestatic.com/2022/12/08/el-cultural/letras/los-libros-mas-vendidos/724437703_229333773_1706x960.jpg" className="img" alt="" />
                <h1 className="text-center title-footer">Más de 3.500 Libros PDF ¡Gratis!</h1>
                <br />
                <br />
                <p className="parrafo text-trucate">
              
                <strong>Bienvenidos a InfoLibros, tu destino definitivo para leer y descargar libros gratis.

                Nuestra extensa biblioteca de libros en PDF está diseñada para satisfacer tu pasión por la lectura y el conocimiento, sin coste alguno.</strong>
                  <br />

                En InfoLibros entendemos la importancia de tener acceso fácil a libros para leer gratis. Por eso, hemos reunido una colección impresionante que abarca desde clásicos literarios hasta libros de actualidad, todos disponibles en formato PDF para facilitar la lectura y descarga.
                      <hr />
                No importa tu interés o campo de estudio, nuestra plataforma te ofrece una variedad inigualable de libros gratis para leer en linea o descargar. Desde novelas apasionantes hasta tratados académicos, cada libro es una puerta abierta al mundo del conocimiento.
                Hemos simplificado el proceso de descarga para que puedas acceder a libros gratis inmediatamente sin tener que registrarte. La calidad y la diversidad son nuestras promesas, asegurando que cada visita a InfoLibros sea una experiencia enriquecedora.


Adicionalmente, actualizamos constantemente nuestra selección para ofrecerte los mejores libros gratis en PDF de forma legal y segura.

Te invitamos a navegar y sorprenderte por nuestra vasta biblioteca digital, donde cada clic te acerca a tu próximo libro.

                </p>
                </div>
                <div>
                    <img src="https://infolibros.org/wp-content/uploads/2020/06/Libros-cortos-2-500x300.jpg" className="img" alt="" />
                    <p className="parrafo">Sumérgete en un mundo de historias breves y emocionantes con nuestra colección de libros cortos. Cada página es una puerta a universos de amor, terror, fantasía y misterio, diseñados para capturar tu imaginación en pocas palabras.

Nuestra selección de libros ofrece cuentos cortos para todos los gustos y edades. Desde relatos clásicos hasta aventuras de ciencia ficción, estos libros cortos en formato PDF son perfectos para una lectura rápida pero intensa.

Explora la magia de los cuentos cortos, ideales para una pausa en tu día o como compañía antes de dormir. Aquí te presentamos nuestra colección de libros cortos en PDF.

</p>
                </div>

             </section>
             <hr />
             <br />
             <h1 className="text-center my-3">Libros en venta</h1>
             <section className="container">

         
                <div className="libros d-flex ">
                    <div className="libro">
                       <img className="img-libro" src="https://th.bing.com/th/id/OIP.p2Qht0iMCaSgQb3wbzHukAHaKN?rs=1&pid=ImgDetMain" alt="ss" />
                 <h2>titulo del libro</h2>
                 <p className="text-start">Este libro trata de ... x cosas</p>

                 <button className="btn btn-primary">Comprar</button> 
                    </div>
                   {
                  leerapi.map((element)=>
                     
              
                <div className="libro" key={element.id}>
                   <img className="img-libro" src={element.img} alt="img" />
             <h2>{element.titulo}</h2>
             <p className="text-start">{element.info}</p>

             <button className="btn btn-primary">Comprar</button> 
                </div>
             

         
                  )
                }

                </div>
              

             </section>
        </main>
        </>
    )
}