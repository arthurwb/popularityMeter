// const jsonPath = '/popularityMeter/data.json';
// const response = fetch(jsonPath);
// const data = response.json();

import data from './data.json' assert {type: 'json'};

function getData() {
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
