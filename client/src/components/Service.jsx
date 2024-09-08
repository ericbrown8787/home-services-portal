import Instance from "./Instance";
const Service = ({ service }) => {
  return (
    <li>
      <h3>{service.name}</h3>
      <h4>Administration</h4>
      <ul>
        {service.instances
          .filter((instance) => instance.control)
          .map((instance) => {
            return <Instance instance={instance} key={crypto.randomUUID()} />;
          })}
      </ul>
      <h4>Other Endpoints</h4>
      <ul>
        {service.instances
          .filter((instance) => !instance.control)
          .map((instance) => {
            return <Instance instance={instance} key={crypto.randomUUID()} />;
          })}
      </ul>
    </li>
  );
};

export default Service;
