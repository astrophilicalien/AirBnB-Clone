import { Route, Router, Routes } from 'react-router-dom'
import IndexPage from './components/IndexPage.jsx'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' element={<IndexPage />} />
      </Routes>
  )
}

export default App
