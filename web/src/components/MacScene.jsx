import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, Html, ContactShadows, OrbitControls } from '@react-three/drei'
import Loader from './Loader'

import PageContent from './PageContent'

const Model = ({ portal, ...props }) => {
  const { nodes, materials } = useGLTF("/mac-model.glb");
  const ref = useRef()
  const { size, viewport } = useThree()
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])

  // useFrame(({ mouse }) => {
  //   rEuler.set((mouse.y * viewport.height) / 100, (mouse.x * viewport.width) / 50, 0)
  //   ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
  // });

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      Math.cos(t / 2) / 10 + 0.25,
      0.5
    )
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      Math.sin(t / 4) / 10,
      0.5
    )
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      Math.sin(t / 4) / 20,
      0.5
    )
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      (-5 + Math.sin(t)) / 5,
      0.5
    )
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation-x={-0.45} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials["matte.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
          >
            <Html
              className='content'
              zIndexRange={[5, 10]}
              portal={portal}
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              scale={0.95}
              transform
              occlude
            >
            <div className="content--wrapper">
              <PageContent />
            </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

useGLTF.preload("/mac-model.glb");

const MacScene = ({ domContent }) => {
  return (
    <Suspense fallback={<Loader/>}>
      <Canvas camera={{ position: [-10, 0, 12], near: 0.1, far: 100, fov: 45}}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <group rotation-y={-0.75}>
          <Model portal={domContent}/>
        </group>
        {/* <Environment files={'/hdr_studio.hdr'}/> */}
        <Environment preset='city'/>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -4.5, 0]}
          opacity={1}
          width={20}
          height={20}
          blur={2}
          far={4.5}
        />
        <OrbitControls
          enablePan={false}
          enableRotate={true}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </Suspense>
  )
}

export default MacScene
