import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const SidebarItems = ({ item, isSidebarOpen }) => {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `flex items-center space-x-2 p-2.5 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 mb-1 ${isActive ? 'bg-gray-700' : ''}`
            }
            exact={true}
        >
            <motion.div
                className="flex items-center space-x-2 p-2.5 text-sm font-medium rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Icon size={18} style={{ color: item.color }} />

                <AnimatePresence>
                    {isSidebarOpen && (
                        <motion.span
                            className="whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                        >
                            {item.name}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </NavLink>
    );
};

export default SidebarItems;
