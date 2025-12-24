import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import OrderPage from './components/OrderPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
