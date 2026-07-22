import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"
import { Link } from "react-router-dom"

const educationList = [
  {
    school: "SPŠE Ječná",
    field: "Information Technology",
    years: "2021 – 2025",
    description: "Prestigious technical high school focused on software development, web technologies, networking, and IT infrastructure.",
    skillsLearned: [
      "Full-stack Web Development (HTML5, CSS3, JavaScript/React, Python/Django, PHP)",
      "Object-Oriented Programming (OOP in C#, Java, C++)",
      "Databases & SQL (Database design, PostgreSQL, MySQL)",
      "Networking & Systems (TCP/IP, Linux Server Administration, Cisco CCNA basics)",
      "Git & Team Collaboration (Version control, GitHub)"
    ],
    website: "https://www.spsejecna.cz/"
  }
 
]

export default function Study() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">

      {/* Menu - fixed pozice */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <RollingMenu>
          <Navigator />
        </RollingMenu>
      </div>

      {/* 3D Pozadí - fixed pozice, aby se nekrčilo */}
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-auto">
        <Scene3D />
      </div>

      
      <main className="relative z-10 w-full min-h-screen pt-28 pb-20 px-3 sm:px-8 md:px-20 min-[1700px]:px-32 pointer-events-none">

        <div className="w-full max-w-4xl pointer-events-auto mx-auto md:mx-0">

          {/* Responzivní velký nadpis */}
          <h2 className="text-3xl min-[350px]:text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 md:mb-16 tracking-tighter drop-shadow-2xl break-words">
            EDUCATION
          </h2>

          <div className="flex flex-col gap-8 md:gap-16">

            {educationList.map((item, index) => (
              <div
                key={index}
                className="group bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 space-y-6 md:space-y-8 hover:border-red-500/50 transition-all duration-500 shadow-2xl"
              >

                {/* Hlavička karty - Název školy + Roky */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 md:pb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {item.school}
                    </h3>
                    <p className="text-red-500 font-mono text-sm sm:text-base md:text-lg mt-1">
                      {item.field}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                    {item.years}
                  </span>
                </div>

                {/* Krátký popis */}
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Co ses naučil (Odrážky s červenou šipkou) */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/70">
                    What I learned & skills acquired:
                  </h4>

                  <ul className="space-y-2.5">
                    {item.skillsLearned.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                        <span className="text-red-500 font-bold mt-0.5">&gt;</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tlačítka (Glow efekt) */}
                <div className="pt-2 md:pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-4 bg-transparent text-white border-2 border-white/20 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:border-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    School Website &rarr;
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-4 bg-transparent text-red-500 border-2 border-red-500/30 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                  >
                    I GOT INTERESTED &rarr;
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