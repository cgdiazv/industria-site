"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 md:py-5 bg-white border-b border-gray-100 sticky top-0 z-50 max-w-7xl mx-auto w-full md:mt-4 md:rounded-2xl">
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/">
            <Image 
              src="/logo.webp" 
              alt="Logo" 
              width={160} 
              height={60} 
              priority 
              className="object-contain w-[120px] md:w-[160px]"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <button 
            className="md:hidden p-2 -mr-2 text-gray-800 hover:text-[#ed3237] transition-colors"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>

          {/* Desktop Menu Area */}
          <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          <li>
            <Link 
              href="/historia" 
              className="hover:text-[#ed3237] transition-colors duration-300"
            >
              Nuestra Historia
            </Link>
          </li>
          <li>
            <Link 
              href="/marcas" 
              className="hover:text-[#ed3237] transition-colors duration-300"
            >
              Nuestras Marcas
            </Link>
          </li>
          <li>
            <Link 
              href="/contactenos" 
              className="bg-[#ed3237] !text-white px-8 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-md"
            >
              Contáctenos
            </Link>
          </li>
        </ul>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleDrawer}
      ></div>

      {/* Mobile Drawer (Left sliding) */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Image 
            src="/logo.webp" 
            alt="Logo" 
            width={120} 
            height={40} 
            className="object-contain"
          />
          <button 
            onClick={toggleDrawer} 
            className="p-2 -mr-2 text-gray-500 hover:text-[#ed3237] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-5 gap-6 text-gray-800 font-medium text-lg">
          <li>
            <Link 
              href="/historia" 
              className="hover:text-[#ed3237] transition-colors duration-300 block"
              onClick={toggleDrawer}
            >
              Nuestra Historia
            </Link>
          </li>
          <li>
            <Link 
              href="/marcas" 
              className="hover:text-[#ed3237] transition-colors duration-300 block"
              onClick={toggleDrawer}
            >
              Nuestras Marcas
            </Link>
          </li>
          <li className="pt-4 border-t border-gray-100">
            <Link 
              href="/contactenos" 
              className="bg-[#ed3237] !text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all text-center block shadow-md"
              onClick={toggleDrawer}
            >
              Contáctenos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;