import { Phone, Smartphone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="relative w-full">
      {/* Red Background Banner (Top Half) */}
      <div className="bg-[#ed3237] h-[250px] w-full flex items-start pt-16 px-5 md:px-20">
  <h2 className="text-white text-3xl md:text-4xl font-bold">
    Comunícate con Nosotros
  </h2>
</div>

      {/* Content Card Area */}
      <div className="max-w-7xl mx-auto px-5 md:px-20 -mt-20 pb-20">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch">
          
          {/* Left Column: Contact Details */}
          <div className="flex-1 p-6 md:p-12 space-y-8">
            <div className="flex items-center gap-6 group">
              <Phone className="text-black w-8 h-8" />
              <span className="text-gray-800 text-xl font-medium">
                PBX: (504) 2551-01-59
              </span>
            </div>

            <div className="flex items-center gap-6 group">
              <Smartphone className="text-black w-8 h-8" />
              <span className="text-gray-800 text-xl font-medium">
                SAC: (504) 3290-9062
              </span>
            </div>

            <div className="flex items-center gap-6 group">
              <Mail className="text-black w-8 h-8" />
              <span className="text-gray-800 text-xl font-medium">
                Servicio al Cliente
              </span>
            </div>

            <div className="flex items-center gap-6 group">
              <MapPin className="text-black w-8 h-8" />
              <span className="text-gray-800 text-xl font-medium">
                Prolongación Ave. Junior, 10 Cll 4 Ave N.E.
              </span>
            </div>
          </div>

          {/* Right Column: The Map */}
          <div className="flex-1 min-h-[400px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.385542289643!2d-88.0185!3d15.5123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzQ0LjMiTiA4OMKwMDEnMDYuNiJX!5e0!3m2!1sen!2shn!4v1715712000000!5m2!1sen!2shn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;