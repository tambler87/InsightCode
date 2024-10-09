// Matrix Rain Effect using Babylon.js
window.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('matrix-canvas');
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = function () {
        const scene = new BABYLON.Scene(engine);
        const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());

        // Matrix rain logic (customizable to your liking)
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        const columns = canvas.width / 20;
        let drops = [];

        for (let x = 0; x < columns; x++) drops[x] = 1;

        function draw() {
            canvas.getContext('2d').fillStyle = "rgba(0, 0, 0, 0.05)";
            canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

            canvas.getContext('2d').fillStyle = "#00FF00";
            canvas.getContext('2d').font = "15px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                canvas.getContext('2d').fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }

        setInterval(draw, 33);
    };

    const scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });
});

// Collapsible Section Toggle with Smooth Animation
document.querySelectorAll('.collapsible-heading').forEach(function (heading) {
    heading.addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.maxHeight = null;
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
