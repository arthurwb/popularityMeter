const jsonPath = './data.json';
var data;
fetch(jsonPath).then(response => {
    data = response.json();
});

function getData() {
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
