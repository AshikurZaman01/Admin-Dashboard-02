import Header from "../../Common/Header/Header"
import AIPoweredInsights from "./AIPoweredInsights/AIPoweredInsights"
import ChannelPerformance from "./ChannelPerformance/ChannelPerformance"
import CustomerSegmentation from "./CustomerSegmentation/CustomerSegmentation"
import OverviewCards from "./OverviewCards/OverviewCards"
import ProductPerformance from "./ProductPerformance/ProductPerformance"
import RevenueChart from "./RevenueChart/RevenueChart"
import UserRetention from "./UserRetention‎/UserRetention"

const Analytics = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>

            <Header title={"Analytics Dashboard"}></Header>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards></OverviewCards>
                <RevenueChart></RevenueChart>


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <ChannelPerformance></ChannelPerformance>
                    <ProductPerformance></ProductPerformance>
                    <UserRetention></UserRetention>
                    <CustomerSegmentation></CustomerSegmentation>
                </div>

                <AIPoweredInsights></AIPoweredInsights>

            </main>

        </div>
    )
}

export default Analytics