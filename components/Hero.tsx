'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false

    // Create a group to hold all objects
    const group = new THREE.Group()
    scene.add(group)

    // Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(2, 0)
    const icosahedronMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00ffff,
      wireframe: true,
      shininess: 100,
      specular: 0x00ffff
    })
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial)
    group.add(icosahedron)

    // Torus
    const torusGeometry = new THREE.TorusGeometry(3, 0.5, 16, 100)
    const torusMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff00ff,
      wireframe: true,
      shininess: 100,
      specular: 0xff00ff
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    group.add(torus)

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32)
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffff00,
      wireframe: true,
      shininess: 100,
      specular: 0xffff00
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    group.add(sphere)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(25, 25, 25)
    scene.add(pointLight)

    camera.position.z = 10

    const animate = () => {
      requestAnimationFrame(animate)
      
      icosahedron.rotation.x += 0.005
      icosahedron.rotation.y += 0.005
      
      torus.rotation.x += 0.01
      torus.rotation.y += 0.01
      
      sphere.rotation.x -= 0.007
      sphere.rotation.y -= 0.007
      
      group.rotation.y += 0.002

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div ref={textRef} className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-gradient">Welcome to 403Labs</h1>
        <p className="text-xl md:text-2xl text-white mb-8">We create stunning websites that drive results</p>
        <a href="#contact" className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition duration-300">
          Get Started
        </a>
      </div>
    </section>
  )
}

