import { Routes, Route } from "react-router";
import { Dashboard } from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/add-transaction" element={<div>Test add-transaction page</div>} />
    </Routes>
    <script>{lucide.createIcons()}</script>
    </>
  )
}

export default App
