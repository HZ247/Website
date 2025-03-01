import Nav from "../src/components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "../src/sections";

const App = () => {
  return (
    <main className="bg-dark-green relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b bg-dark-green">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>

      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
