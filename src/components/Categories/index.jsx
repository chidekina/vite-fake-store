import ByCategory from "../Filters/ByCategory";


export default function Categories({ list }) {


    return (
        list.map(product => (
            <li key={product.name}>
                <input
                    id={product.name}
                    name="categories"
                    value={product.category}
                    type="checkbox"
                    className="rounded-full"
                    onChange={() => {ByCategory(product.name, product.category)}}
                />
                <label htmlFor={product.category}>{product.category}</label>
            </li>
        ))
    );
}