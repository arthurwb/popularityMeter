const jsonPath = './data.json';
fetch(jsonPath).then(response => {
    const data = response.json();
});

function getData() {
    console.log(data);
}

function init() {
    getData();
}
window.onload = init();
