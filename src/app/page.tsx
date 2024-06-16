import clsx from "clsx";
import Header from "../components/Header";
import Banner from "../components/Banner"
import Services from "@/components/Services";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";
import Gallary from "@/components/Gallary";

export default function Home() {
  return (
    <main className={clsx(
      // "w-full",
      "flex flex-col items-center justify-center",
    )}>
      <Header />
      <Banner />
      <Scroll />
      <Services />
      <Gallary />
      <Footer />
    </main>
      
  );
}
