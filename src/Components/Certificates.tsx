import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"
import { Link } from "react-router-dom"

const certificates = [

  {
    title: "CISCO Linux",
    image: "https://www.fotoguru.cz/files/AI-a-fotograf.jpg",
    pdfDownload: "https://github.com/MRusnak40/School_WEB_PSS_YEAR_WORK", // Sem pak dej ideálně přímý odkaz na .pdf soubor
    timeSpent: "2 months",
    description: "Certificated to be able to work with switches, Routers on esential level",
    timeOfFinishing: "11.1. 2025"
  },
  {
    title: "CISCO - CNNA 1",
    image: "https://www.fotoguru.cz/files/AI-a-fotograf.jpg",
    pdfDownload: "https://github.com/MRusnak40/School_WEB_PSS_YEAR_WORK", // Sem pak dej ideálně přímý odkaz na .pdf soubor
    timeSpent: "2 months",
    description: "Certificated to be able to work with switches, Routers on esential level",
    timeOfFinishing: "11.1. 2025"
  }
  ,
  {
    title: "CISCO - CNNA 2",
    image: "https://www.fotoguru.cz/files/AI-a-fotograf.jpg",
    pdfDownload: "https://github.com/MRusnak40/School_WEB_PSS_YEAR_WORK", // Sem pak dej ideálně přímý odkaz na .pdf soubor
    timeSpent: "2 months",
    description: "Certificated to be able to work with switches, Routers on esential level",
    timeOfFinishing: "11.1. 2025"
  },
]

export default function Certificates() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <RollingMenu>
          <Navigator />
        </RollingMenu>
      </div>

      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-auto">
        <Scene3D />
      </div>

      <main className="relative z-10 w-full min-h-screen pt-28 pb-20 px-3 sm:px-8 md:px-20 min-[1700px]:px-32 pointer-events-none">

        <div className="w-full max-w-4xl pointer-events-auto mx-auto md:mx-0">

          <h2 className="text-3xl min-[350px]:text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 md:mb-16 tracking-tighter drop-shadow-2xl break-words">
            CERTIFICATES
          </h2>

          <div className="flex flex-col gap-8 md:gap-16">

            {/* Změněno z 'project' na 'cert', aby to dávalo sémanticky smysl */}
            {certificates.map((cert, index) => (
              <div key={index} className="group bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-500 shadow-2xl">

               

                <div className="p-4 sm:p-8 md:p-12 space-y-4 sm:space-y-6 md:space-y-8">

                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                    {cert.title}
                  </h3>

                  {/* Vykreslení dovedností/popisu (opraveno na cert.description) */}
                  <div className="flex flex-wrap gap-1.5 md:gap-3">
                    
                      <span  className="px-2 md:px-4 py-1 md:py-2 text-[9px] md:text-xs font-mono uppercase tracking-widest text-white border border-red-600/50 bg-red-600/10 rounded md:rounded-lg">
                        {cert.description}
                      </span>
                    
                  </div>

                  {/* Informace o čase a dokončení poskládané pod sebou */}
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-sm md:text-lg text-gray-400">
                      <span className="text-white font-bold tracking-wider uppercase text-[10px] md:text-sm">Time spent:</span> {cert.timeSpent}
                    </p>
                    <p className="text-sm md:text-lg text-gray-400">
                      <span className="text-white font-bold tracking-wider uppercase text-[10px] md:text-sm">Finished:</span> {cert.timeOfFinishing}
                    </p>
                  </div>

                  {/* Tlačítka s neonovým efektem */}
                  <div className="pt-2 md:pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">

                    {/* Levé tlačítko - PDF Download (Bílá záře) */}
                    <a
                      href={cert.pdfDownload}
                      target="_blank"
                      rel="noreferrer"
                      download // Tento atribut řekne prohlížeči, aby se soubor pokusil rovnou stáhnout
                      className="inline-flex items-center justify-center w-full sm:w-auto gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-4 bg-transparent text-white border-2 border-white/20 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:border-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                      View Certificate (PDF) &rarr;
                    </a>

                    {/* Pravé tlačítko - Kontakt (Červená záře) */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full sm:w-auto gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-4 bg-transparent text-red-500 border-2 border-red-500/30 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                    >
                      I GOT INTERESTED &rarr;
                    </Link>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  )
}