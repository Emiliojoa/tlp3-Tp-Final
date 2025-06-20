import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PrecioJugador } from './components/PrecioJugador'
import { EstadoAnimo } from './components/EstadoAnimo'
import { Footer } from './components/Footer'
import { CornerDownRight } from 'lucide-react'

export const App = () => {
  const [nombre, setNombre] = useState("")
  const inicioRef = useRef(null)
  const precioRef = useRef(null)
  const animoRef = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombreJugador")
    if (nombreGuardado) setNombre(nombreGuardado)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      const mensaje = document.getElementById("mensaje-superior")
      if (window.scrollY > 10) {
        mensaje.classList.add("opacity-0", "h-0", "overflow-hidden")
      } else {
        mensaje.classList.remove("opacity-0", "h-0", "overflow-hidden")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className='bg-red-4 min-h-screen'>
        <article id='mensaje-superior' className='flex items-center pt-2 px-2 text-xl gap-3 border-b-1 border-white bg-amber-400'>
          <h1 className='font-bold text-white'>Crees que vales para el mundo del futbol?, Compruebalo</h1>
          <button className='cursor-pointer'>
            <CornerDownRight color='black' size={28} className='mt-4'/>
          </button>
        </article>
        <Header 
        onScrollTo={scrollToSection}
        refs={{precioRef, animoRef, inicioRef}}
        nombre={nombre} />
        <Hero inicioRef={inicioRef} setearNombre={setNombre}/>
        <PrecioJugador precioRef={precioRef} nombre={nombre} />
        <EstadoAnimo animoRef={animoRef} />
        <Footer />
      </div>
    </>
  )
}
