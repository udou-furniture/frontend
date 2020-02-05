import React from 'react';

import { connect } from 'react-redux';

import productsList from '../../productsList';

var OBJLoader = require('three-obj-loader');
var MTLLoader = require('three-mtl-loader');
var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);
let myOBJ;
OBJLoader(THREE);

function mapStateToProps(state) {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour
    };
}

class Viewer extends React.Component {
    getDefaultsfromID = e => {
        var example;

        productsList.forEach(i => {
            if (i.id === e) {
                example = i;
                return example;
            }
        });

        let exampleConfig = {
            newHeight: example.configuration.height,
            newWidth: example.configuration.width,
            newDepth: example.configuration.depth,
            newColour: example.configuration.colour
        };

        this.props.dispatch({ type: 'SET_DEFAULTS', exampleConfig });
    };

    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        this.setControls();
        this.loadObject();
    }

    componentDidUpdate() {
        this.updateScale();
    }

    sceneSetup = () => {
        const width = this.el.clientWidth;
        const height = 500;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            1000 * 10 // far plane
        );

        // set some distance from a cube that is located at z = 0
        // this.camera.position.x = this.props.height*15;
        // this.camera.position.y = this.props.height*15;
        this.camera.position.z = this.props.height * 5 + 20;

        this.camera.aspect = width / height;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        // this.renderer.setClearColor(0x000000, 1);
        // this.renderer.shadowMapEnabled = true;
        // this.renderer.shadowMapType = THREE.PCFSoftShadowMap;

        this.el.appendChild(this.renderer.domElement); // mount using React ref
    };

    addCustomSceneObjects = () => {
        const lights = [];
        lights[0] = new THREE.PointLight(0x111111, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);

        lights[0].position.set(0, 2000, 0);
        lights[1].position.set(1000, 2000, 1000);
        lights[2].position.set(-1000, -2000, -1000);
        // lights[0].shadowCameraVisible = true;
        // lights[0].castShadow = true;
        // lights[1].castShadow = true;
        // lights[2].castShadow = true;

        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);

        //     var geometry = new THREE.PlaneGeometry((10, 10, 50, 50));
        //     var material = new THREE.MeshBasicMaterial({
        //       color: 0xffff00,
        //       side: THREE.DoubleSide
        //     });
        //     this.plane = new THREE.Mesh(geometry, material);
        // this.scene.add(this.plane);

        //     this.plane.rotateX(1.57);
        //     this.plane.translateZ(this.props.height * 10)
        //     this.plane.position((0,0,this.props.height* 10))

        // .setRotation([180,0,0])
    };

    setControls = () => {
        this.controls = new OrbitControls(this.camera, this.el);
        this.controls.width = this.el.clientWidth;
        this.controls.height = 500;
        this.controls.update();
    };

    updateScale = () => {
        myOBJ = this.myOBJ;

        myOBJ.scale.x = this.props.width / 100;

        myOBJ.scale.y = this.props.height / 100;
        myOBJ.scale.z = this.props.depth / 50;

        switch (this.props.colour) {
        case 'Natural':
            this.colourValue = 0x7d6a57;
            break;

        case 'Black':
            this.colourValue = 0x2d2f30;

            break;
        case 'White':
            this.colourValue = 0xffffff;

            break;
        default:
            this.colourValue = 0x2d2f30;
        }

        myOBJ.children.forEach(item => {
            item.material.color.setHex(this.colourValue);
        });

        myOBJ.children[1].material.color.setHex(0xffe8bf);
        myOBJ.children[2].material.color.setHex(0xffe8bf);
        myOBJ.children[3].material.color.setHex(0xffe8bf);
    };

    loadObject = () => {
        const scene = this.scene;
        // let mtlLoader = new MTLLoader();
        // // mtlLoader.setTexturePath('./2020 Jan Kylie Dillon Bookcase')
        // mtlLoader.setPath('/');
        // mtlLoader.load('./cabinet.sample.mtl', (materials) => {
        //   materials.preload();
        let objLoader = new THREE.OBJLoader();

        myOBJ = this.myOBJ;

        objLoader.setPath('/');
        objLoader.load('./shelf-model-no-plane.obj', object => {
            scene.add(object);
            object.scale.set(
                this.props.width / 100,
                this.props.height / 100,
                this.props.depth / 50
            );
            // object.castShadow = true;
            // object.receiveShadow =true;
            this.myOBJ = object;

            object.children.forEach(item => {
                item.material.color.setHex(0x2d2f30);
            });

            object.children[1].material.color.setHex(0xffe8bf);
            object.children[2].material.color.setHex(0xffe8bf);
            object.children[3].material.color.setHex(0xffe8bf);
            // this.myOBJ.scale.x = this.props.height / 100;
            // this.myOBJ.scale.y = this.props.width / 100;
            // this.myOBJ.scale.z = this.props.depth / 50;
        });
    };

    resizeRendererToDisplaySize = renderer => {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
    };

    startAnimationLoop = () => {
        this.renderer.render(this.scene, this.camera);
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
        this.resizeRendererToDisplaySize(this.renderer);
    };

    render() {
        return <div className="viewer" ref={ref => (this.el = ref)} />;
    }
}

export default connect(mapStateToProps)(Viewer);
