
const xhr   = new XMLHttpRequest();
const btn   = document.getElementById('btn');
const input = document.getElementById('servo-input');

function sendRequest() {
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };

    const data = { servoPos: input.value };
    const json = JSON.stringify(data);

    xhr.open('POST', 'http://192.168.1.2:9090/servo', true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);
}
