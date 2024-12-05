import TableBody from "./TableBody"
import TableHead from "./TableHead"

const Table = ({ userData, filteredUsers }) => {
    return (
        <div className='overflow-x-auto'>

            <table className='min-w-full divide-y divide-gray-700'>

                <TableHead></TableHead>

                <TableBody userData={userData} filteredUsers={filteredUsers}></TableBody>

            </table>

        </div>
    )
}

export default Table