// import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Detail from './components/Details'
import Reservation from './components/Reservations'

const App = () => (
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/details/:id" element={<Detail/>}></Route>
    <Route path="/reservations" element={<Reservation/>}></Route>
  </Routes>
)

export default App