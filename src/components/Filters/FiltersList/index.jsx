export default function FiltersList({ list, children }) {
    return (
        list.map(item => {
            <li>
                <input
                 id={item.id}
                 type={item.type}
                 value={item.value}
                 name={item.filterType} 
                />
                <label htmlFor={item.id}>{children}</label>
            </li>
        })
    )
}