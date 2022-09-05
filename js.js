const jsonPath = '/popularityMeter/data.json';

function getData() {
    const response = fetch(jsonPath);
    const data = response.json();
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
