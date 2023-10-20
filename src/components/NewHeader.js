import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const NewHeader = () => {


  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/application');
  };

  const home = () => {
    navigate('/');
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };


  const smoothScrollTo = (targetId) =>{
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (

  
            
    <nav className='p-5 bg-white sticky top-0 z-10 shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <span className='text-xl font-Georgia cursor-pointer'>
          <img
            src='./assets/mmslogo.png'
            className='h-8 md:h-10 lg:h-14 inline cursor-pointer'
            alt='MMS Logo'
            onClick={home}
          />
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
          <a 
          onClick={home}
          className='text-sm duration-500 font-Georgia cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Home
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a
          onClick={() => smoothScrollTo('Jobs')}
          className='text-sm duration-500 
            font-Georgia cursor-pointer
           hover:text-white
           hover:bg-blue-200 p-1'>
            Job Seekers
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a 
           onClick={() => smoothScrollTo('Employers')} 
          className='text-sm duration-500 font-Georgia cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Employers
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a 
          onClick={() => smoothScrollTo('About')}
          className='text-sm duration-500 font-Georgia cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            About
          </a>
        </li>

        <li className='mx-4 my-6 md:my-0'>
          <a 
           onClick={() => smoothScrollTo('Contact')}
          className='text-sm duration-500 font-Georgia cursor-pointer hover:text-white hover:bg-blue-200 p-1'>
            Contact Us
          </a>
        </li>

        <button 
        className='bg-blue-200
         text-white font-Georgia 
         rounded-sm hover:bg-blue-300 
         duration-500 py-2 px-6 mx-4'
         onClick={handleApplyClick}>
          Apply Today
        </button>
      </ul>
    </nav>

   
  );
};

export default NewHeader;
