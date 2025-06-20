import React, { useState} from 'react'

export const Hero = ({ setearNombre, inicioRef}) => {
  const [nombre, setNombre] = useState("")

  const handleSubmit = () => {
    if (nombre.trim() !== "") {
      localStorage.setItem("nombreJugador", nombre)
      setearNombre(nombre)
      alert("Bienvenido " + nombre + ", tu nombre ha sido guardado correctamente.")
      setNombre("")
    }
  }

  return (
    <div ref={inicioRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 pt-40 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-6 gap-12">
          <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Descúbrenos
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mt-2"></div>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Conoce tu valor de mercado como jugador de fútbol analizando tu rendimiento histórico.
              </p>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Evalúa también tu estado psicológico antes de cada partido.
              </p>
            </div>

            <p className="text-xl md:text-2xl text-slate-800 font-bold">
              Ingresa tu nombre para mejorar tu experiencia.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-6 space-y-4 max-w-md border border-yellow-100">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Tu nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Fulano"
                className="w-full h-12 px-4 py-2 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full h-12 text-lg font-bold bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              ⚽ Registrar nombre
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-30 transform rotate-6"></div>
            <img
              className="relative h-80 w-80 md:h-96 md:w-96 object-cover rounded-2xl shadow-2xl border-4 border-white/50"
              src="messi_campeon.png"
              alt="Messi Campeón"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              🏆 Campeón
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
