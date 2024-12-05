import { FaUser } from "react-icons/fa6"
import SettingSection from "./SettingSection"

const Profile = () => {
    return (
        <SettingSection icon={FaUser} title={"Profile"}>
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img
                    src='https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
                    alt='Profile'
                    className='rounded-full w-20 h-20 object-cover mr-4'
                />

                <div>
                    <h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
                    <p className='text-gray-400'>john.doe@example.com</p>
                </div>
            </div>

            <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
                Edit Profile
            </button>
        </SettingSection>
    )
}

export default Profile