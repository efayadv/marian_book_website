import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "./components/IntroPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
