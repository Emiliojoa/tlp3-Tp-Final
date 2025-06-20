import React from 'react'
import { useState } from 'react'

export const Hero = ({setearNombre}) => {
    const [nombre, setNombre] = useState("")

    const handleSubmit = () => {
    if (nombre.trim() !== "") {
      localStorage.setItem("nombreJugador", nombre)
      setearNombre(nombre)
      alert("Bienvenido " + nombre + ", tu nombre ha sido guardado correctamente.")
      setNombre("")
    }
  }


    console.log(nombre)

  return (
    <div className='py-48 justify-center items-center flex flex-col'>
        <h1 className='font-bold text-3xl'>¿Cuánto crees que vales?</h1>
        <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4'>
            <article className='flex flex-col gap-4 mt-10 px-24'>
                <h2 className='text-2xl text-black font-bold'>Vales mucho y por eso..</h2>
                <p className='text-xl text-gray-500'>Descubre tu precio de mercado como jugador de futbol con tus datos históricos y también analiza en qué estado psicológico te encuentras para tu próximo partido.</p>
                <p className='font-bold text-xl'>Dinos tu nombre para mejorar tu experiencia de usuario</p>
                <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} className='border-3 w-54 rounded' />
                <button onClick={handleSubmit} className='mt-4 bg-yellow-500 w-44 text-white px-6 py-2 rounded-lg hover:bg-amber-300 transition duration-300 cursor-pointer'>Registrar nombre</button>
            </article>
            <img className='h-70 w-96' src="messi_campeon.png" alt="" />
        </div>
    </div>
  )
}
