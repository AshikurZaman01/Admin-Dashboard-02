import { motion } from "framer-motion";
import { BiEdit } from 'react-icons/bi'
import { BsTrash2 } from 'react-icons/bs'

const TableBody = ({filteredProducts}) => {
    return (
        <tbody className='divide-y divide-gray-700'>
            {filteredProducts.map((product) => (
                <motion.tr
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                        <img
                            src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
                            alt='Product img'
                            className='size-10 rounded-full'
                        />
                        {product.name}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                        {product.category}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                        ${product.price.toFixed(2)}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.stock}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                        <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                            <BiEdit size={18} />
                        </button>
                        <button className='text-red-400 hover:text-red-300'>
                            <BsTrash2 size={18} />
                        </button>
                    </td>
                </motion.tr>
            ))}
        </tbody>
    )
}

export default TableBody