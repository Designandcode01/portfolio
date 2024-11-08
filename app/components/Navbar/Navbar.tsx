import Link from 'next/link'
import { NavbarLinks } from './NavbarLinks'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { UserNav } from './UserNav';
import Image from 'next/image';

export async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
  return (
    <nav className='relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7 '>
        
        <div className='md:col-span-3'>
        <Link href='/'>
            <Image src='/AMS-logo.png' alt="Aesthetic Medicine and Surgery" width='75' height='75'/>
        </Link>
        </div>
        <div>
            <NavbarLinks />
        </div>

        <div className='flex items-center gap-x-2 ms-auto md:col-span-3'>
            {user 
            ? (
                <UserNav email={user.email as string} name={user.given_name as string} userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`} />
                ) 
            : (                
                <div>
                    {/* asChild */}
                    <div><h1>For Medical Students</h1></div>
                    <div className='flex items-center gap-x-2'> 

                    <Button variant={'secondary'}><LoginLink>Login</LoginLink></Button>
                    <Button variant={'secondary'}><RegisterLink>Register</RegisterLink></Button>
                    </div>
                    
                </div>
                )}
        </div>
        <div className='md:hidden pl-2 pt-5'>
            <MobileMenu />
        </div>
    </nav>
  )
}

