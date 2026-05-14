"use client";

import { useState } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import Footer from '@/components/Footer';
import { Phone, Smartphone, Mail, MapPin } from 'lucide-react';

export default function ContactoPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);
    
    if (result.success) {
      setStatus("¡Mensaje enviado con éxito!");
    } else {
      setStatus("Hubo un error. Intente de nuevo.");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[400px] w-full flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/header1.webp')]"
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 px-10 md:px-20 text-white">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Contáctenos
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light italic">
            Estamos listos para atender sus consultas y pedidos.
          </p>
        </div>
      </section>

      {/* 2. INFO & MAP SECTION */}
      <section className="py-16 px-10 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <Phone className="w-8 h-8 text-black" />
            <span className="text-xl font-medium">PBX: (504) 2551-01-59</span>
          </div>
          <div className="flex items-center gap-6">
            <Smartphone className="w-8 h-8 text-black" />
            <span className="text-xl font-medium">SAC: (504) 3290-9062</span>
          </div>
          <div className="flex items-center gap-6">
            <Mail className="w-8 h-8 text-black" />
            <span className="text-xl font-medium">Servicio al Cliente</span>
          </div>
          <div className="flex items-center gap-6">
            <MapPin className="w-8 h-8 text-black" />
            <span className="text-xl font-medium leading-tight">
              Prolongación Ave. Junior, 10 Cll 4 Ave N.E.
            </span>
          </div>
        </div>

        <div className="h-[350px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.385542289643!2d-88.0185!3d15.5123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzQ0LjMiTiA4OMKwMDEnMDYuNiJX!5e0!3m2!1sen!2shn!4v1715712000000!5m2!1sen!2shn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
      </section>

      {/* 3. FORM SECTION */}
<section className="pb-20 px-10 md:px-20 max-w-4xl mx-auto">
  <form action={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input 
        name="name" 
        placeholder="Nombre" 
        required 
        className="w-full px-8 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-[#ed3237] text-gray-700 transition-all" 
      />
      <input 
        name="email" 
        type="email" 
        placeholder="Email" 
        required 
        className="w-full px-8 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-[#ed3237] text-gray-700 transition-all" 
      />
    </div>
    
    {/* Note: Textareas use 'rounded-3xl' instead of 'rounded-full' to maintain a box-like shape while staying curved */}
    <textarea 
      name="message" 
      placeholder="Mensaje" 
      rows={5} 
      required
      className="w-full px-8 py-6 border border-gray-300 rounded-[2rem] focus:outline-none focus:border-[#ed3237] text-gray-700 transition-all resize-none"
    ></textarea>
    
    <button 
      type="submit" 
      disabled={isPending}
      className="w-full bg-black text-white font-bold py-4 rounded-full uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95 disabled:bg-gray-400"
    >
      {isPending ? "Enviando..." : "Enviar Mensaje"}
    </button>
    
    {status && (
      <p className={`text-center mt-4 font-bold ${status.includes("éxito") ? "text-green-600" : "text-[#ed3237]"}`}>
        {status}
      </p>
    )}
  </form>
</section>

      {/* 4. FOOTER SECTION */}
      <Footer />
    </main>
  );
}