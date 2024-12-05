import { motion } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const TableBody = ({ userData, filteredUsers }) => {
    return (
        <tbody className='divide-y divide-gray-700'>

            {filteredUsers.map((user) => (
                <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                                <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                    {user.name.charAt(0)}
                                </div>
                            </div>
                            <div className='ml-4'>
                                <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                            </div>
                        </div>
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-300'>{user.email}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                            {user.role}
                        </span>
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active"
                                ? "bg-green-800 text-green-100"
                                : "bg-red-800 text-red-100"
                                }`}
                        >
                            {user.status}
                        </span>
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                        <button className='text-indigo-400 hover:text-indigo-300 mr-2'><FaRegEdit size={20} /></button>
                        <button className='text-red-400 hover:text-red-300'>
                            <MdDelete size={20} className="ml-5"></MdDelete>
                        </button>
                    </td>
                </motion.tr>
            ))}
        </tbody>
    )
}

export default TableBody