import Services from "./components/Services";
const App = ({ services }) => {
  return (
    <>
      <Services services={services} key={crypto.randomUUID()} />
    </>
  );
};

export default App;
