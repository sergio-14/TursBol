import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded-xl" alt="hero"  src="./iglesia-trinidad.jpg"/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Santisima Trinidad
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    ¡Descubre la majestuosidad y la historia en la Catedral de la Santísima Trinidad en Bolivia! Sumérgete en 
                    la belleza arquitectónica de este monumento que ha resistido el paso del tiempo y sigue siendo un símbolo de 
                    la fe y la cultura boliviana. Admira sus imponentes torres, sus intrincados detalles y sus impresionantes obras
                     de arte religioso en su interior. Déjate llevar por la serenidad y la espiritualidad que emana de este lugar 
                     sagrado mientras exploras sus pasillos y capillas. Ya sea que seas un amante de la historia, un devoto religioso
                      o simplemente un viajero en busca de experiencias únicas, la Catedral de la Santísima Trinidad te espera para 
                      ofrecerte una experiencia inolvidable en tu viaje por Bolivia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;