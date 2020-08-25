/*
 * @Author: 桔子桑
 * @Date: 2020-08-24 15:59:21
 * @FilePath: /deno-test/src/app.ts
 * @Description: 
 */
/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2020-08-24 15:59:21
# FilePath: /deno-test/src/app.js
# Description: 
#
============================================================================= */
import * as THREE from "../static/lib/three.module"


var renderer,camera,scene,hemiLight,ambientLight,directionalLight;
class app{
  constructor(){

  }
  init(){
    this.initRender();
    this.initScene();
    this.initCamera();
    this.initLight();
  }
  initRender() {
    var root = document.querySelector('#root');
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    //告诉渲染器需要阴影效果
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
    root.appendChild(renderer.domElement);
  }
  initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 40, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
  initScene() {
    scene = new THREE.Scene();
  }
  initLight() {

    ambientLight = new THREE.AmbientLight("#111111",1.0);
    scene.add(ambientLight);

    directionalLight = new THREE.DirectionalLight("#ffffff",1.0);
    directionalLight.position.set(-40, 60, -10);

    directionalLight.shadow.camera.near = 20; //产生阴影的最近距离
    directionalLight.shadow.camera.far = 200; //产生阴影的最远距离
    directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
    directionalLight.shadow.camera.right = 50; //最右边
    directionalLight.shadow.camera.top = 50; //最上边
    directionalLight.shadow.camera.bottom = -50; //最下面

    //这两个值决定使用多少像素生成阴影 默认512
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.mapSize.width = 1024;

    //告诉平行光需要开启阴影投射
    directionalLight.castShadow = true;

    scene.add(directionalLight);
  }
  initModel() {

    //辅助工具
    var helper = new THREE.AxesHelper(100);
    scene.add(helper);

    //球体
    var sphereGeometry = new THREE.BoxGeometry(10,30,30);
    var sphereMaterial = new THREE.MeshLambertMaterial({color:0xeeeeee});
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

    // sphere.castShadow = true;

    scene.add(sphere);

}
  animate(){
    renderer.render(scene, camera);
  }
}

export default new app();