
const xhr   = new XMLHttpRequest();
const input = document.getElementById('servo-input');

function sendRequest() {
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };

    const data = { servoPos: input.value };
    const json = JSON.stringify(data);

    const serverIP = '192.168.1.5';
    xhr.open('POST', `http://${serverIP}:9090/servo`, true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);
}
