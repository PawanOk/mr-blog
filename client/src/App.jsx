import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path = "/sign-in" element={<Signin />} />
            <Route path = "/sign-up" element={<Signup/>} />
            <Route path = "/dashboard" element = {<Dashboard/>} />
          </Routes>
    </BrowserRouter>
  )
}
