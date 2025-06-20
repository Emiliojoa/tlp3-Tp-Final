import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { 
  User, 
  Trophy, 
  Target, 
  Activity, 
  Clock, 
  Heart, 
  Award,
  Calculator,
  ChevronDown,
  AlertCircle,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'
import { predecirValor } from '../../services/modelos_predictivos.services'

export const Caracteristicas = ({ nombreJugador }) => {
  const [precio, setPrecio] = useState(null)
  const [posicion, setPosicion] = useState("1")
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    setPrecio(null)
    
    if (posicion !== "1") {
      data.goles_concedidos = 0
      data.porterias_a_cero = 0
    }

    try {
      const response = await predecirValor(data)
      setPrecio(response.prediction)
    } catch (error) {
      console.error('Error predicting value:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePosicionChange = (e) => {
    setPosicion(e.target.value)
  }

  const positionConfig = {
    "1": { name: "Arquero", icon: Shield, color: "text-green-600" },
    "2": { name: "Defensor", icon: Shield, color: "text-blue-600" },
    "3": { name: "Mediocampista", icon: Activity, color: "text-purple-600" },
    "4": { name: "Delantero", icon: Target, color: "text-red-600" }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Información del Jugador</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Position Selector */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className={`p-1 rounded ${positionConfig[posicion]?.color}`}>
                    {React.createElement(positionConfig[posicion]?.icon, { size: 16 })}
                  </div>
                  Posición
                </label>
                <div className="relative">
                  <select
                    {...register('posicion_codificada')}
                    className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    onChange={handlePosicionChange}
                    defaultValue="1"
                  >
                    <option value="1">🥅 Arquero</option>
                    <option value="2">🛡️ Defensor</option>
                    <option value="3">⚡ Mediocampista</option>
                    <option value="4">🎯 Delantero</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <InputCampo
                label="Altura (cm)"
                name="altura"
                icon={Activity}
                register={register}
                rules={{
                  required: 'La altura es obligatoria',
                  min: { value: 120, message: 'Mínimo 120 cm' },
                  max: { value: 250, message: 'Máximo 250 cm' },
                  validate: (value) =>
                    Number.isInteger(Number(value)) || 'Debe ser un número entero'
                }}
                errors={errors}
              />

              <InputCampo
                label="Edad"
                name="edad"
                icon={User}
                register={register}
                rules={{
                  required: 'La edad es obligatoria',
                  min: { value: 12, message: 'Debe ser mayor a 14' },
                  max: { value: 80, message: 'No puede superar los 80 años' }
                }}
                errors={errors}
              />
            </div>
          </div>

          {/* Performance Stats */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl font-semibold text-gray-800">Estadísticas de Rendimiento</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputCampo 
                label="Titularidades" 
                name="apariciones" 
                icon={Activity}
                register={register} 
                rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
              <InputCampo 
                label="Goles" 
                name="goles" 
                icon={Target}
                register={register} 
                rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
              <InputCampo 
                label="Asistencias" 
                name="asistencias" 
                icon={Zap}
                register={register} 
                rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
            </div>

            {posicion === "1" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="col-span-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Estadísticas de Arquero</span>
                  </div>
                </div>
                <InputCampo 
                  label="Goles recibidos" 
                  name="goles_concedidos" 
                  icon={Target}
                  register={register} 
                  rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                  errors={errors}
                  variant="goalkeeper"
                />
                <InputCampo 
                  label="Porterías a cero" 
                  name="porterias_a_cero" 
                  icon={Shield}
                  register={register} 
                  rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                  errors={errors}
                  variant="goalkeeper"
                />
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-semibold text-gray-800">Condición Física y Carrera</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InputCampo 
                label="Minutos jugados" 
                name="minutos_jugados" 
                icon={Clock}
                register={register} 
                rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
              <InputCampo 
                label="Días lesionado" 
                name="dias_lesionado" 
                icon={Heart}
                register={register} 
                rules={{ min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
              <InputCampo 
                label="Partidos perdidos por lesión" 
                name="partidos_perdidos_lesion" 
                icon={AlertCircle}
                register={register} 
                rules={{ min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
              <InputCampo 
                label="Cantidad de premios" 
                name="premios" 
                icon={Award}
                register={register} 
                rules={{ required: 'Campo requerido', min: { value: 0, message: 'Mínimo 0' } }} 
                errors={errors} 
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="w-5 h-5" />
                    Calcular precio de mercado
                  </>
                )}
              </button>

              {/* Result Display */}
              {precio && (
                <div className="w-full max-w-md">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center transform animate-pulse-once">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Valor de Mercado</span>
                    </div>
                    <p className="text-2xl font-bold text-green-900 mb-1">
                      {precio}
                    </p>
                    <p className="text-sm text-green-700">
                      para <span className="font-semibold">{nombreJugador}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const InputCampo = ({ label, name, icon:Icon, register, rules = {}, errors, variant = "default" }) => {
  const hasError = errors[name]
  const baseClasses = "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 pl-11"
  const variantClasses = {
    default: hasError 
      ? "border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50" 
      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-gray-400",
    goalkeeper: hasError 
      ? "border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50" 
      : "border-green-300 focus:ring-green-500 focus:border-green-500 bg-white hover:border-green-400"
  }

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <Icon className="w-4 h-4 text-gray-500" />
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className={`w-5 h-5 ${hasError ? 'text-red-400' : 'text-gray-400'}`} />
        </div>
        <input
          type="number"
          {...register(name, rules)}
          className={`${baseClasses} ${variantClasses[variant]}`}
          placeholder="0"
        />
      </div>
      {hasError && (
        <div className="flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>{hasError.message || 'Este campo es requerido'}</span>
        </div>
      )}
    </div>
  )
}