import { useRef, useEffect } from 'react'
import { useGLTF, Center, Float } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Cube3DModel() {
  const { scene } = useGLTF('./cube.glb')
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  // Svítivost emissivního materiálu
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh
      if (mesh.material && 'emissiveIntensity' in mesh.material) {
        // @ts-ignore
        mesh.material.emissiveIntensity = 5
      }
    }
  })

  // POZICE: Vpravo (26 % od středu) a přesně uprostřed na výšku (Y = 0)
  const posX = viewport.width * 0.26
  const posY = -0.5
  const posZ = 0

  // VELIKOST: Velká dominantní kostka odvíjející se od výšky obrazovky
  const scale = Math.max(viewport.height * 0.65, 3.8)

  // KONSTANTY PRO ROTACI
  const DEFAULT_ROTATION_X = 0.4
  const DEFAULT_ROTATION_Z = 0.1
  const IDLE_SPIN_SPEED = 0.002

  const isDragging = useRef(false)
  const previousMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true
      previousMouse.current = { x: e.clientX, y: e.clientY }
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current || !groupRef.current) return
      const deltaX = e.clientX - previousMouse.current.x
      const deltaY = e.clientY - previousMouse.current.y
      previousMouse.current = { x: e.clientX, y: e.clientY }

      groupRef.current.rotation.y += deltaX * 0.008
      groupRef.current.rotation.x += deltaY * 0.008
    }

    const handlePointerUp = () => {
      isDragging.current = false
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [])

  useFrame(() => {
    if (!groupRef.current) return

    if (!isDragging.current) {
      // Pomalá rotace na místě
      groupRef.current.rotation.y += IDLE_SPIN_SPEED

      // Plynulý návrat do výchozího naklonění po puštění myši
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        DEFAULT_ROTATION_X,
        0.003
      )
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        DEFAULT_ROTATION_Z,
        0.003
      )
    }
  })

  return (
    <Float 
      position={[posX, posY, posZ]} 
      speed={1.8} 
      rotationIntensity={0.1} 
      floatIntensity={0.2} 
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={groupRef} rotation={[DEFAULT_ROTATION_X, 0.5, DEFAULT_ROTATION_Z]}>
        <Center>
          <primitive object={scene} scale={[scale, scale, scale]} />
        </Center>
      </group>
    </Float>
  )
}