const catPicture = document.getElementById("cat_picture");
const dogPicture = document.getElementById("dog_picture");
const catBtn = document.getElementById("cat_btn");
const dogBtn = document.getElementById("dog_btn");

catBtn.addEventListener("click", getCatPhoto);
dogBtn.addEventListener("click",getDogPhoto);

onLoad();

function onLoad(){
    fetch(" https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data =>{
        catPicture.innerHTML =`<img src="${data[0].url}"/>`
        // console.log(data[0].url);
    })

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(data =>{
        dogPicture.innerHTML =`<img src= "${data.message}"/>`
        // console.log(data.message);
    })
}

function getCatPhoto(){
    fetch(" https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data =>{
        catPicture.innerHTML =`<img src="${data[0].url}"/>`
        // console.log(data[0].url);
    })
}

function getDogPhoto(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(data =>{
        dogPicture.innerHTML =`<img src= "${data.message}"/>`
        // console.log(data.message);
    })
}