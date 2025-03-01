import { arrowRight } from "../assets/icons";
import { braclet9 } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="bg-dark-green flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={braclet9}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-medium-green">Special Offer</span>
        </h2>
        <p className="!text-light-green mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="!text-light-green mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
