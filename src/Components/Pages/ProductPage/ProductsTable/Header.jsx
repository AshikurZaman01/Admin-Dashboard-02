import { IoIosSearch } from "react-icons/io"

const Header = ({ handleSearch, searchTerm }) => {
    return (
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
            <div className='relative'>
                <input
                    type='text'
                    placeholder='Search products...'
                    className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={handleSearch}
                    value={searchTerm}
                />
                <IoIosSearch className='absolute left-3 top-2.5 text-gray-400' size={18} />
            </div>
        </div>
    )
}

export default Header