'use client';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';





export const images = [{
    id: 1,
    src: "/Fillers.jpg",
    width: "400px",
    height: "400px",
    title: "Black Coffee",
    desc: "Great coffee made of beans mixed with cola"
  },
  
  {
    id: 2,
    src: "/Fillers2.jpg",
    width: "1000px",
    height: "1000px",
    title: "Cappuccino",
    desc: "Great coffee made of beans mixed with cola"
  },
  {
    id: 3,
    src: "/Fillers3.jpg",
    width: "400px",
    height: "400px",
    title: "Latee",
    desc: "Great coffee made of beans mixed with cola"
  },
  {
    id: 4,
    src: "/Fillers4.jpg",
    width: "400px",
    height: "400px",
    title: "Latee",
    desc: "Great coffee made of beans mixed with cola"
  },
  {
    id: 5,
    src: "/Fillers5.jpg",
    width: "400px",
    height: "400px",
    title: "Latee",
    desc: "Great coffee made of beans mixed with cola"
  }]

  



export default function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])
  
    return (
            <section className='bg-gray-300'>
                <div className="embla mx-auto w-1/2 border h-1/3" ref={emblaRef}>
                    <div className="embla__container">
                        {images.map((image, index) => (
                            <div className="embla__slide flex justify-center items-center" key={index}>               
                                    <Image
                                    src={image.src}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
                                     />
                            </div>                               
                            ))}
                    </div>
                </div>
                </section>

)}