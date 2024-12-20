import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { FaUser } from "react-icons/fa";
import { FaUserCheck, FaUserPlus } from "react-icons/fa6";
import { FiUserX } from "react-icons/fi";

const Stat = () => {


    const userStats = {
        totalUsers: 152845,
        newUsersToday: 243,
        activeUsers: 98520,
        churnRate: "2.4%",
    };

    return (
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>

            <StatCard
                name='Total Users' icon={FaUser} value={userStats.totalUsers.toLocaleString()}
                color='#6366F1' />

            <StatCard
                name='New Users Today' icon={FaUserPlus} value={userStats.newUsersToday} color='#10B981' />

            <StatCard
                name='Active Users'
                icon={FaUserCheck}
                value={userStats.activeUsers.toLocaleString()}
                color='#F59E0B' />


            <StatCard
                name='Churn Rate' icon={FiUserX} value={userStats.churnRate} color='#EF4444' />

        </motion.div >
    )
}

export default Stat