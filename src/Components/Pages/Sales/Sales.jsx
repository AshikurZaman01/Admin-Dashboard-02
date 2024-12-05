import Header from "../../Common/Header/Header";
import DailySalesTrend from "./DailySalesTrend/DailySalesTrend";
import SalesByCategoryChart from "./SalesByCategoryChart/SalesByCategoryChart";
import SalesOverviewChart from "./SalesOverviewChart/SalesOverviewChart";
import SalesStat from "./SalesStat/SalesStat";


const Sales = () => {



    return (
        <div className='flex-1 overflow-auto relative z-10'>

            <Header title={'Sales'}></Header>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                {/* SALES STATS */}
                <SalesStat></SalesStat>

                <SalesOverviewChart></SalesOverviewChart>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <SalesByCategoryChart></SalesByCategoryChart>
                    <DailySalesTrend></DailySalesTrend>
                </div>

            </main>

        </div>
    )
}

export default Sales