import Header from "../../Common/Header/Header";
import SalesStat from "./SalesStat/SalesStat";


const Sales = () => {



    return (
        <div className='flex-1 overflow-auto relative z-10'>

            <Header title={'Sales'}></Header>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* SALES STATS */}

                <SalesStat></SalesStat>

            </main>

        </div>
    )
}

export default Sales