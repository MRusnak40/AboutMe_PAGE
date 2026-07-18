import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Navigační menu nahoře (pokud je přidáš, musí mít z-50 a pointer-events-auto) */}
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
        {/* <Navigator /> */}
        {/* <RollingMenu /> */}
        <RollingMenu>
          <Navigator />
        </RollingMenu>


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
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20 min-[1700px]:px-32 pointer-events-none">

        {/* LEVÁ STRANA: TEXT */}
        {/* Zde musíme dát pointer-events-auto, aby šlo kliknout na tlačítko a vybrat text. 
        */}
        <div className="w-full md:w-3/5 min-[1700px]:w-1/2 space-y-6 min-[1700px]:space-y-10 text-white pointer-events-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl min-[1700px]:text-9xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-red-500">Matyas Rusnak</span>,

          </h1>

          <p className="text-2xl md:text-4xl font-light text-gray-200 tracking-wide drop-shadow-lg">
            I build <span className="font-bold text-red-500 slow-pulse inline-block">digital experiences</span>
          </p>


          <p className="text-lg md:text-xl font-mono text-gray-400 uppercase tracking-[0.3em]">
            Full Stack Developer
          </p>

          <div className="pt-4 min-[1700px]:pt-8">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 min-[1700px]:px-12 min-[1700px]:py-5 text-sm md:text-base min-[1700px]:text-xl border border-red-500 text-red-500 rounded-full hover:bg-red-500/10 transition-all cursor-pointer active:scale-[1.03]"
            >
              WORK WITH ME &rarr;
            </Link>
          </div>
        </div>

      </main>
    </div>
  )
}