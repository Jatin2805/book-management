import React from 'react'

import { Routes,Route } from "react-router-dom"
import Home from './home/Home'
import Courses from './Courses/Courses'
import Signup from './component/Signup'
import Login from './component/Login'
function App() {
  return (
    
<>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path = '/course' element = {<Courses/>  }/> 

    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

    </Routes>
 </>
  )

}
 
export default App