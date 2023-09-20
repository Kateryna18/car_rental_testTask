import Catalog from "./Catalog/Catalog";
import Filter from "./Filter/Filter";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Services from "./Services/Services";

export const App = () => {

  return (
    <>
    <Header/>
    {/* <Services/> */}
    <Filter/>
    <Catalog/>
    <Footer/>
    </>
  );
};
