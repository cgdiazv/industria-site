import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  return (
    <section className="py-20 px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Tus Marcas Favoritas */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-[350px] mb-8 overflow-hidden">
            <Image 
              src="/familia.webp" 
              alt="Familia disfrutando productos" 
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-[#ed3237] text-3xl font-bold mb-4">
            Tus Marcas Favoritas
          </h2>
          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
            Industria Alimenticia S.A. de C.V. tiene una cartera incomparable de marcas insuperables y exquisitas.
          </p>
          <Link 
            href="/marcas" 
            className="border-2 border-[#ed3237] !text-[#ed3237] px-10 py-2.5 rounded-full font-bold uppercase tracking-wide hover:bg-[#ed3237] !hover:text-white transition-all duration-300"
          >
            Conocer Más
          </Link>
        </div>

        {/* Right Column: Una Historia de Sabores */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-[350px] mb-8 overflow-hidden">
            <Image 
              src="/productos.webp" 
              alt="Variedad de productos" 
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-[#ed3237] text-3xl font-bold mb-4">
            Una Historia de Sabores
          </h2>
          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
            En Industria Alimenticia S.A. de C.V. somos implacables en nuestra búsqueda para transformar la industria alimentaria. Conozca un poco más acerca de nuestra historia.
          </p>
          <Link 
            href="/historia" 
            className="border-2 border-[#ed3237] !text-[#ed3237] px-10 py-2.5 rounded-full font-bold uppercase tracking-wide hover:bg-[#ed3237] !hover:text-white transition-all duration-300"
          >
            Conocer Más
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Features;