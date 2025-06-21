import React from 'react'
import { useState, useEffect } from 'react'
import { Caracteristicas } from './CaracteristicasJugador/Caracteristicas'

export const PrecioJugador = ({ nombre, precioRef }) => {
  const [nombreJugador, setNewNombre] = useState("Jugador")
  useEffect(() => {
    setNewNombre(nombre)
  }, [nombre])
  return (
    <div ref={precioRef} className='min-h-screen bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 relative overflow-hidden'>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-xl"></div>
      </div>

      <div className='relative z-10 px-6 py-16 lg:py-24'>
        <div className='max-w-7xl mx-auto'>
          <article className='flex flex-col gap-6 text-center mb-16 max-w-4xl mx-auto'>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>

            <h1 className="font-extrabold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Averigua tu
              <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Precio de Mercado
              </span>
            </h1>

            <p className='text-lg lg:text-xl text-white/90 leading-relaxed font-medium'>
              Ingresa tus características como jugador —edad, posición, goles, asistencias, minutos jugados, entre otras— y nuestro sistema estimará tu valor de mercado comparándote con futbolistas reales y su rendimiento profesional.
            </p>

            {/* Stats Preview */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="font-semibold">Análisis Profesional</span>
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Predicción Precisa</span>
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="font-semibold">Datos Reales</span>
                </div>
              </div>
            </div>
          </article>

          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <Caracteristicas nombreJugador={nombreJugador} />
          </div>
        </div>
      </div>
    </div>
  )
}