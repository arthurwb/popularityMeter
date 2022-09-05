const jsonPath = 'popularityMeter/data.json';
async function getData() {
    const response = await fetch(jsonPath);
    const data = await response.json();
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
