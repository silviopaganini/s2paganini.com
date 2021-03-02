import React, { Component } from 'react'
import styled from 'styled-components'
import {
  WebGLRenderer,
  Clock,
  PerspectiveCamera,
  Scene,
  MeshPhongMaterial,
  DirectionalLight,
  // ShaderMaterial,
  Color,
  // Vector3,
  // IcosahedronBufferGeometry,
  // Mesh,
} from 'three'
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes'

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
  renderer: any = null
  camera: any = null
  scene: any = null
  material: any = null
  form: any = null
  mesh: any = null
  clock = new Clock()
  effect: MarchingCubes| null = null

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
      // antialias: true,
      canvas: document.querySelector('canvas')!,
    })

    this.renderer.setClearColor(0x000000)
    this.renderer.setClearAlpha(0)
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.gammaOuput = true
  }

  createScene() {
    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 4000)
    this.camera.position.set(0, 45, 1540)

    this.scene = new Scene()
  }

   updateCubes = ( object:MarchingCubes, time:number, numblobs:number, floor?:boolean, wallx?:boolean, wallz?:boolean ) => {

    object.reset();

    // fill the field with some metaballs

    const rainbow = [
      new Color( 0xff0000 ),
      new Color( 0xff7f00 ),
      new Color( 0xffff00 ),
      new Color( 0x00ff00 ),
      new Color( 0x0000ff ),
      new Color( 0x4b0082 ),
      new Color( 0x9400d3 )
    ];
    const subtract = 12;
    const strength = 1.2 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

    for ( let i = 0; i < numblobs; i ++ ) {

      const ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5;
      const bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
      const ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

        object.addBall( ballx, bally, ballz, strength, subtract, rainbow[0] );

    }

    if ( floor ) object.addPlaneY( 2, 12 );
    if ( wallz ) object.addPlaneZ( 2, 12 );
    if ( wallx ) object.addPlaneX( 2, 12 );

  }

  addObjects = () => {
    // this.material = new ShaderMaterial({
    //   uniforms: {
    //     uTime: { value: 0 },
    //     ambient: { value: new Color(0x171717) },
    //     specular: { value: new Color(0x030303) },
    //     color: { value: new Color(0xcccccc) },
    //     shininess: { value: 0.2 },
    //     lightDirection: { value: new Vector3(0, 0, 0) },
    //   },
    //   vertexShader: vert,
    //   fragmentShader: frag,
    //   flatShading: true,
    //   side: 1,
    //   wireframe: true,
    // })

    // this.form = new IcosahedronBufferGeometry(90, 4)
    // this.mesh = new Mesh(this.form, this.material)

    const material = new MeshPhongMaterial({ color: 0xffffff })
    const light = new DirectionalLight(0x666666, 0.5)
    light.position.set(0, 1, 0)
    this.scene.add(light)

    this.effect = new MarchingCubes(10, material, false, true)
    this.effect.position.set(0, 0, 0)
    this.effect.scale.set(700, 700, 700)

    this.effect.enableUvs = false
    this.effect.enableColors = false

    this.scene.add(this.effect)

    // this.scene.add(this.mesh)
  }

  onUpdate = () => {
    const time = this.clock.getElapsedTime() * 0.5
    // this.mesh.rotation.y += 0.0007
    // this.mesh.rotation.x += 0.0007
    // this.mesh.rotation.z += 0.0007
    // this.mapTexture.offset.x += 10.0115;
    // this.mapTexture.offset.y += 10.0115;
    // this.mapTexture.needsUpdate = true;

    // this.material.uniforms.uTime.value = el
    // this.gammaShader.uniforms.time.value = el

    // if(!this.md.mobile())
    // {
    //     // this.gammaShader.uniforms.time.value = el;
    //     // this.composer.render(d);
    // } else {
    // }

    this.effect && this.updateCubes( this.effect, time, 2);

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
