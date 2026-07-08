import { useRef } from 'react'
import { useGLTF, Center, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Cube3DModel() {
  const { scene } = useGLTF('/cube.glb')
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  return (
    /* POSUN V 3D PROSTORU:
       X = 1.0  (posunuto hodně DOPRAVA)
       Y = -0.6 (posunuto HODNĚ DOLŮ)
    */
    <Float 
      position={[1.2, -0.5, 0]} 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.3} 
      floatingRange={[-0.08, 0.08]}
    >
      <group ref={groupRef} rotation={[0.4, 0.5, 0.1]}>
        <Center>
          {/* MASIVNÍ VELIKOST: scale=[3.2, 3.2, 3.2] udělá obří kostku */}
          <primitive object={scene} scale={[3.2, 3.2, 3.2]} />
        </Center>
      </group>
    </Float>
  )
}