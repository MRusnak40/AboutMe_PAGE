import RollingMenu from "./RollingMenu"
import Navigator from "./Navigator"
import Scene3D from "./SceneFor3D"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navigační menu nahoře */}
     

      {/* RESPONZIVNÍ MAIN CONTAINER */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 pt-24 md:pt-0">
        
        {/* LEVÁ STRANA: TEXT (z-20 zaručí, že text leží PŘED kostkou) */}
        <div className="w-full md:w-3/5 z-20 space-y-6 text-white my-auto pointer-events-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-[#6ee7b7]">Matyas Rusnak</span>,
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-xl">
            and I make things work
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 text-sm md:text-base border border-[#6ee7b7] text-[#6ee7b7] rounded-full hover:bg-[#6ee7b7]/10 transition-all cursor-pointer">
              WORK WITH ME &rarr;
            </button>
          </div>
        </div>

        {/* PRAVÁ STRANA / POZADÍ: 3D SCÉNA KOSTKY */}
        {/* pointer-events-none předchází nechtěnému blokování kliknutí na tlačítka */}
        <div className="w-full md:w-full h-[50vh] md:h-screen absolute bottom-0 right-0 z-10 pointer-events-none">
          <Scene3D />
        </div>

      </main>
    </div>
  )
}