import Header from "../../Common/Header/Header";
import Stat from "./Stat/Stat";

const Users = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>

            <Header title={"Users"} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                {/* STATS */}
                <Stat></Stat>

            </main>

        </div>
    )
}

export default Users