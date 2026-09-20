import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardPage from "./pages/DashbordPage"
import  './index.css'
import DetailFilmPage from "./pages/DetailFilmPage"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/movie/:id" element={<DetailFilmPage/>}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
