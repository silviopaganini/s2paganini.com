import React, { Component } from 'react'
import styled from 'styled-components'
import {
  WebGLRenderer,
  Clock,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  Color,
  Vector3,
  IcosahedronBufferGeometry,
  Mesh,
} from 'three'
import frag from './shaders/material-frag.glsl'
import vert from './shaders/material-vert.glsl'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`

class Background extends Component {
  renderer:any = null
  camera:any = null
  scene:any = null
  material:any = null
  form:any = null
  mesh:any = null
  clock = new Clock()

  componentDidMount() {
    this.createRender()
    this.createScene()
    this.addObjects()
    this.onUpdate()
    window.addEventListener('resize', this.onResize)
  }

  shouldComponentUpdate() {
    return false
  }

  createRender = () => {
    this.renderer = new WebGLRenderer({
      antialias: true,
      depth: true,
      canvas: document.querySelector('canvas')!,
    })

    this.renderer.setClearColor(0x000000)
    this.renderer.setClearAlpha(0)
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.gammaInput = true
    this.renderer.gammaOuput = true
  }

  createScene() {
    this.camera = new PerspectiveCamera(
      1000,
      window.innerWidth / window.innerHeight,
      0.01,
      4000
    )
    this.camera.position.set(0, 0, 0)

    this.scene = new Scene()
  }

  addObjects = () => {
    this.material = new ShaderMaterial({
      uniforms: {
        uTime: { type: 'f', value: 0 },
        ambient: { type: 'c', value: new Color(0x171717) },
        specular: { type: 'c', value: new Color(0x030303) },
        color: { type: 'c', value: new Color(0xcccccc) },
        shininess: { type: 'f', value: 0.2 },
        lightDirection: { type: 'v3', value: new Vector3(0, 0, 0) },
      },
      vertexShader: vert,
      fragmentShader: frag,
      flatShading: true,
      side: 1,
      wireframe: true,
    })

    this.form = new IcosahedronBufferGeometry(90, 4)
    this.mesh = new Mesh(this.form, this.material)

    this.scene.add(this.mesh)
  }

  onUpdate = () => {
    const el = this.clock.getElapsedTime() * 0.5
    this.mesh.rotation.y += 0.0007
    this.mesh.rotation.x += 0.0007
    this.mesh.rotation.z += 0.0007
    // this.mapTexture.offset.x += 10.0115;
    // this.mapTexture.offset.y += 10.0115;
    // this.mapTexture.needsUpdate = true;

    this.material.uniforms.uTime.value = el
    // this.gammaShader.uniforms.time.value = el

    // if(!this.md.mobile())
    // {
    //     // this.gammaShader.uniforms.time.value = el;
    //     // this.composer.render(d);
    // } else {
    // }

    this.renderer.render(this.scene, this.camera)
    window.requestAnimationFrame(this.onUpdate)
  }

  onResize = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
  }

  render() {
    return (
      <Wrapper>
        <Canvas />
      </Wrapper>
    )
  }
}

export default Background
