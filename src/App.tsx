import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { AppLayout } from './shared/layout/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Sobre } from './pages/Sobre'
import { Details } from './pages/Details'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>

      <AppLayout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:id" element={<Details />} />

        </Routes>
      </AppLayout>

    </BrowserRouter>
  );
}

export default App
