// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Logo Area */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image 
            src="/logo.webp" 
            alt="Logo" 
            width={160} 
            height={60} 
            priority 
            className="object-contain"
          />
        </Link>
      </div>

      {/* Menu Area - Roboto Medium (500) or Bold (700) */}
      <ul className="flex items-center gap-10 text-gray-800 font-medium">
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
          {/* Accent Color Full Round Button */}
          <Link 
  href="/contactenos" 
  className="bg-[#ed3237] !text-white px-8 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-md"
>
  Contáctenos
</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;