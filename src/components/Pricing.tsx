import React from 'react';

const Pricing = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">¡¡ Solicita tu Mejor Oferta !!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "¡Aprovecha nuestras ofertas exclusivas en Trinidad y haz realidad tus sueños de viaje! Descubre
            paquetes especiales, descuentos irresistibles y experiencias únicas diseñadas para que tu visita sea
            inolvidable. ¡No te pierdas esta oportunidad única de explorar
            Trinidad y sus tesoros a precios increíbles! ¡Reserva ahora y comienza tu aventura hoy mismo!"
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BASIC</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$10</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex-grow text-gray-500">
                "Nuestra oferta básica es la elección ideal para aquellos que desean descubrir
                Trinidad sin exceder su presupuesto. Con comodidades esenciales y acceso a las atracciones principales,
                garantizamos una experiencia satisfactoria y
                accesible. ¡Explora Trinidad y sumérgete en su encanto único sin preocuparte por los costos adicionales!"
              </p>
              <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PROFESSIONAL</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$20</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex-grow text-gray-500">"Experimenta Trinidad con nuestro paquete profesional,
                diseñado para satisfacer las necesidades de los viajeros más exigentes. Disfruta de alojamientos de lujo,
                servicios personalizados y acceso privilegiado a experiencias exclusivas. Con nuestro enfoque profesional.
                "</p>
              <a href="#" className="mt-3 text-white bg-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$30</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex-grow text-gray-500">
                "Sumérgete en una experiencia excepcional en Trinidad con nuestro paquete premium.
                Disfruta de alojamientos de lujo, servicio de primera clase y acceso exclusivo a las
                atracciones más destacadas de la ciudad.
                Desde experiencias gastronómicas únicas hasta actividades personalizadas."
              </p>
              <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing