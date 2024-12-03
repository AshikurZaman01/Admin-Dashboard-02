import { motion } from "framer-motion";
import { GoZap } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import StackCard from "../../../Common/Stack/StackCard";

const Stack = () => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >

            <StackCard name='Total Sales' icon={GoZap} value='$12,345' color='#6366F1' />
            <StackCard name='New Users' icon={FaUsers} value='1,234' color='#8B5CF6' />
            <StackCard name='Total Products' icon={MdOutlineShoppingBag} value='567' color='#EC4899' />
            <StackCard name='Conversion Rate' icon={FiBarChart2} value='12.5%' color='#10B981' />

        </motion.div>
    )
}

export default Stack