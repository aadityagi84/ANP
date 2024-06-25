import Header from "../components/Header";
import "@fortawesome/fontawesome-free/css/all.css";
import SelectDeliveryLocation from "../pages/geo-location/SelectDeliveryLocation";
import Banner from "../pages/banner/Banner";
import Navbar from "../components/Navbar";
import NewArrival from "../pages/products/NewArrival";
// import FeatureProduct from "../pages/products/FeatureProduct";
import FeatureProduct from "../pages/products/FeatureProduct";
import VideoBanner from "../pages/products/VideoBanner";
import News from "../pages/News/News";

function Home() {
  return (
    <>
      <Navbar className="sticky-navbar" />
      <Banner />
      <NewArrival />
      <FeatureProduct />
      {/* <VideoBanner /> */}
      <News />
    </>
  );
}

export default Home;
