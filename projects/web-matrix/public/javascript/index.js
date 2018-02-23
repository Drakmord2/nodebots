
const xhr = new XMLHttpRequest();

const labels = document.getElementsByTagName('label');
for(let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', () => {
        const input = labels[i].firstElementChild;

        if (input.checked) {
            labels[i].className = "btn btn-primary active";
            return;
        }

        labels[i].className = "btn btn-primary";
    });
}

function sendRequest(json) {
    const serverIP = '192.168.1.5';
    xhr.open('POST', `http://${serverIP}:9090/matrix`, true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);
}

function draw() {
    const inputs = document.getElementsByTagName('input');

    const data = createMatrix(inputs);
    const json = JSON.stringify(data);

    sendRequest(json);
}

function clean() {
    const inputs = document.getElementsByTagName('input');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }

    const labels = document.getElementsByTagName('label');
    for(let i = 0; i < labels.length; i++) {
        labels[i].className =  "btn btn-primary";
    }

    const data = createMatrix(inputs);
    const json = JSON.stringify(data);

    sendRequest(json);
}

function createMatrix(inputs) {
    let matrix  = [];
    let rowData = [];

    for(let i = 0; i < inputs.length; i++) {
        if (rowData.length === 8) {
            matrix.push(rowData.join(''));
            rowData = [];
        }

        if (inputs[i].checked) {
            rowData.push(1);
            continue;
        }

        rowData.push(0);
    }
    matrix.push(rowData.join(''));

    return { matrix: matrix };
}