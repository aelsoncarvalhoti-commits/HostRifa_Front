import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Planos from './pages/public/Planos'
import PropostaValor from './pages/public/proposta_valor'
import Rifas from './pages/public/Rifas'
import Parceiros from './pages/public/Parceiros'
import Login from './pages/register/Login'
import CriarConta from './pages/register/CriarConta'
import NovaRifa from './pages/authenticated/NovaRifa'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<PropostaValor/>}/>
        <Route path='/planos' element={<Planos/>}/>
        <Route path='/rifas' element={<Rifas/>}/>
        <Route path='/parceiros' element={<Parceiros/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/criarConta' element={<CriarConta/>}/>
        <Route path='/novaRifa' element={<NovaRifa/>}/>
      </Routes>
    </>
  )
}

export default App
