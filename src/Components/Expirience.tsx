import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"
import { Link } from "react-router-dom"

const workExperience = [
  {
    company: "WOLT Partner",
    role: "Courier",
    period: "12/2024 – Present",
    responsibilities: [
      "Focus on time management and service quality",
      "Cash handling and full financial responsibility",
      "Customer communication"
    ]
  },
  {
    company: "KFC - Lužiny",
    role: "Cashier",
    period: "09/2024 – 11/2024",
    responsibilities: [
      "Customer communication",
      "Cash handling and full responsibility for the branch"
    ]
  },
  {
    company: "TrdloCAFÉ",
    role: "Barista",
    period: "12/2023 – 06/2024",
    responsibilities: [
      "Customer communication",
      "Cash handling and full responsibility for the branch"
    ]
  }
]

export default function Experience() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">

      {/* Navigační menu */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <RollingMenu>
          <Navigator />
        </RollingMenu>
      </div>

      {/* 3D Scéna na pozadí */}
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-auto">
        <Scene3D />
      </div>

      {/* Hlavní obsah */}
      <main className="relative z-10 w-full min-h-screen pt-28 pb-20 px-3 sm:px-8 md:px-20 min-[1700px]:px-32 pointer-events-none">

        <div className="w-full max-w-4xl pointer-events-auto mx-auto md:mx-0">

          <h2 className="text-3xl min-[350px]:text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 md:mb-16 tracking-tighter drop-shadow-2xl break-words uppercase">
            Work Experience
          </h2>

          <div className="flex flex-col gap-8 md:gap-12">

            {workExperience.map((item, index) => (
              <div 
                key={index} 
                className="group bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 space-y-6 hover:border-red-500/50 transition-all duration-500 shadow-2xl"
              >
                
                {/* Hlavička karty - Firma + Pozice + Období */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 md:pb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {item.company}
                    </h3>
                    <p className="text-red-500 font-mono text-sm sm:text-base md:text-lg mt-1 font-semibold">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-gray-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>

                {/* Seznam odpovědností */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/70">
                    Key Responsibilities:
                  </h4>

                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                        <span className="text-red-500 font-bold mt-0.5">&gt;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spodní akční tlačítko pro kontakt */}
                <div className="pt-2 flex justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 md:gap-3 px-4 md:px-6 py-2.5 bg-transparent text-red-500 border border-red-500/30 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                  >
                    GET IN TOUCH &rarr;
                  </Link>
                </div>

              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  )
}