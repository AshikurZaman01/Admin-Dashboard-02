import { motion } from "framer-motion";
import { CgShoppingCart, CgTrending } from "react-icons/cg";
import { BiCreditCard, BiDollar } from "react-icons/bi";
import StatCard from "../../Users/Stat/StatCard";

const SalesStat = () => {

    const salesStats = {
        totalRevenue: "$1,234,567",
        averageOrderValue: "$78.90",
        conversionRate: "3.45%",
        salesGrowth: "12.3%",
    };

    return (
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <StatCard name='Total Revenue' icon={BiDollar} value={salesStats.totalRevenue} color='#6366F1' />

            <StatCard
                name='Avg. Order Value'
                icon={CgShoppingCart}
                value={salesStats.averageOrderValue}
                color='#10B981'
            />

            <StatCard
                name='Conversion Rate'
                icon={CgTrending}
                value={salesStats.conversionRate}
                color='#F59E0B'
            />

            <StatCard name='Sales Growth' icon={BiCreditCard} value={salesStats.salesGrowth} color='#EF4444' />
        </motion.div>

    )
}

export default SalesStat