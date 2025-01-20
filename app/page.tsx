'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere} from '@react-three/drei'
import * as THREE from 'three'


const FloatingElement = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color={new THREE.Color().setHSL(Math.random(), 0.5, 0.5)} />
    </mesh>
  )
}

const ProfilePicture = () => {
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/logo.webp')

  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-6">I&apos;m Adnan Ahamed, a passionate developer and creative thinker.</p>
            <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Get in Touch</a>
          </div>
          <div className="md:w-1/2 h-[400px]">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <ProfilePicture />
              <FloatingElement position={[-1.5, 0, 0]} />
              <FloatingElement position={[1.5, 0, 0]} />
              <FloatingElement position={[0, 1.5, 0]} />
              <FloatingElement position={[0, -1.5, 0]} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100" style={{ backgroundPositionY: `${scrollY * 0.5}px` }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Git', 'UI/UX Design', 'Database Management'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-md text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

