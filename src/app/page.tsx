import clsx from "clsx";
import Header from "../components/Header";
import Banner from "../components/Banner"
import Services from "@/components/Services";
import Scroll from "@/components/Scroll";

export default function Home() {
  return (
    <main className={clsx(
      "w-full",
      "flex flex-col items-center justify-center",
      "p-5",
    )}>
      <Header />
      <Banner />
      <Scroll/>
      <Services />
    </main>
  );
}
