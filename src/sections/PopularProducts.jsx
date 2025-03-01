import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="bg-dark-green max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl text-medium-green font-palanquin font-bold">
          Our <span className="text-black"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-light-green">
          Experience the harmonious fusion of nature and artistry with our
          handcrafted gemstone bracelets, each telling its own story.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
