import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (

  
            
    <nav className='p-5 bg-white sticky top-0 z-10 shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <span className='text-xl font-serif cursor-pointer'>
          <img src='./assets/mmslogo.png' className='h-6 inline' />
        </span>

        <div className='cursor-pointer mx-2 md:hidden block'>
          <button onClick={toggleNavBar}>
            {isOpen ? <X className='text-black' /> : <Menu className='text-black' />}
          </button>
        </div>
      </div>

      <ul
        className={`md:flex md:items-center z-10 md:z-auto 
          md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 
          md:pl-0 pl-7 md:opacity-100 opacity-0 top-300px] transition-all ease-in duration-500
          ${isOpen ? 'top-14 opacity-100' : ''}`}
      >
        <li className='mx-4 my-6 md:my-0'>
          <a href='#Home' className='text-sm duration-500 font-serif cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Home
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a href='#Jobs ' className='text-sm duration-500 font-serif cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Job Seekers
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a href='#Employers' className='text-sm duration-500 font-serif cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Employers
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a href='#about' className='text-sm duration-500 font-serif cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            About
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a href='#contact' className='text-sm duration-500 font-serif cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Contact Us
          </a>
        </li>

        <button className='bg-blue-200 text-white font-serif rounded-sm hover:bg-blue-300 duration-500 py-2 px-6 mx-4'>
          Apply Today
        </button>
      </ul>
    </nav>

   
  );
};

export default NewHeader;