
import { Administrador } from "./components/page/Administrador"
import {BrowserRouter,Routes ,Route}from "react-router-dom"
import { Index } from "./components/Index"
import { Error404 } from "./components/page/Error404"
import { AgregarProduct } from "./components/page/AgregarPro"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route path="/error404" element={<Error404></Error404>}></Route>
      <Route path="/agregar" element={<AgregarProduct></AgregarProduct>}></Route>
    </Routes>
    </BrowserRouter>
  


  
 
 

    </>
  )
}

export default App
