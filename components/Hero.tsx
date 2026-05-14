import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header.webp')" }}
      >
        {/* Dark overlay to match image_78ac13.jpg style */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-10">
        <div className="max-w-4xl text-white">
          {/* Hero Title with collapsed line height */}
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
            El sabor está en <br /> tus manos
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl font-light">
            Las mejores salsas y condimentos
          </p>

          <div className="mt-10">
            <Link 
              href="/contactenos" 
              className="inline-block bg-[#ed3237] text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Comprar Ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;