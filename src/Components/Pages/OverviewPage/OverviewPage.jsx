import Header from "../../Common/Header/Header"
import CategoryDistributionChart from "./CategoryDistribution/CategoryDistributionChart"
import SalesChannelChart from "./SalesChannel/SalesChannelChart"
import SalesOverviewChart from "./SalesOverviewChart/SalesOverviewChart"
import Stack from "./Stack/Stack"


const OverviewPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">

            <Header title={"Overview"} />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

                <Stack></Stack>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
                    <div className="col-span-1">
                        <SalesOverviewChart></SalesOverviewChart>
                    </div>

                    <div className="col-span-1">
                        <CategoryDistributionChart></CategoryDistributionChart>
                    </div>
                </div>

                <SalesChannelChart></SalesChannelChart>

            </main>


        </div>
    )
}

export default OverviewPage