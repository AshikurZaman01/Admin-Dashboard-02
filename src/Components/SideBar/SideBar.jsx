import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import Menubtn from "./Menubtn/Menubtn";
import { IoBarChart, IoBag, IoPerson, IoWallet, IoCart, IoTrendingUp, IoSettings } from "react-icons/io5";

const SideBar = () => {
    const sideBarItems = [
        { id: 1, name: 'Overview', path: '/', icon: <IoBarChart />, color: "#6366f1" },
        { id: 2, name: 'Products', path: '/product', icon: <IoBag />, color: "#8B5CF6" },
        { id: 3, name: 'Users', path: '/users', icon: <IoPerson />, color: "#EC4899" },
        { id: 4, name: 'Sales', path: '/sales', icon: <IoWallet />, color: "#10B981" },
        { id: 5, name: 'Orders', path: '/orders', icon: <IoCart />, color: "#F59E0B" },
        { id: 6, name: 'Analytics', path: '/analytics', icon: <IoTrendingUp />, color: "#3B82F6" },
        { id: 7, name: 'Settings', path: '/settings', icon: <IoSettings />, color: "#6EE7B7" },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
            initial={false}
        >
            <div className="h-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 rounded-l-xl shadow-lg">

                {/* Menu Button */}
                <Menubtn isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                {/* Sidebar Items */}
                <motion.div
                    className="flex flex-col mt-6 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {sideBarItems.map(item => (
                        <motion.div
                            key={item.id}
                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: item.color,
                                color: '#fff',
                            }}
                            whileTap={{
                                scale: 0.95,
                                backgroundColor: item.color,
                                color: '#fff',
                            }}
                        >
                            <span
                                className="text-xl"
                                style={{ color: item.color }}
                            >
                                {item.icon}
                            </span>
                            <motion.span
                                className={`font-medium transition-all duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {item.name}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SideBar;
