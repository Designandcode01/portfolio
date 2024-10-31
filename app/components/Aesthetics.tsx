import Image from 'next/image'
import Link from 'next/link'
// import { PiWhatsappLogoLight } from "react-icons/pi";
// import { Contact } from './Contact';


const Aesthetics = () => {
  return (

    <div className='h-1/2 bg-slate-500 md:flex justify-center items-center gap-10 mt-10'>
      
      {/* Image container */}
      <div className='md:object-cover'>
          <Image 
          src={'/aesthetics1.png'} 
          alt='Improving Quality of Life' 
          width={850} 
          height={500}
          />
      </div>

      {/* Text container */}
      <div className='h-1/2 px-1 bg-slate-500'>
      
          <p className='text-2xl text-white px-1 py-3'>Welcome to the Aesthetics, structured approach based on real expectations</p>
          <div className='flex justify-around items-center'>
                <div className='w-1/3'>
                <button className='bg-gray-500 w-60 border rounded-full p-3 text-white font-bold'>

                <Link href='/contact'>Plan it now</Link>
                </button>
                  
                </div>  
              <div>
                  <button className='border rounded-full'>                   
                    <Link href={'https://wa.me/923218245668'}> 
                    <Image
                    src='/whatsapp.png'
                    alt='WhatsApp'
                    width={50}
                    height={50}
                    className='bg-slate-800 border rounded-full'
                    />
                    </Link>                    
                  </button>
              </div>
          </div>
      </div>
    
    </div>
  )
}

export default Aesthetics