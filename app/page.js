import Landing from "@/Components/Home";
import Footer from "@/Components/shared/Footer/Footer";
import Navbar from "@/Components/shared/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
