import GetProducts from "../Products";
import SearchProduct from "../SearchProduct";
import ShowFilter from "../ShowFilter";

export default function Main() {

    return (
        <main className="bg-white p-3 rounded-md mb-4">
            <SearchProduct />
            <GetProducts />
            <ShowFilter />
        </main>
    )
}