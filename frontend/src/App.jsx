import { useState } from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import UseContextProvider from './context/UserContext'
import Profile from './pages/Profile'

function App() {

  return (
    <UseContextProvider>
    <div>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </UseContextProvider>
  )
}

export default App
