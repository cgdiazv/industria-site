import Footer from '@/components/Footer';

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section based on image_76e177.jpg */}
      <section className="relative h-[400px] w-full flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/header1.webp')]"
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 px-10 md:px-20 text-white">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Nuestra Historia
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light italic">
            En el hogar todo es más delicioso
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-10 md:px-20">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-800 text-lg leading-relaxed">
          <p className="font-semibold text-xl border-l-4 border-[#ed3237] pl-6 py-2">
            Industria Alimenticia S.A. de C.V. inició como un emprendimiento familiar, ofreciendo salsas y condimentos muy útiles en las cocinas de los hogares, siempre sabiendo que en el hogar todo es más delicioso.
          </p>
          
          <p>
            Fundada en el año 2006, ha ampliado su portafolio de productos satisfaciendo diferentes nichos de mercado logrando establecer las marcas registradas: 
            <span className="font-bold text-[#ed3237]"> La Experta en la Cocina, Dave Jones BBQ, Acidita, Yangtze River y Chamoyes.</span>
          </p>
          
          <p>
            En la actualidad estamos en proceso de exportación a Centro América, el Caribe y al mercado de los Estados Unidos de América con productos emblemáticos para dichos mercados.
          </p>
        </div>
      </section>

      {/* Footer component adds the red brand section and auto-year copyright */}
      <Footer />
    </main>
  );
}