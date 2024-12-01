import Image from "next/image";
import Navbar from "./components/Navbar/page"
import HomePage from "./components/HomePage/page"
import Group from "./components/Group/page"
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Group/>

    </>
  );
}
