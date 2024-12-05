import Header from "../../Common/Header/Header"
import ProductsTable from "./ProductsTable/ProductsTable"
import ProductStack from "./ProductStack/ProductStack"

const ProductPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">

            <Header title={"Overview"} />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

                <ProductStack></ProductStack>

                <ProductsTable></ProductsTable>

            </main>
        </div>
    )
}

export default ProductPage