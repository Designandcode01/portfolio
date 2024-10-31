import Image from "next/image";

export default function Footer() {
    return (
        <>
            <section className='bg-white flex justify-center items-center p-1 gap-2'>
      <div>
        <Image
        src='/logo.png'
        alt=''
        width={500}
        height={500} 
        />
      </div>
      <div>
        <Image
        src='/logo-2.webp'
        alt=''
        width={500}
        height={500} 
        />
      </div>
      <div>
        <Image
        src='/logo-bg.jpg'
        alt=''
        width={350}
        height={350} 
        />
      </div>
      <div>
        <Image
        src='/CPSP-151x200.webp'
        alt=''
        width={250}
        height={250} 
        />
      </div>
    </section>
        </>
    )
}