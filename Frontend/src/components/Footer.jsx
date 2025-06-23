import { Github, FileText, Users, Trophy, Target } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-12 right-8 w-8 h-8 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-8 left-1/4 w-12 h-12 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-4 right-1/3 w-6 h-6 border border-gray-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500/20 p-2 rounded-full">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Predi-Fut
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Análisis predictivo avanzado para el rendimiento, valor de mercado y estado anímico de jugadores de fútbol
              profesional.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Target className="w-4 h-4" />
              <span>Predicciones precisas • Análisis en tiempo real</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Equipo de Desarrollo</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50">
                <p className="font-semibold text-gray-200">Emilio Ortiz Malich</p>
                <p className="text-sm text-gray-400">Analista de Datos</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50">
                <p className="font-semibold text-gray-200">Ortega Marcelo David</p>
                <p className="text-sm text-gray-400">Desarrollador Principal</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <FileText className="w-5 h-5 text-yellow-400" />
              <span>Recursos</span>
            </h3>
            <div className="space-y-3">
              <a
                href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html"
                target="_blank"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
                rel="noreferrer"
              >
                <div className="bg-gray-800/50 p-2 rounded-lg group-hover:bg-yellow-400/20 transition-all duration-300 border border-gray-700/50">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Documentación Técnica
                </span>
              </a>
              <a
                href="https://github.com/Emiliojoa/tlp3-Tp-Final.git"
                target="_blank"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
                rel="noreferrer"
              >
                <div className="bg-gray-800/50 p-2 rounded-lg group-hover:bg-yellow-400/20 transition-all duration-300 border border-gray-700/50">
                  <Github className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Repositorio GitHub</span>
              </a>
            </div>

            {/* Estadísticas rápidas */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="text-2xl font-bold text-yellow-400">95%</div>
                <div className="text-xs text-gray-400">Precisión</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs text-gray-400">Análisis</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-black to-gray-800 px-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Predi-Fut. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">Potenciado por inteligencia artificial y análisis de datos avanzado</p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
    </footer>
  )
}
