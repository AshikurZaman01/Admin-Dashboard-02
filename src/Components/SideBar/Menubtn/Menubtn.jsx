import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";

const Menubtn = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
            <IoIosMenu size={24} />
        </motion.button>
    )
}

export default Menubtn