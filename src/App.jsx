import { useState } from 'react'
import './App.css'
import View from './components/View'
import Add1 from './components/Add1'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Movie from './components/Movie'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/'element={<View/>}> </Route>
      <Route path='/add'element={<Add1 person={{name:'Deva',
      email:'deva@gmail.com',
      password:'hhhh',
      address:'uhhh'}}/>}></Route>
      <Route path='/card'element={<Movie/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
