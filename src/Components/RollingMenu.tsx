import { useState, useEffect, ReactNode } from 'react'

interface RollingMenuProps {
  children: ReactNode
}

export default function RollingMenu({ children }: RollingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Zabrání scrollování stránky na pozadí, když je menu otevřené
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* HAMBURGER TLAČÍTKO - Zmizí po kliknutí */}
      <div className="flex justify-end p-6 md:p-10">
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