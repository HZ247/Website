import { braclet8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="bg-dark-green flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-medium-green font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-black"> Super </span>
          <span className="text-black">Quality </span> Braclets
        </h2>
        <p className="!text-light-green mt-4 lg:max-w-lg info-text">
          Infused with the timeless energy of Aqiq stones, our meticulously
          handcrafted bracelets exude a perfect harmony of elegance and
          spirituality. Designed to elevate your style while embracing
          tradition, each piece is a testament to artistry, authenticity, and
          refined beauty.
        </p>
        <p className="!text-light-green mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={braclet8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
