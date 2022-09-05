import data from './data.json' assert {type: 'json'};
// const jsonPath = '/popularityMeter/data.json';
// const response = fetch(jsonPath);
// const data = response.json();

function getData() {
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
