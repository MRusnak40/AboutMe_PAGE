import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"
import { Link } from "react-router-dom"




const projects = [
  {
    title: "Web for healthier live",
    image: "https://images4.alphacoders.com/692/692043.jpg",
    github: "https://github.com/MRusnak40/School_WEB_PSS_YEAR_WORK",
    timeSpent: "3 months",
    techStack: ['HTML/CSS/JavaScript', "Python", "Database", "Django", "Server Managment"]
  },
  {
    title: "C# Online game with putty",
    image: "https://wallpaperaccess.com/full/346792.jpg",
    github: "https://github.com/MRusnak40/ServerGame_Csharp",
    timeSpent: "2 months",
    techStack: ['C# Threads', "C#", "Proxy server config", "C# Async methods", "Test cases"]
  },
  {
    title: "Music player",
    image: "https://wallpapercave.com/wp/wp7293872.jpg",
    github: "https://github.com/MRusnak40/Musicplayer/tree/master",
    timeSpent: "1 month",
    techStack: ['Java', "Java threads", "Java Gui framework", ]
  }, {
    title: "Smart app to distinguish spam ",
    image: "https://thumbs.dreamstime.com/b/businessman-working-floating-mail-symbols-warning-signs-over-computer-laptop-suspect-emails-alert-spam-virus-message-449363546.jpg",
    github: "github",
    timeSpent: "17 days",
    techStack: ['C#', "Python", "Data managment", "Large data processing", "C# GUI","AI"]
  },
  {
    title: "Unity hub Shooting game",
    image: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Gamer-Wallpapers.jpg",
    github: "github",
    timeSpent: "2 months",
    techStack: ['C# Scripting', "Object modeling", "Blender"]
  },
  {
    title: "About me web (where you are now)",
    image: "https://images.unsplash.com/photo-1601315488950-3b5047998b38?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
    github: "",
    timeSpent: "15 days",
    techStack: ['React', "3D obejcts", "Deploy managment", "Server managment"]
  },

]





export default function Portfolio() {









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

      {/* Zmenšené odsazení px-3 pro nejmenší mobily, aby bylo víc místa na obsah */}
      <main className="relative z-10 w-full min-h-screen pt-28 pb-20 px-3 sm:px-8 md:px-20 min-[1700px]:px-32 pointer-events-none">

        <div className="w-full max-w-4xl pointer-events-auto mx-auto md:mx-0">

          {/* 
            OPRAVA NADPISU: 
            text-3xl -> na ultra malých mobilech (jako máš na screenu)
            min-[350px]:text-5xl -> na normálních mobilech
            md:text-8xl -> na PC
          */}
          <h2 className="text-3xl min-[350px]:text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 md:mb-16 tracking-tighter drop-shadow-2xl break-words">
            PORTFOLIO
          </h2>

          <div className="flex flex-col gap-8 md:gap-16">

            {projects.map((project, index) => (
              <div key={index} className="group bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-500 shadow-2xl">

                <div className="h-40 sm:h-64 md:h-80 relative border-b border-white/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* 
                  OPRAVA OBYSAHU KARTY:
                  p-4 -> menší odsazení okrajů uvnitř karty na mobilu (zbyde víc místa pro text)
                  space-y-4 -> menší mezery mezi prvky pod sebou na mobilu
                */}
                <div className="p-4 sm:p-8 md:p-12 space-y-4 sm:space-y-6 md:space-y-8">

                  {/* Název projektu menší, aby se nezalamoval do tří řádků */}
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* 
                    OPRAVA TAGŮ:
                    Zmenšené texty (text-[9px]), menší padding (px-2 py-1) a menší mezery (gap-1.5)
                  */}
                  <div className="flex flex-wrap gap-1.5 md:gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 md:px-4 py-1 md:py-2 text-[9px] md:text-xs font-mono uppercase tracking-widest text-white border border-red-600/50 bg-red-600/10 rounded md:rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Čas - menší text na mobilu */}
                  <p className="text-sm md:text-lg text-gray-400">
                    <span className="text-white font-bold tracking-wider uppercase text-[10px] md:text-sm">Time spent:</span> {project.timeSpent}
                  </p>

                  {/* Tlačítka - flex zajistí zarovnání, justify-between je odhodí od sebe */}
<div className="pt-2 md:pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
  
  {/* Levé tlačítko - GitHub (Bílá záře) */}
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-4 bg-transparent text-white border-2 border-white/20 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:border-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
  >
    View on GitHub &rarr;
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

