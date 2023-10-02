import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import RSVP from './pages/RSVP/RSVP'

import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/RSVP" element={<RSVP />} />
      </Routes>

    </main>
  )
}

export default App
