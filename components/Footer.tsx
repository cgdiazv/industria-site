import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Automatically gets the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ed3237] text-white py-12 flex flex-col items-center text-center px-6">
      {/* Social Media Icons */}
      <div className="flex gap-6 mb-8">
        <a href="https://www.facebook.com/profile.php?id=100064555129620" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <FaFacebook className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/laexperta_hn/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <FaInstagram className="w-8 h-8" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-8 mb-8 font-bold uppercase tracking-wide">
        <li>
          <Link href="/historia" className="hover:underline">
            Nuestra Historia
          </Link>
        </li>
        <li>
          <Link href="/marcas" className="hover:underline">
            Nuestras Marcas
          </Link>
        </li>
        <li>
          <Link href="/contactenos" className="hover:underline">
            Contáctenos
          </Link>
        </li>
      </ul>

      {/* Dynamic Copyright */}
      <p className="text-sm mb-8 font-light">
        © {currentYear} Industria Alimenticia S.A. de C.V. Derechos reservados.
      </p>

      {/* Brand Logo/Text */}
      <div className="mb-4">
        <h3 className="text-3xl font-black leading-tight uppercase tracking-tighter">
          Industria
        </h3>
        <p className="text-xs uppercase tracking-[0.2em] font-medium">
          Alimenticia S.A. de C.V.
        </p>
      </div>

      {/* Developer Credit */}
      <p className="text-[10px] text-white/60 mt-4">
        <a href="https://indevasa.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          Indeva Websites
        </a>
      </p>
    </footer>
  );
};

export default Footer;