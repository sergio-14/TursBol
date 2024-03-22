import React from 'react';

const OtherFeatures = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-gray-200 text-center">
                    Trinidad la Hermosa
                </h1>
                <div className="lg:w-5/6 mx-auto">
                    <div className="rounded-lg h-80 overflow-hidden w-full">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="./ruta1.jpg" />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0 border-4 border-gray-300">
                                <img alt="feature" className="object-cover object-center h-full w-full rounded-full" src="./ruta3.jpg" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Comida</h2>
                                <p className="leading-relaxed text-base">
                                    "¡Deléitate con los sabores auténticos de Trinidad! Descubre una explosión de sabores
                                    . Desde platos
                                    tradicionales hasta fusiones creativas, cada comida es una aventura para tu paladar.
                                    ¡Ven y descubre el sabor de Trinidad!"
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-1/3 text-center sm:py-8">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0 border-4 border-gray-300">
                                <img alt="feature" className="object-cover object-center h-full w-full rounded-full" src="./ruta2.jpg" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Lugares</h2>
                                <p className="leading-relaxed text-base">
                                    "Descubre la belleza y la historia en Trinidad, donde cada esquina
                                    cuenta una historia nueva. ¡Sumérgete en la vibrante cultura, la
                                    arquitectura colonial y la calidez de su gente!
                                    ¡Trinidad te espera para vivir experiencias únicas e inolvidables!"
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0 border-4 border-gray-300">
                                <img alt="feature" className="object-cover object-center h-full w-full rounded-full" src="./ruta4.jpg" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Tradicion</h2>
                                <p className="leading-relaxed text-base">
                                    "Sumérgete en las raíces culturales de Trinidad y revive tradiciones.
                                     Desde coloridas celebraciones hasta artesanías únicas y música folclórica vibrante.
                                    ¡Ven y sé parte de las tradiciones que hacen de Trinidad un lugar único en el mundo!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default OtherFeatures;