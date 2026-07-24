import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"


export default function AboutMe() {
  return (<>
    <div className="relative min-h-screen w-full overflow-hidden">
  
        
        <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
          
          <RollingMenu>
            <Navigator />
          </RollingMenu>
  
  
        </div>
  
       
  
  
  
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Scene3D />
        </div>
  
  
  
  
  
  
        
        <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20 min-[1700px]:px-32 pointer-events-none">
  
        
          <div className="w-full md:w-3/5 min-[1700px]:w-1/2 space-y-6 min-[1700px]:space-y-10 text-white pointer-events-auto">
            
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
            
          </div>
  
        </main>
      </div>
    </>)
}

