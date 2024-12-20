import GetProducts from "../../Products/GetProducts";

export default function ByCategory(id, value) {
    const { products, setProducts } = GetProducts();
    let filtered = [];

    let checked = document.querySelectorAll("input[name=categories]:checked");
    if (document.getElementById(`${id}`).checked === true) {
        filtered = [...products.filter((item) => item.category === value)];
        setProducts(filtered);
        return filtered;
    } else if (checked.length === 0) {
        return products;
    }
    filtered = products.filter((item) => item.category !== value);
    setProducts(filtered);
    return filtered;
}