import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Home } from './pages/Home'
import { AppLayout } from './shared/layout/AppLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppLayout>
      <Home></Home>
     </AppLayout>

    </>
  )
}

export default App
