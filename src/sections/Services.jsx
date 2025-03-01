import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="bg-dark-green max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
