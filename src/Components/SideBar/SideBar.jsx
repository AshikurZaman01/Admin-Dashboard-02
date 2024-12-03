import { useState } from "react";
import { motion } from "framer-motion";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import Menubtn from "./Menubtn/Menubtn";
import SidebarItems from "./SidebarItems/SidebarItems";

const SideBar = () => {
    const sideBarItems = [
        { id: 1, name: 'Overview', path: '/', icon: FiBarChart2, color: "#6366f1" },
        { id: 2, name: 'Products', path: '/product', icon: HiOutlineShoppingBag, color: "#8B5CF6" },
        { id: 3, name: 'Users', path: '/users', icon: FaUsers, color: "#EC4899" },
        { id: 4, name: 'Sales', path: '/sales', icon: LuDollarSign, color: "#10B981" },
        { id: 5, name: 'Orders', path: '/orders', icon: MdOutlineShoppingCart, color: "#F59E0B" },
        { id: 6, name: 'Analytics', path: '/analytics', icon: IoIosTrendingUp, color: "#3B82F6" },
        { id: 7, name: 'Settings', path: '/settings', icon: CiSettings, color: "#6EE7B7" },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex-col border-r border-gray-700">

                <Menubtn isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                <nav className="mt-8 flex-grow">
                    {sideBarItems.map((item) => (
                        <SidebarItems key={item.id} item={item} isSidebarOpen={isSidebarOpen} />
                    ))}
                </nav>

            </div>
        </motion.div>
    );
};

export default SideBar;
