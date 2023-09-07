const eventKey = document.getElementById('eventKey');
const keyCode = document.getElementById('keycode');
const code = document.getElementById('code');

document.addEventListener('keydown', function (event) {
    const letterLeft = event.key;
    const lettermiddle = event.keyCode;
    const letterRight = event.code;

    eventKey.textContent = letterLeft;
    keyCode.textContent = lettermiddle;
    code.textContent = letterRight;
})

