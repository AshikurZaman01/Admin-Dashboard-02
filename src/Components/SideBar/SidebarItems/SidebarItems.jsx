import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const SidebarItems = ({ item }) => {

    const Icon = item.icon;

    return (
        <NavLink to={item.path}>
            <motion.div
                className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2"
            >
                <Icon size={20} style={{ color: item.color }} />
            </motion.div>
        </NavLink>
    );
};

export default SidebarItems;
