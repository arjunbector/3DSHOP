import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Product from "../components/Product"
import ProductPage from "../components/ProductPage/ProductPage"

const App = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<ProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App
