import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface RollingMenuProps {
  children: ReactNode
}

export default function RollingMenu({ children }: RollingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  // Stav pro text tlačítka (ukazuje jazyk, na který se chceš přepnout)
  const [langButtonText, setLangButtonText] = useState<'CZ' | 'EN'>('CZ')

  // Zabrání scrollování stránky na pozadí, když je menu otevřené
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Funkce pro přepnutí textu tlačítka
  const toggleLanguage = () => {
    setLangButtonText((prev) => (prev === 'CZ' ? 'EN' : 'CZ'))
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* HORNÍ LIŠTA - Přepínač jazyka + Hamburger tlačítko */}
      {/* 
          ÚPRAVA ZDE:
          - flex-col-reverse (na mobilech dá hamburger nahoru a CZ/EN pod něj)
          - items-end (zarovná je pod sebe hezky k pravému okraji)
          - min-[700px]:flex-row a min-[700px]:items-center (od 700px je dá vedle sebe)
      */}
      <div className="flex flex-col-reverse min-[700px]:flex-row justify-end items-end min-[700px]:items-center gap-4 p-6 md:p-10">
        
        {/* TLAČÍTKO PRO PŘEKLAD - Zmizí po kliknutí na menu, přepíná CZ/EN */}
        <button
          onClick={toggleLanguage}
          className={`relative z-[60] flex items-center justify-center h-10 w-10 border-[2px] border-red-600 text-red-600 font-bold text-sm cursor-pointer hover:bg-red-600 hover:text-black transition-all duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Přepnout jazyk"
        >
          {langButtonText}
        </button>

        {/* HAMBURGER TLAČÍTKO - Zmizí po kliknutí */}
        <button
          onClick={() => setIsOpen(true)}
          className={`relative z-[60] flex h-10 w-10 flex-col justify-center gap-[6px] cursor-pointer focus:outline-none transition-all duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Otevřít menu"
        >
          <span className="block h-[2px] w-full bg-red-600 rounded-full" />
          <span className="block h-[2px] w-full bg-red-600 rounded-full" />
          <span className="block h-[2px] w-full bg-red-600 rounded-full" />
        </button>
        
      </div>

      {/* FULL-SCREEN OVERLAY - Zavírá se kliknutím kamkoliv */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col justify-center transition-all duration-500 cursor-pointer ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Obal pro obsah (děti) s animací vyjetí */}
        <div 
          className={`transition-all duration-500 transform w-full flex flex-col justify-center ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {children}
        </div>
      </div>

    </nav>
  )
}