import { BrowserRouter, Route, Routes } from "react-router-dom"
import OverviewPage from "./Components/Pages/OverviewPage/OverviewPage"
import ProductPage from "./Components/Pages/ProductPage/ProductPage"
import BG from "./Components/BG/BG"
import SideBar from "./Components/SideBar/SideBar"
import Users from "./Components/Pages/Users/Users"
import Sales from "./Components/Pages/Sales/Sales"
import Orders from "./Components/Pages/Orders/Orders"
import Analytics from "./Components/Pages/Analytics/Analytics"
import Settings from "./Components/Pages/Settings/Settings"

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
            <Route path="/users" element={<Users />} />
            <Route path="/sales" element={<Sales></Sales>} />
            <Route path="/orders" element={<Orders></Orders>} />
            <Route path="/analytics" element={<Analytics></Analytics>} />
            <Route path="/settings" element={<Settings></Settings>} />
          </>

        </Routes>


      </div>
    </BrowserRouter>
  )
}

export default App
