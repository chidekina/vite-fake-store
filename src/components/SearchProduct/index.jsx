export default function SearchProduct() {
    return (
        <div className="mb-6">
            <input 
            type="text"
            placeholder="O que desejas?"
            className="w-full h-[40px] border-2 border-gray-400 focus:border-red-600 outline-none rounded-md pl-3 duration-300"
            />
        </div>
    )
}