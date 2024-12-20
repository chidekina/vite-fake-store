import GetProducts from "./GetProducts";
import ShowProducts from "./ShowProducts";

export default function ProductsList() {
  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      <ShowProducts list={GetProducts} />
    </section>
  )
}