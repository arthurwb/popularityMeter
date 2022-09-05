const jsonPath = '/popularityMeter/data.json';
const response = fetch(jsonPath);
const data = response.json;

function getData() {
    console.log(data);
    console.log(data[0].name);
}

function init() {
    getData();
}
window.onload = init();
