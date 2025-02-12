import Navbar from "./components/Navbar/page"
import HomePage from "./components/HomePage/page"
import Group from "./components/Group/page"
import Desination from "./components/Desination/page"
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import Testonails from "./components/Testonails";
import KeyFeatuers from "./components/KeyFeatuers";
import TravelPoint from "./components/TravelPoint";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Group/>
    <Desination/>
    <TravelPoint/>
    <KeyFeatuers/>
    <Testonails/>
    <EmailSection/> 
    <Footer/>

    </>
  );
}
