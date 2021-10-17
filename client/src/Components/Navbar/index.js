import React from "react";
import {FaPizzaSlice} from "react-icons/fa";
import {ImLocation, ImGlass} from "react-icons/im";
import {BsSearch} from "react-icons/bs";
import {VscTriangleDown} from "react-icons/vsc";
import {HiOutlineChevronDown} from "react-icons/hi";
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';
import FoodTab from "../FoodTab";

const MoblieNav = () =>{
    return(
        <>
            <div className="items-center justify-between flex w-full  lg:hidden">
                <div className="w-28">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                    />   
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">use app</button>
                    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                        <FaPizzaSlice />
                    </span>
                </div> 
            </div>
        </>
    );
};


const DesktopNav = () => {
    return (
      <>
        <div className='hidden lg:inline container px-32 mx-auto'>
          <div className=' gap-4 w-full lg:flex items-center justify-around '>
            {/* LOGO */}
            <div className='w-28'>
              <img
                src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                alt='logo'
                className='w-full h-full'
              />
            </div>
  
            {/* Middle input */}
            <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded'>
              <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                <span className='text-zomato-300'>
                  <HiLocationMarker />
                </span>
                <input
                  type='text'
                  placeholder='Chittoor'
                  className='focus:outline-none'
                />
                <IoMdArrowDropdown />
              </div>
              <div className='flex w-full items-center gap-2'>
                <RiSearch2Line />
                <input
                  type='text'
                  placeholder='Search for restaurant cusine or a dish'
                  className='w-full focus:outline-none'
                />
              </div>
            </div>
            {/* Avatar*/}
            <div className='relative w-14'>
              <div className='flex gap-5 p-1  w-full h-10 font-medium '>
                <div><a href="#">signIn</a></div>
                <div><a href="#">signOut</a></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  


const LaptopNav = () => {
    return(
        <>
            <div className="hidden md:block  w-full">
                <div className=" container mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center w-3/4">
                        <div className="w-30 h-12 mx-5">
                            <img
                                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                alt="logo"
                                className="w-full h-full"/>
                        </div>
                        <div className="flex shadow border-2 border-gray-100 rounded-lg gap-0 w-full px-3 py-2" style={{}}>
                            <div className="w-full flex items-center bg-white" >
                                <ImLocation className="text-zomato-200 font-medium" style={{width:"100%", height:"25px"}}/>
                                <input type="text" className="w-full focus:outline-none"style={{width:"100%",marginRight:"0px"}} placeholder="city" />
                                <VscTriangleDown style={{width:"100%" , marginLeft:"0px"}}/>
                            </div>
                            <div className="w-full flex items-center bg-white ">
                                <BsSearch className="w-full" style={{width:"100%", height:"20px"}}/>
                                <input type="search" className="w-full focus:outline-none" placeholder="search for restaurant" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <span className="border p-2 border-yellow-300 text-yellow-400 rounded-full">
                            <ImGlass />
                        </span>
                        
                        <h2 className="font-medium">Bhargav</h2>
                        <HiOutlineChevronDown />
                    </div>
                </div>
            </div>
           
        </>
    );
};



const Navbar = () =>{
    return(
        <>
            <nav className="p-4 flex bg-white  shadow-sm items-center">
            <MoblieNav  />
            <DesktopNav />
            
            </nav>
            
            

        </>
    )};


export default Navbar;




/*

<div className=" flex flex-row items-center justify-between w-full sm:hidden md:block">
                <div className="w-20" style={{width:"130px"}}>
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                    />
                </div>
                <div className="flex">
                    <div className="py-3 px-3" style={{marginRight:"0px"}}>   
                        <ImLocation />
                        <input type="text" className="w-full py-3 px-3 border-black" placeholder="city" />
                    </div>
                
                <input type="text" className="w-full py-3 px-3 border-black" placeholder="search for restaurant" />
                </div>
                <div>

                </div>
            </div>

*/

/*

<span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
                        Chittoor
                        <BiChevronDown />
                    </span>
                    <button className="bg-signIn-300 text-white text-sm rounded px-2 py-1">
                    Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>

*/