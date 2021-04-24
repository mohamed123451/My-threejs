const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 
                            75, 
                            window.innerWidth / window.innerHeight,
                            0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    


    plane1.rotation.z += 0.014;
    plane2.rotation.z += 0.016;
    plane3.rotation.z += 0.018;

    plane4.rotation.z += 0.014;
    plane5.rotation.z += 0.012;
    plane6.rotation.z += 0.01;


    renderer.render( scene, camera );
};









const plane3_geometry = new THREE.PlaneGeometry( 7, 7);
const plane3_material = new THREE.MeshBasicMaterial( {color: 0x9f9955, side: THREE.DoubleSide} );
const plane3 = new THREE.Mesh( plane3_geometry, plane3_material );
scene.add( plane3 );

const plane2_geometry = new THREE.PlaneGeometry( 6, 6);
const plane2_material = new THREE.MeshBasicMaterial( {color: 0xff9955, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( plane2_geometry, plane2_material );
scene.add( plane2 );

const plane1_geometry = new THREE.PlaneGeometry( 5, 5);
const plane1_material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane1 = new THREE.Mesh( plane1_geometry, plane1_material );
scene.add( plane1 );





const circle1_geometry = new THREE.CircleGeometry( 2.5, 32 );
const circle1_material = new THREE.MeshBasicMaterial( { color: 0xfff00 } );
const circle1 = new THREE.Mesh( circle1_geometry, circle1_material );
scene.add( circle1 );
//circle1.position.x = 0.5;

const circle2_geometry = new THREE.CircleGeometry( 1.1, 32 );
const circle2_material = new THREE.MeshBasicMaterial( { color: 0xfff00 } );
const circle2 = new THREE.Mesh( circle2_geometry, circle1_material );
scene.add( circle2 );
circle2.position.z = 0.16;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xf5ff50 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.z = 0.5;

const plane4_geometry = new THREE.PlaneGeometry( 3.4, 3.4);
const plane4_material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane4 = new THREE.Mesh( plane4_geometry, plane1_material );
scene.add( plane4 );
plane4.position.z = 0.1

const plane5_geometry = new THREE.PlaneGeometry( 2.8, 2.8);
const plane5_material = new THREE.MeshBasicMaterial( {color: 0xff9955, side: THREE.DoubleSide} );
const plane5 = new THREE.Mesh( plane5_geometry, plane2_material );
scene.add( plane5 );
plane5.position.z = 0.15

const plane6_geometry = new THREE.PlaneGeometry( 2.3, 2.3);
const plane6_material = new THREE.MeshBasicMaterial( {color: 0x9f9955, side: THREE.DoubleSide} );
const plane6 = new THREE.Mesh( plane6_geometry, plane3_material );
scene.add( plane6 );
plane6.position.z = 0.16

animate();