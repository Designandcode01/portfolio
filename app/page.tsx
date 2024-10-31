import Image from "next/image";
import Aesthetics from "./components/Aesthetics";
//import Slider from "./components/slider/Slider";
import EmblaCarousel from "./components/embla/EmblaCarousel";




export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <Aesthetics />

        {/* <Slider /> */}

        <EmblaCarousel />

      </main>
  </>
  );
}



