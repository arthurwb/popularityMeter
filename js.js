const jsonPath = '/popularityMeter/data.json';
const response = fetch(jsonPath);
const data = JSON.parse(response.json());

function getData() {
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
