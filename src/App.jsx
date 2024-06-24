import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.css";
import SelectDeliveryLocation from "./pages/geo-location/SelectDeliveryLocation";

function App() {
  return (
    <>
      <Header location={<SelectDeliveryLocation />} />
    </>
  );
}

export default App;
