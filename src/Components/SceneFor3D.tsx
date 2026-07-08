import { Canvas } from '@react-three/fiber'
import Cube3DModel from './Cube3DModel'

export default function SceneFor3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 45, near: 0.01, far: 1000 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <Cube3DModel />
      </Canvas>
    </div>
  )
}