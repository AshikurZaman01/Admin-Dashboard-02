import { motion } from "framer-motion"
import StackCard from "../../../Common/Stack/StackCard"
import { GoPackage } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";

const ProductStack = () => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >

            <StackCard name='Total Products' icon={GoPackage} value={1234} color='#6366F1' />
            <StackCard name='Top Selling' icon={IoIosTrendingUp } value={89} color='#10B981' />
            <StackCard name='Low Stock' icon={FiAlertTriangle } value={23} color='#F59E0B' />
            <StackCard name='Total Revenue' icon={FaDollarSign } value={"$543,210"} color='#EF4444' />

        </motion.div>
    )
}

export default ProductStack