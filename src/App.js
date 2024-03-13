import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Posts from './components/Posts'
import PaginationComponent from './components/page'

const App = () => {
  return (
    <div className='App'> 
<Routes>
  <Route path='/' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/posts' element={<Posts/>}/>
  <Route path='/page' element={<PaginationComponent/>}/>
</Routes>


    </div>
  )
}

export default App