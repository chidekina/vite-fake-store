export default function ShowProducts({ list }) {
  return list.map((item) => {
    return (
      <div
        key={item.id}
        className="border border-gray-400 rounded-md overflow-hidden bg-white"
        title={item.title}
      >
        <div className="relative">
          <h6 className="absolute top-3 right-3 bg-red-950 text-white px-2 py-1 rounded-md font-bold">
            {item.rating.rate}
          </h6>
          <img
            src={item.image}
            className="w-full h-[250px] p-3 object-contain"
          />
        </div>
        <div className="p-3">
          <h5 className="text-xl md:line-clamp-1">{item.title}</h5>
          <h6 className="text-red-900 font-bold mb-3">{item.category}</h6>
          <h2 className="text-3xl text-right font-semibold">
            R${item.price.toFixed(2)}
          </h2>
        </div>
      </div>
    );
  });
}
