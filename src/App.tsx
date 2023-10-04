import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import RSVP from './pages/RSVP/RSVP'
import Lodging from './pages/Lodging/Lodging'
import FAQs from './pages/FAQs/FAQs'
import Hero from './pages/Hero/Hero'
import Registry from './pages/Registry/Registry'
import Home from './pages/Home/Home'

import { Route, Routes, useRouteError } from "react-router-dom";
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [activeTab, setActiveTab] = useState("home")
  return (
    <main>
      <Navbar />
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: [0, 1]}}
      transition={{
        duration: 5,
        type: "spring",
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/photos" element={<Hero />} />
          <Route path="/contact" element={<Hero />} />
        </Routes>
      </motion.div>
    </main>
  );
}


function ErrorBoundary() {
  let error = useRouteError();
  console.log(error)
  return <div>O</div>
}

export default App
