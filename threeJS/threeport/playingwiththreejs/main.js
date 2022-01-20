import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 15, 100);
// const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });//no light req
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);

//Lighting:
const pointLight = new THREE.PointLight(0xfffff);
pointLight.position.set(20, 15, 0);

// const ambientLight = new THREE.AmbientLight(0xfffff);

const lightHelp = new THREE.PointLightHelper(pointLight);
scene.add(lightHelp);


//Add objects to scene:
scene.add(pointLight, /*ambientLight*/);
scene.add(torus);


//Animation Loop(Main)
function animate() {
  requestAnimationFrame(animate);


  //Rotate Animation:
  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
