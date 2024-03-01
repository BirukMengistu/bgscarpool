import React from 'react'
import LoginSignupDialog from '../Components/LoginSignupDialog'
import Logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
import { Search, PlusCircle, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage  } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
export default function Header() {
    const isGuest = false;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background mx-auto flex p-3 lg:px-16 items-center justify-end">
    <NavLink to="/" className="inline-flex -order-1 items-center gap-2">
      <img src={Logo} width={38} alt="RideShare" />
      <h1 className="font-bold text-xl text-primary hidden sm:block">BGS-Ride</h1>
    </NavLink>
    <nav className="ml-auto flex items-center  mx-4 text-base justify-center">
      <NavLink to="/search" className="flex justify-center px-4 items-center hover:text-primary ">
        <Search className="h-4 w-4"/> Search
        </NavLink>
      <NavLink to="/offer-seat" className="flex items-center px-4  hover:text-primary"> 
      <PlusCircle className="h-4 w-4"/> Publish a ride</NavLink>
    </nav>
    <div>
    {isGuest ?
      <LoginSignupDialog />
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
      </DropdownMenu>}
    </div>
    
    
  </header>
  )
}
