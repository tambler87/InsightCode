import * as BABYLON from 'https://cdn.babylonjs.com/babylon.js';

// BabylonJS Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const engine = new BABYLON.Engine(canvas, true);

const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);


    // Matrix Rain Effect
    const matrixTexture = new BABYLON.DynamicTexture("dynamic texture", { width: 512, height: 512 }, scene, false);
    matrixTexture.hasAlpha = true;
    const matrixMaterial = new BABYLON.StandardMaterial("mat", scene);
    matrixMaterial.diffuseTexture = matrixTexture;
    matrixMaterial.opacityTexture = matrixTexture;

    const matrixPlane = BABYLON.MeshBuilder.CreatePlane("matrixPlane", { height: 30, width: 15 }, scene);
    matrixPlane.position.z = 0;
    matrixPlane.position.y = 5;
    matrixPlane.material = matrixMaterial;

    // Animate Matrix Rain
    let textPosY = 0;
    scene.registerBeforeRender(function () {
        const ctx = matrixTexture.getContext();
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, 512, 512);
        ctx.fillStyle = "lime";
        ctx.font = "20px Courier";
        for (let i = 0; i < 512; i += 20) {
            const char = String.fromCharCode(0x30A0 + Math.random() * 96);
            ctx.fillText(char, i, textPosY);
        }
        textPosY = (textPosY + 10) % 512;
        matrixTexture.update();
    });

    return scene;
};

const scene = createScene();
engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});

// Collapsible Sections
const collapsibles = document.querySelectorAll('.collapsible h2');
collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
