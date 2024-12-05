import { motion } from "framer-motion";
import UsersHeader from "./UsersHeader";
import Table from "./Table/Table";

const UsersTable = ({ userData, filteredUsers, searchTerm, handleSearch }) => {

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>

            <UsersHeader userData={userData} searchTerm={searchTerm} filteredUsers={filteredUsers} handleSearch={handleSearch}></UsersHeader>

            <Table userData={userData} filteredUsers={filteredUsers}></Table>

        </motion.div>
    )
}

export default UsersTable