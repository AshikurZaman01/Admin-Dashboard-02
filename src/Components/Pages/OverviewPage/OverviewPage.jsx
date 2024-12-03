import Header from "../../Common/Header/Header"
import SalesOverviewChart from "./SalesOverviewChart/SalesOverviewChart"
import Stack from "./Stack/Stack"


const OverviewPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">

            <Header title={"Overview"} />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

                <Stack></Stack>

                <SalesOverviewChart></SalesOverviewChart>

            </main>


        </div>
    )
}

export default OverviewPage