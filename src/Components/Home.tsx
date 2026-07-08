import RollingMenu from "./RollingMenu"
import Navigator from "./Navigator"
import Scene3D from "./SceneFor3D"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* Navigační menu nahoře (pokud je přidáš, musí mít z-50 a pointer-events-auto) */}
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
        {/* <Navigator /> */}
        {/* <RollingMenu /> */}
      </div>

      {/* PRAVÁ STRANA / POZADÍ: 3D SCÉNA KOSTKY */}
      {/* inset-0 rozáhne canvas na celou obrazovku (z-0 ho dá do pozadí).
        Díky pointer-events-auto s ní půjde otáčet myší.
      */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Scene3D />
      </div>

      {/* RESPONZIVNÍ MAIN CONTAINER (Textová vrstva) */}
      {/* z-10 zaručí, že text je NAD kostkou.
        pointer-events-none zaručí, že klikání a tažení myší projde skrz "prázdné místo" rovnou na kostku.
      */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20 pointer-events-none">
        
        {/* LEVÁ STRANA: TEXT */}
        {/* Zde musíme dát pointer-events-auto, aby šlo kliknout na tlačítko a vybrat text. 
        */}
        <div className="w-full md:w-3/5 space-y-6 text-white pointer-events-auto">
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

      </main>
    </div>
  )
}