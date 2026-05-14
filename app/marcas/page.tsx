import Image from 'next/image';
import Footer from '@/components/Footer';

const brands = [
  { name: 'La Experta', image: '/la-experta.webp' },
  { name: 'Dave Jones', image: '/dave-jones.webp' },
  { name: 'Acidita', image: '/acidita.webp' },
  { name: 'Chamoyes', image: '/chamoyes.webp' },
  { name: 'Yangtze River', image: '/yangtze.webp' },
];

export default function MarcasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[400px] w-full flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/header1.webp')]"
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-10 md:px-20 !text-white">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            Nuestras Marcas
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">
            Las mejores salsas y condimentos
          </p>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-20 px-10 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="group flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <div className="relative w-full h-[250px] mb-6 overflow-hidden">
                <Image 
                  src={brand.image} 
                  alt={brand.name} 
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#ed3237] transition-colors">
                {brand.name}
              </h2>
              <div className="mt-4 w-12 h-1 bg-[#ed3237] rounded-full" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}