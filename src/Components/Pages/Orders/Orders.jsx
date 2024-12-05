import Header from "../../Common/Header/Header"
import { motion } from "framer-motion";
import StatCard from "../Users/Stat/StatCard";
import { BiCheckCircle, BiDollar, BiShoppingBag } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import DailyOrders from "./DailyOrders/DailyOrders";
import OrderDistribution from "./OrderDistribution‎/OrderDistribution";

const Orders = () => {

    const orderStats = {
        totalOrders: "1,234",
        pendingOrders: "56",
        completedOrders: "1,178",
        totalRevenue: "$98,765",
    };

    return (
        <div className='flex-1 relative z-10 overflow-auto'>

            <Header title={"Orders"}></Header>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name='Total Orders' icon={BiShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
                    <StatCard name='Pending Orders' icon={CiClock1} value={orderStats.pendingOrders} color='#F59E0B' />
                    <StatCard
                        name='Completed Orders'
                        icon={BiCheckCircle}
                        value={orderStats.completedOrders}
                        color='#10B981'
                    />
                    <StatCard name='Total Revenue' icon={BiDollar} value={orderStats.totalRevenue} color='#EF4444' />
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <DailyOrders></DailyOrders>
                    <OrderDistribution></OrderDistribution>
                </div>

            </main>

        </div>
    )
}

export default Orders