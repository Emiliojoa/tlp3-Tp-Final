import { User, Brain, BadgeDollarSign } from "lucide-react"
import { useState, useEffect } from "react"

export const Header = ({nombre}) => {
    const [newNombre, setNewNombre] = useState("")
     useEffect(() => {
    setNewNombre(nombre)
  }, [nombre])
    
  return (
    <div className='fixed w-full z-50 flex py-4 justify-between px-4 flex-1 bg-white'>
        <div className='flex flex-2 flex-row gap-3 items-center'>
            <img className="h-10 w-14" src="Messi.webp" alt="" />
            <p className="font-bold text-2xl text-black hover:scale-105 hover:text-white">The goat</p>
        </div>
        <nav className="flex font-bold flex-10 justify-center gap-4 sm:gap-24 text-lg items-end">
            <article className="flex flex-col items-center">
                <BadgeDollarSign size={32} color="gray"/>
                <button className='hover:border-b-1 cursor-pointer'>Precio</button>
            </article>
            <article className="flex flex-col items-center">
                <Brain size={32} color="gray"/>
                <button className='hover:border-b-1 cursor-pointer'>Mentality</button>
            </article>
        </nav>
        <div className="flex sm:flex-2 flex-row justify-center gap-4 items-center">
            <p className="font-bold hidden md:block border-2 border-black text-black p-2 rounded-xl">{newNombre || "Jugador"}</p>
            <User color="black" size={34}/>
        </div>
    </div>
  )
}
