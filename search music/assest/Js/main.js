let btn = document.querySelector(".btn");


btn.addEventListener("click",() => {
    let input = document.querySelector(".input"),
        music = document.querySelector(".music")

    fetch(`https://musicapi.x007.workers.dev/search?q=${input.value}&searchEngine=gaama`, () => {
        method: "GET"
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.forEach(element => {
            music.innerHTML += `
            <audio controls src="${element.previewurl}">
            </audio>
            <h1>${data.title}</h1>
            `
        });
    })
})