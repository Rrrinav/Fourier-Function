let time = 0;
let wave = [];

function setup() {
    createCanvas(1000, 700);
}

function draw() {
    background(0);
    translate(250, 200);

    let circles_number = document.getElementById('input_number').value;

    let x = 0;
    let y = 0;

    for (let i = 0; i < circles_number; i++) {
        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let radius = 100 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);

        fill(255);
        stroke(255);
        line(prevx, prevy, x, y);
    }
    wave.unshift(y);

    translate(150, 0);
    line(x - 150, y, 0, wave[0]);

    beginShape();
    for (let i = 0; i < wave.length; i++) {
        noFill();
        vertex(i, wave[i]);
    }
    endShape();

    time += 0.03;

    if (wave.length > 550) {
        wave.pop();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('input_number');

    numberInput.addEventListener('input', function() {
        // You can update the value if needed here
        console.log(numberInput.value);
    });
});
