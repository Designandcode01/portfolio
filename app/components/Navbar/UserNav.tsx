import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";



interface iAppProps {
    email: string,
    name: string,
    userImage: string | undefined;
}
export function UserNav({email, name, userImage}: iAppProps) {
    return (
        <div>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={userImage} alt="User Image" />
                            <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
                        </Avatar> 
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{name}</p>
                            <p className="text-xs leading-none text-muted-foreground">{email} </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem><Link href='/generalAnatomy'>General Anatomy</Link> </DropdownMenuItem>
                        <DropdownMenuItem><Link href='/generalEmbryology'>General Embryology</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href='/generalHistology'>General Histology</Link></DropdownMenuItem>
                        {/* <DropdownMenuItem>Test Item 4</DropdownMenuItem> */}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <LogoutLink>Log out</LogoutLink> 
                        </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}