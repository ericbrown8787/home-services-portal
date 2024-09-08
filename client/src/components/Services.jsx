import Service from "./Service";
const Services = ({ services }) => {
  return (
    <ul>
      {services.map((service) => {
        return <Service service={service} key={crypto.randomUUID()} />;
      })}
    </ul>
  );
};

export default Services;
