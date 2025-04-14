// GalaxyScene.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const BlackHole = () => {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.8, 16, 100]} />
      <meshStandardMaterial color="black" emissive="#110022" metalness={0.9} roughness={0.2} />
    </mesh>
  )
}

const GalaxyScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <color attach="background" args={['#01010a']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#8833ff" />
      <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
      <BlackHole />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

export default GalaxyScene
