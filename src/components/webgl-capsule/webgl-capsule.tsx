import React, { Component } from "react"; // let's also import Component
import * as THREE from "three";

import './webgl-capsule.css';

export class WebGlCapsule extends Component {
  static instanceId: number;

  id: string;

  state = {};

  constructor(props: {}) {
    super(props);
    this.state = {};

    WebGlCapsule.instanceId = WebGlCapsule.instanceId
      ? WebGlCapsule.instanceId + 1
      : 1;

    this.id = `box-${WebGlCapsule.instanceId}`;
  }

  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      50,
      1,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    
    const element: HTMLElement = document.getElementById(this.id)!;
    renderer.setSize(element.offsetWidth, element.offsetHeight);
    element.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (<div className="webgl-capsule" id={this.id} />);
  }
}
