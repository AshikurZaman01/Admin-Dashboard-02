import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import SalesOverviewChart from "../../OverviewPage/SalesOverviewChart/SalesOverviewChart";
import CategoryDistributionChart from "../../OverviewPage/CategoryDistribution/CategoryDistributionChart";

const ProductsTable = () => {

    const PRODUCT_DATA = [
        { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
        { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
        { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
        { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
        { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = PRODUCT_DATA.filter(
            (product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
        );

        setFilteredProducts(filtered);
    };

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>

            <Header handleSearch={handleSearch} searchTerm={searchTerm}></Header>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>

                    <TableHead></TableHead>

                    <TableBody filteredProducts={filteredProducts}></TableBody>

                </table>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
                    <div className="col-span-1">
                        <SalesOverviewChart></SalesOverviewChart>
                    </div>

                    <div className="col-span-1">
                        <CategoryDistributionChart></CategoryDistributionChart>
                    </div>
                </div>
            </div>

        </motion.div >
    )
}

export default ProductsTable