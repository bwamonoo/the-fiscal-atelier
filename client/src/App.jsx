import { Routes, Route } from "react-router";
import { Dashboard } from './pages/Dashboard'
import { AddTransaction } from "./pages/AddTransaction";
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/add-transaction" element={<AddTransaction />} />
    </Routes>
    <script>{lucide.createIcons()}</script>
    </>
  )
}

export default App
