import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { braclet1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(braclet1);

  return (
    <section
      id="home"
      className="bg-dark-green w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-light-green">
          Our collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-medium-green xl:whitespace-nowrap relative z-10 pr-10">
            Grace in
          </span>
          <br />
          <span className="text-medium-green xl:whitespace-nowrap relative z-10 pr-10">
            Every Stone,
          </span>
          <br />
          <span className="text-black inline-block mt-3">Story in </span>{" "}
          <span className="text-black">Every Piece</span>
        </h1>
        <p className="font-montserrat text-light-green text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Embrace the purity of nature in every meticulously crafted piece.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-black text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-light-green">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
