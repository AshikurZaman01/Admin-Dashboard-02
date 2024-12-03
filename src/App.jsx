import { BrowserRouter, Route, Routes } from "react-router-dom"
import OverviewPage from "./Components/Pages/OverviewPage/OverviewPage"
import ProductPage from "./Components/Pages/ProductPage/ProductPage"
import BG from "./Components/BG/BG"
import SideBar from "./Components/SideBar/SideBar"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

        <BG />


        <SideBar />

        <Routes>
          <>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/product" element={<ProductPage />} />
          </>

        </Routes>


      </div>
    </BrowserRouter>
  )
}

export default App
