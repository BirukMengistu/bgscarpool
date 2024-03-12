import React from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Search, PlusCircle, LogOut, User } from "lucide-react";
/* import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import LoginSignupDialog from "./LoginSignupDialog"; */
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
export default function Header() {
  //const isGuest = true;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background mx-auto flex p-3 lg:px-16 items-center justify-end">
      <NavLink to="/" className="inline-flex -order-1 items-center gap-2">
        <img src={Logo} width={38} alt="RideShare" />
        <h1 className="font-bold text-xl text-primary hidden sm:block">
          BGS-Ride
        </h1>
      </NavLink>
      <nav className="ml-auto flex items-center  mx-4 text-base justify-center">
        <NavLink
          to="/search"
          className="flex justify-center px-4 items-center hover:text-primary "
        >
          <Search className="h-5 w-6" /> Search
        </NavLink>
        <NavLink
          to="/offer-seat"
          className="flex items-center p-2  border-1 rounded-sm border-secondary text-white "
        >
          <PlusCircle className="h-5 w-6 text-white" /> Publish a Ride
        </NavLink>
      </nav>
      <div>
        <SignedOut>
          <div  className='bg-primary rounded-sm p-1'>
           < SignInButton style={{ color:'white' , paddingHorizontal: '2rem',}} children='Login'/>
           </div>
        </SignedOut>
          
          
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/*   {isGuest ?
   
      <LoginSignupDialog/>
      :
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/profile" className="flex">
              <User className="mr-2 h-4 w-4"/><span>Profile</span>
            </Link>
            </DropdownMenuItem>
          <DropdownMenuItem><LogOut className="mr-2 h-4 w-4"/><span>Log Out</span></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>} */}
      </div>
    </header>
  );
}
{
  /* <SignedOut>
<SignInButton />
</SignedOut>
<SignedIn>
<UserButton />
</SignedIn> */
}
