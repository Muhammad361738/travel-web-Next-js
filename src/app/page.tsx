import Image from "next/image";
import Navbar from "./components/Navbar/page"
import HomePage from "./components/HomePage/page"
import Group from "./components/Group/page"
import Desination from "./components/Desination/page"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Group/>
    <Desination/>
    <Footer/>

    </>
  );
}
