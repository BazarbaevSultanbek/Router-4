import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
