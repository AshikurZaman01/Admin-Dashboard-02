import Header from "../../Common/Header/Header"
import DangerZone from "./DangerZone/DangerZone"
import Notifications from "./Notifications/Notifications"
import Profile from "./Profile/Profile"
import Security from "./Security/Security"

const Settings = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>

            <Header title={"Settings"}></Header>

            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>

                <Profile></Profile>
                <Notifications></Notifications>
                <Security></Security>
                <DangerZone></DangerZone>
            </main>
        </div>
    )
}

export default Settings