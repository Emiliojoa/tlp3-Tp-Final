"use client"

import { useState } from "react"
import { predecirAnimo } from "../../services/modelos_predictivos.services.js"

export const CaracteristicasAnimo = () => {
    const [formData, setFormData] = useState({
        Edad: "",
        presion_sistolica: "",
        presion_diastolica: "",
        Frecuencia_Cardiaca_BPM: "",
        Duracion_Enfoque_segundos: "",
        Genero: "male",
    })
    const [prediction, setPrediction] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setPrediction(null)
        setIsLoading(true)

        try {
            const data = {
                ...formData,
                Edad: Number.parseInt(formData.Edad),
                presion_sistolica: Number.parseFloat(formData.presion_sistolica),
                presion_diastolica: Number.parseFloat(formData.presion_diastolica),
                Frecuencia_Cardiaca_BPM: Number.parseInt(formData.Frecuencia_Cardiaca_BPM),
                Duracion_Enfoque_segundos: Number.parseFloat(formData.Duracion_Enfoque_segundos),
            }
            const result = await predecirAnimo(data)
            setPrediction(result[0])
        } catch (err) {
            setError("Error al realizar la predicción. Por favor, revisa los datos.")
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    const getResultStyles = () => {
        if (!prediction) return { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300" }
        switch (prediction.toLowerCase()) {
            case "relajado":
                return { bg: "bg-green-50", text: "text-green-700", border: "border-green-300" }
            case "estresado":
                return { bg: "bg-red-50", text: "text-red-700", border: "border-red-300" }
            case "enfocado":
                return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-300" }
            case "ansioso":
                return { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-300" }
            default:
                return { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-300" }
        }
    }

    const getMoodIcon = () => {
        if (!prediction) return "🤔"
        switch (prediction.toLowerCase()) {
            case "relajado":
                return "😌"
            case "estresado":
                return "😰"
            case "enfocado":
                return "🎯"
            case "ansioso":
                return "😟"
            default:
                return "🤔"
        }
    }

    return (
        <div className="min-h-screen bg-amber-400 p-4 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                        <span className="text-3xl">🧠</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Predictor de Estado de Ánimo</h1>
                    <p className="text-gray-700 text-lg font-medium">
                        Ingresa tus datos fisiológicos para conocer tu estado emocional
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-200 mb-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Edad */}
                            <div className="group">
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="Edad"
                                        value={formData.Edad}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-amber-50 text-gray-800 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:bg-white transition-all duration-300 px-4 py-4 peer placeholder-transparent outline-none"
                                        placeholder="Edad"
                                        min="1"
                                        max="120"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-amber-600 text-sm font-bold bg-white px-2 rounded">
                                        👤 Edad (años)
                                    </label>
                                </div>
                            </div>

                            {/* Presión Sistólica */}
                            <div className="group">
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="0.1"
                                        name="presion_sistolica"
                                        value={formData.presion_sistolica}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-amber-50 text-gray-800 rounded-xl border-2 border-amber-200 focus:border-red-500 focus:bg-white transition-all duration-300 px-4 py-4 peer placeholder-transparent outline-none"
                                        placeholder="Presión Sistólica"
                                        min="70"
                                        max="250"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-red-600 text-sm font-bold bg-white px-2 rounded">
                                        💓 Presión Sistólica (mmHg)
                                    </label>
                                </div>
                            </div>

                            {/* Presión Diastólica */}
                            <div className="group">
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="0.1"
                                        name="presion_diastolica"
                                        value={formData.presion_diastolica}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-amber-50 text-gray-800 rounded-xl border-2 border-amber-200 focus:border-pink-500 focus:bg-white transition-all duration-300 px-4 py-4 peer placeholder-transparent outline-none"
                                        placeholder="Presión Diastólica"
                                        min="40"
                                        max="150"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-pink-600 text-sm font-bold bg-white px-2 rounded">
                                        💗 Presión Diastólica (mmHg)
                                    </label>
                                </div>
                            </div>

                            {/* Frecuencia Cardíaca */}
                            <div className="group">
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="Frecuencia_Cardiaca_BPM"
                                        value={formData.Frecuencia_Cardiaca_BPM}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-amber-50 text-gray-800 rounded-xl border-2 border-amber-200 focus:border-green-500 focus:bg-white transition-all duration-300 px-4 py-4 peer placeholder-transparent outline-none"
                                        placeholder="Frecuencia Cardíaca"
                                        min="30"
                                        max="220"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-green-600 text-sm font-bold bg-white px-2 rounded">
                                        ❤️ Frecuencia Cardíaca (BPM)
                                    </label>
                                </div>
                            </div>

                            {/* Duración Enfoque */}
                            <div className="group">
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="0.1"
                                        name="Duracion_Enfoque_segundos"
                                        value={formData.Duracion_Enfoque_segundos}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-amber-50 text-gray-800 rounded-xl border-2 border-amber-200 focus:border-yellow-500 focus:bg-white transition-all duration-300 px-4 py-4 peer placeholder-transparent outline-none"
                                        placeholder="Duración Enfoque"
                                        min="0"
                                        max="3600"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-yellow-600 text-sm font-bold bg-white px-2 rounded">
                                        ⏱️ Duración Enfoque (segundos)
                                    </label>
                                </div>
                            </div>

                            {/* Género */}
                            <div className="group">
                                <div className="relative">
                                    <select
                                        name="Genero"
                                        value={formData.Genero}
                                        onChange={handleChange}
                                        className="w-full bg-amber-50 text-gray-800 rounded-xl border-2 border-amber-200 focus:border-purple-500 focus:bg-white transition-all duration-300 px-4 py-4 appearance-none outline-none cursor-pointer"
                                    >
                                        <option value="male" className="bg-white text-gray-800">
                                            Masculino
                                        </option>
                                        <option value="female" className="bg-white text-gray-800">
                                            Femenino
                                        </option>
                                        <option value="other" className="bg-white text-gray-800">
                                            Otro
                                        </option>
                                    </select>
                                    <label className="absolute left-4 -top-2.5 text-purple-600 text-sm font-bold bg-white px-2 rounded">
                                        ⚧️ Género
                                    </label>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-6">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Analizando...
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-2">🔮</span>
                                        Predecir Estado de Ánimo
                                    </>
                                )}
                                <div className="absolute inset-0 bg-amber-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Results Card */}
                {(prediction || error) && (
                    <div
                        className={`bg-white rounded-3xl shadow-2xl p-8 border-2 ${getResultStyles().border} transform`}
                    >
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6 border-4 border-amber-300">
                                <span className="text-4xl">{error ? "❌" : getMoodIcon()}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {error ? "Error en la Predicción" : "Resultado del Análisis"}
                            </h3>

                            {prediction && (
                                <div className="space-y-4">
                                    <div
                                        className={`inline-block px-6 py-3 rounded-full ${getResultStyles().bg} border-2 ${getResultStyles().border}`}
                                    >
                                        <p className={`text-2xl font-extrabold uppercase tracking-wider ${getResultStyles().text}`}>
                                            Tu estado de ánimo es: {prediction}
                                        </p>
                                    </div>

                                    <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                        <p className="text-gray-700 text-sm font-medium">
                                            Esta predicción se basa en el análisis de tus datos fisiológicos actuales. Recuerda que es una
                                            estimación y puede variar según múltiples factores.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                                    <p className="text-red-700 text-lg font-bold">{error}</p>
                                    <p className="text-red-600 text-sm mt-2 font-medium">
                                        Verifica que todos los campos estén correctamente completados e intenta nuevamente.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
