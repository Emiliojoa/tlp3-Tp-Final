"use client"

import { CaracteristicasAnimo } from "./CaracteristicasAnimo/CaracteristicasAnimo"

export const EstadoAnimo = ({ animoRef }) => {
  return (
    <div ref={animoRef} className="min-h-screen bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-800 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gray-600 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gray-900 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gray-700 rounded-full blur-xl"></div>
      </div>

      {/* Patrón de puntos decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>

      <div className="relative z-10 px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <article className="flex flex-col gap-8 text-center mb-16 max-w-5xl mx-auto">
            {/* Iconos principales */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="p-5 bg-gray-100 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                <span className="text-3xl">🧠</span>
              </div>
              <div className="p-5 bg-gray-100 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                <span className="text-3xl">📊</span>
              </div>
              <div className="p-5 bg-gray-100 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                <span className="text-3xl">⚡</span>
              </div>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="font-black text-5xl lg:text-7xl text-gray-900 mb-4 leading-none tracking-tight">
                Descubre tu
              </h1>
              <div className="relative inline-block">
                <h2 className="font-black text-5xl lg:text-7xl bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent leading-none tracking-tight">
                  Estado de Ánimo
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full"></div>
              </div>
            </div>

            {/* Descripción principal */}
            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-lg max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                Ingresa tus datos como{" "}
                <span className="bg-gray-200 px-3 py-1 rounded-full font-bold text-gray-800">edad</span>,{" "}
                <span className="bg-gray-200 px-3 py-1 rounded-full font-bold text-gray-800">presión arterial</span>,{" "}
                <span className="bg-gray-200 px-3 py-1 rounded-full font-bold text-gray-800">frecuencia cardíaca</span>{" "}
                y{" "}
                <span className="bg-gray-200 px-3 py-1 rounded-full font-bold text-gray-800">duración de enfoque</span>{" "}
                para que nuestro sistema determine tu estado de ánimo actual.
              </p>
            </div>

            {/* Estados de ánimo posibles */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">😌</div>
                <h3 className="font-black text-lg text-green-800">RELAJADO</h3>
                <p className="text-sm text-green-600 font-semibold mt-2">Estado de calma</p>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">😰</div>
                <h3 className="font-black text-lg text-red-800">ESTRESADO</h3>
                <p className="text-sm text-red-600 font-semibold mt-2">Alta tensión</p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-black text-lg text-blue-800">ENFOCADO</h3>
                <p className="text-sm text-blue-600 font-semibold mt-2">Concentración</p>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">😟</div>
                <h3 className="font-black text-lg text-orange-800">ANSIOSO</h3>
                <p className="text-sm text-orange-600 font-semibold mt-2">Inquietud</p>
              </div>
            </div>

            {/* Características del sistema */}
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <div className="bg-white border-2 border-gray-300 rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 text-gray-800">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💓</span>
                  </div>
                  <div className="text-left">
                    <span className="font-black text-lg block">Análisis Fisiológico</span>
                    <span className="text-sm text-gray-600 font-semibold">Datos médicos precisos</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 text-gray-800">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="text-left">
                    <span className="font-black text-lg block">Predicción Precisa</span>
                    <span className="text-sm text-gray-600 font-semibold">Algoritmos avanzados</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 text-gray-800">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="text-left">
                    <span className="font-black text-lg block">Basado en Datos</span>
                    <span className="text-sm text-gray-600 font-semibold">Información confiable</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Componente del formulario */}
          <div className="transform hover:scale-[1.01] transition-transform duration-500">
            <CaracteristicasAnimo />
          </div>
        </div>
      </div>
    </div>
  )
}
