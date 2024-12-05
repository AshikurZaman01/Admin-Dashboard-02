import { useState } from "react";
import Header from "../../Common/Header/Header";
import Stat from "./Stat/Stat";
import UsersTable from "./UsersTable/UsersTable";

const Users = () => {

    const userData = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
        { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(userData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = userData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    return (
        <div className='flex-1 overflow-auto relative z-10'>

            <Header title={"Users"} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                {/* STATS */}
                <Stat></Stat>

                {/* users table */}
                <UsersTable userData={userData} searchTerm={searchTerm} filteredUsers={filteredUsers} handleSearch={handleSearch} ></UsersTable>

            </main>

        </div>
    )
}

export default Users