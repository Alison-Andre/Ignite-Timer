// Rotas
import { Routes, Route } from 'react-router-dom'
import DeafaultLayout from './layouts/DefaultLayout'

// Páginas
import Home from './pages/Home'
import History from './pages/History'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}
