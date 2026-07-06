'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'tramites' | 'tributos' | 'urbanismo'>('tramites');

  // Datos para los Pilares de Gestión basados en tus Sub-Logos
  const pilares = [
    {
      id: 'cultura',
      titulo: 'Cultura Viva',
      sublogo: '/sub-logo2.png',
      descripcion: 'Preservamos nuestra identidad, festividades y el patrimonio histórico de la Capital de las Flores.',
      color: 'border-tiqui-gold hover:bg-tiqui-gold/5',
      badge: 'text-tiqui-gold bg-tiqui-gold/10'
    },
    {
      id: 'turismo',
      titulo: 'Turismo Sostenible',
      sublogo: '/sub-logo3.png',
      descripcion: 'Explora los encantos naturales de Tiquipaya, desde los valles templados hasta las alturas del Tunari.',
      color: 'border-tiqui-blue hover:bg-tiqui-blue/5',
      badge: 'text-tiqui-blue bg-tiqui-blue/10'
    },
    {
      id: 'educacion',
      titulo: 'Educación de Calidad',
      sublogo: '/sub-logo4.png',
      descripcion: 'Fortalecemos nuestras escuelas técnicas, bibliotecas y el acceso tecnológico para los jóvenes.',
      color: 'border-tiqui-green hover:bg-tiqui-green/5',
      badge: 'text-tiqui-green bg-tiqui-green/10'
    },
    {
      id: 'futuro',
      titulo: 'Futuro Planificado',
      sublogo: '/sub-logo5.png',
      descripcion: 'Proyectos de desarrollo urbano, alcantarillado e industrialización sustentable para nuestra gente.',
      color: 'border-tiqui-darkgreen hover:bg-tiqui-darkgreen/5',
      badge: 'text-tiqui-darkgreen bg-tiqui-darkgreen/10'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-tiqui-green selection:text-white">
      
      {/* 1. TOP BAR (Estilo Pacto de Alcaldes - Limpio y de alto contraste) */}
      <div className="bg-[#0f7c5d] text-white text-xs py-2 px-6 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-100">Gobierno Autónomo Municipal de Tiquipaya</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-200">Cochabamba - Bolivia</span>
        </div>
        <div className="flex gap-4">
          <a href="#contacto" className="hover:underline text-slate-100">Contacto</a>
          <span>•</span>
          <a href="#transparencia" className="hover:underline text-slate-100 font-bold">Portal de Transparencia</a>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-40 py-4 px-6 md:px-12 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <Image 
            src="/escudo.png" 
            alt="Escudo de Tiquipaya" 
            width={65} 
            height={65} 
            className="object-contain"
            priority
          />
          <div className="hidden sm:block">
            <h1 className="text-sm font-black tracking-tight text-slate-900 leading-none">G.A.M.T.</h1>
            <p className="text-[10px] text-slate-500 font-medium">Tiquipaya donde todo se une</p>
          </div>
        </div>

        {/* Navegación Principal Estilo Pacto (Limpia, espaciada) */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <a href="#pilares" className="hover:text-tiqui-darkgreen transition-colors">Nuestros Ejes</a>
          <a href="#servicios" className="hover:text-tiqui-darkgreen transition-colors">Trámites y Servicios</a>
          <a href="#noticias" className="hover:text-tiqui-darkgreen transition-colors">Noticias</a>
          <a href="#turismo" className="hover:text-tiqui-darkgreen transition-colors">Turismo</a>
        </nav>

        {/* Acceso Directo iGOB (Estilo La Paz, pero refinado y limpio) */}
        <div>
          <a 
            href="#igob" 
            className="inline-flex items-center bg-[#00a2d3] hover:bg-[#00a2d3]/90 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            iGOB Tiquipaya 24/7
          </a>
        </div>
      </header>

      {/* 3. HERO SECTION (Fusión de estilo: tipografía imponente y logo integrado) */}
      <section className="relative bg-gradient-to-br from-[#0f7c5d]/10 via-white to-[#00a2d3]/5 py-20 px-6 md:px-12 overflow-hidden border-b border-slate-100">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-[-12]">
          {/* Fondo decorativo con el sublogo principal */}
          <Image src="/sub-logo1.png" alt="Diseño de Fondo" width={600} height={600} className="object-contain" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 bg-[#3bb64e]/10 text-[#0f7c5d] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#3bb64e] animate-pulse"></span>
              Gestión Municipal Activa
            </span>
            
            {/* Logo de Tiquipaya incrustado con el eslogan */}
            <div className="py-2">
              <Image 
                src="/logo.png" 
                alt="Tiquipaya Donde todo se une" 
                width={380} 
                height={150} 
                className="object-contain"
                priority
              />
            </div>

            <p className="text-lg text-slate-600 max-w-xl font-light leading-relaxed">
              Bienvenidos al portal digital del Gobierno Autónomo Municipal de Tiquipaya. Un espacio diseñado para facilitar tus trámites ciudadanos, promover nuestro turismo y construir juntos un municipio verde, tecnológico y transparente.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#servicios" 
                className="bg-[#0f7c5d] hover:bg-[#0f7c5d]/90 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Trámites y Servicios En Línea
              </a>
              <a 
                href="#pilares" 
                className="bg-transparent hover:bg-slate-100 text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold transition-all"
              >
                Conoce Nuestra Gestión
              </a>
            </div>
          </div>

          {/* Banner visual interactivo a la derecha */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3bb64e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#00a2d3] bg-[#00a2d3]/10 px-2.5 py-1 rounded">Especial Flores</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Tiquipaya en Línea</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Accede a los sistemas tributarios, seguimiento de trámites catastrales, y licencias ambientales desde la comodidad de tu hogar.
                </p>
              </div>

              {/* Utiliza el sublogo decorativo principal */}
              <div className="my-4 flex justify-center z-10 transition-transform duration-500 group-hover:scale-105">
                <Image src="/sub-logo1.png" alt="Pilar Tiquipaya" width={220} height={100} className="object-contain" />
              </div>

              <div className="flex justify-between items-center border-t border-slate-100 pt-4 z-10">
                <span className="text-xs font-bold text-slate-400">GAMT DIGITAL</span>
                <span className="text-[#0f7c5d] font-bold text-xs inline-flex items-center gap-1">
                  iGOB Ciudadano &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILARES DE GESTIÓN (Tiled layout inspirado en los Sublogos) */}
      <section id="pilares" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Pilares que nos unen
            </h2>
            <div className="h-1.5 w-20 bg-[#e3af37] mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              A través de nuestras marcas y sub-logos de identidad reflejamos los ejes fundamentales de nuestra administración para Tiquipaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar) => (
              <div 
                key={pilar.id} 
                className={`bg-white border-t-4 ${pilar.color} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src={pilar.sublogo} 
                      alt={pilar.titulo} 
                      width={180} 
                      height={80} 
                      className="object-contain h-16" 
                    />
                  </div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${pilar.badge} mb-3`}>
                    {pilar.titulo}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pilar.descripcion}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <a href={`#${pilar.id}`} className="text-xs font-bold text-slate-700 hover:text-[#0f7c5d] flex items-center justify-between">
                    <span>Ver proyectos</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE TRÁMITES (Estilo La Paz, con pestañas dinámicas pero con diseño aireado de Pacto) */}
      <section id="servicios" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00a2d3]">Ciudadanía 24/7</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Trámites y Servicios Municipales</h2>
              <p className="text-slate-500 text-sm mt-2">Evita filas y tiempos de espera. Gestiona todo en nuestra ventanilla única virtual.</p>
            </div>
            
            {/* Pestañas de selección rápida */}
            <div className="flex bg-slate-100 p-1.5 rounded-xl self-start md:self-auto shadow-inner">
              <button 
                onClick={() => setActiveTab('tramites')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'tramites' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Generales
              </button>
              <button 
                onClick={() => setActiveTab('tributos')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'tributos' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Impuestos (ATM)
              </button>
              <button 
                onClick={() => setActiveTab('urbanismo')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'urbanismo' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Catastro
              </button>
            </div>
          </div>

          {/* Tarjetas dinámicas basadas en la pestaña activa */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-inner">
            {activeTab === 'tramites' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3bb64e]"></span>
                    Trámites Frecuentes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-medium text-slate-700">Licencias de Funcionamiento de Actividad Económica</span>
                      <a href="#" className="text-xs font-bold text-[#0f7c5d] hover:underline">Iniciar &rarr;</a>
                    </li>
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-medium text-slate-700">Certificado de Registro Ambiental (Ficha Ambiental)</span>
                      <a href="#" className="text-xs font-bold text-[#0f7c5d] hover:underline">Requisitos</a>
                    </li>
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-medium text-slate-700">Inscripción y Transferencia de Vehículos</span>
                      <a href="#" className="text-xs font-bold text-[#0f7c5d] hover:underline">Iniciar &rarr;</a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col justify-between">
                  <div>
                    <span className="bg-[#3bb64e]/10 text-[#0f7c5d] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Requisitos Digitales</span>
                    <h4 className="text-lg font-bold text-slate-900 mt-3">¿Qué necesitas para trámites en línea?</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Para la mayoría de los trámites mediante nuestro portal iGOB, requerirás tu Cédula de Identidad escaneada en formato PDF y tu firma digital o token correspondiente para validación de personería.
                    </p>
                  </div>
                  <a href="#" className="text-xs font-semibold text-[#00a2d3] hover:underline mt-4 inline-block">
                    Aprende cómo registrarte en iGOB &rarr;
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'tributos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e3af37]"></span>
                    Consulta de Tasas e Impuestos
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm">
                      <span className="text-xs font-medium text-slate-700">Impuesto a la Propiedad de Bienes Inmuebles</span>
                      <a href="#" className="text-xs font-bold text-[#e3af37] hover:underline">Consultar</a>
                    </li>
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm">
                      <span className="text-xs font-medium text-slate-700">Impuesto a los Vehículos Automotores</span>
                      <a href="#" className="text-xs font-bold text-[#e3af37] hover:underline">Consultar</a>
                    </li>
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm">
                      <span className="text-xs font-medium text-slate-700">Patente Anual de Funcionamiento Comercial</span>
                      <a href="#" className="text-xs font-bold text-[#e3af37] hover:underline">Consultar</a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col justify-between">
                  <div>
                    <span className="bg-[#e3af37]/10 text-[#e3af37] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Beneficio Tributario</span>
                    <h4 className="text-lg font-bold text-slate-900 mt-3">Descuentos por pago pronto</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      El Gobierno Autónomo Municipal de Tiquipaya incentiva el pago puntual con descuentos de hasta el 10% en tus impuestos de bienes e inmuebles de la gestión correspondiente.
                    </p>
                  </div>
                  <a href="#" className="text-xs font-semibold text-[#0f7c5d] hover:underline mt-4 inline-block">
                    Ver cronograma de vencimientos &rarr;
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'urbanismo' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00a2d3]"></span>
                    Catastro y Regularizaciones
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm">
                      <span className="text-xs font-medium text-slate-700">Certificación catastral y planimetrías</span>
                      <a href="#" className="text-xs font-bold text-[#00a2d3] hover:underline">Requisitos</a>
                    </li>
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm">
                      <span className="text-xs font-medium text-slate-700">Aprobación de Planos de Construcción</span>
                      <a href="#" className="text-xs font-bold text-[#00a2d3] hover:underline">Seguimiento</a>
                    </li>
                    <li className="flex justify-between items-center p-3.5 bg-white rounded-xl shadow-sm">
                      <span className="text-xs font-medium text-slate-700">Línea y Nivelación Urbana</span>
                      <a href="#" className="text-xs font-bold text-[#00a2d3] hover:underline">Solicitar</a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col justify-between">
                  <div>
                    <span className="bg-[#00a2d3]/10 text-[#00a2d3] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Información Geográfica</span>
                    <h4 className="text-lg font-bold text-slate-900 mt-3">Geoportal de Tiquipaya</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Accede a nuestro mapa territorial interactivo para revisar la delimitación urbana, distritos catastrales y las zonas protegidas del parque nacional.
                    </p>
                  </div>
                  <a href="#" className="text-xs font-semibold text-[#00a2d3] hover:underline mt-4 inline-block">
                    Abrir Geoportal &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. BANNER DE CONTACTO / EMERGENCIAS (Acceso inmediato fundamental en portales de gobierno) */}
      <section className="bg-slate-900 text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-5">
          <Image src="/escudo.png" alt="Escudo de Tiquipaya" width={300} height={300} className="object-contain" />
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              ¿Tienes una emergencia en el municipio?
            </h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-lg leading-relaxed">
              El Retén de Emergencias Municipales y la red de ambulancias están disponibles para brindar asistencia en inundaciones, incidentes viales y desastres naturales.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur border border-white/10 px-6 py-3.5 rounded-2xl text-center shadow-lg min-w-[150px]">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Urgencias GAMT</span>
              <span className="text-2xl font-black text-[#e3af37]">114</span>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/10 px-6 py-3.5 rounded-2xl text-center shadow-lg min-w-[150px]">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Ambulancias</span>
              <span className="text-2xl font-black text-rose-500">167</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="contacto" className="bg-slate-950 text-slate-400 py-16 px-6 md:px-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          {/* Columna 1: Gobierno e Identidad */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/escudo.png" alt="Escudo de Tiquipaya" width={45} height={45} className="object-contain" />
              <div>
                <span className="block font-bold text-white tracking-wider text-xs">G.A.M.T.</span>
                <span className="text-[10px] text-slate-500">Donde todo se une</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Órgano ejecutivo del municipio de Tiquipaya, Cochabamba. Promoviendo el bienestar de todos los tiquipayeños.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">La Institución</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Alcalde Municipal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concejo Municipal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planes de Desarrollo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Convocatorias y Licitaciones</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Trámites Populares</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Pago de Impuestos en línea</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catastro y Planos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ventanilla Única Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estado de Trámite</a></li>
            </ul>
          </div>

          {/* Columna 4: Ubicación y Contacto */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Contacto Directo</h4>
            <p className="text-xs leading-relaxed text-slate-500">
              📍 Plaza Principal 23 de Septiembre, Edificio Central GAMT. Tiquipaya, Bolivia.
            </p>
            <p className="text-xs text-slate-500">
              📞 Central Telefónica: +591 (4) 4315150
            </p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>© {new Date().getFullYear()} Gobierno Autónomo Municipal de Tiquipaya. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Políticas de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:underline">Términos de Uso</a>
          </div>
        </div>
      </footer>

    </div>
  );
}