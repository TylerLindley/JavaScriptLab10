//Getting a new cat picture using the FetchAPI/CatAPI 
//Using CatAPI and CatFacts: https://docs.thecatapi.com/
//Researched/Followed along from: https://www.youtube.com/watch?v=7YcW25PHnAA and https://www.youtube.com/watch?v=L4-Immxr9bY . A lot was done by me based on stuff we did in class though.

let getNewCat = document.getElementById('catPicButton');
let getNewCatFact = document.getElementById('catFactButton');

getNewCat.addEventListener('click', fetchPics);
getNewCatFact.addEventListener('click', fetchFacts);

function fetchFacts() {
    let catFactDiv = document.getElementById('catFactDiv');
    catFactDiv.innerHTML = '';
    
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(response => response.text())
    .then((data) => {
        let catFact = JSON.parse(data).text;

        let catFactElement = document.createElement('p');
        let node = document.createTextNode(catFact);
        //catFactElement.appendChild(catFact);
        catFactElement.appendChild(node);

        let facts = document.getElementById('catFactDiv');
        facts.appendChild(catFactElement);

        
    })
}


function fetchPics() {
    let catsDiv = document.getElementById('catsDiv');
    catsDiv.innerHTML = '';
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) => {
            let catsImageURL = data[0].url

            let catImageElement = document.createElement('img')
            //Setting the src attribute for the image to be the imageURL using concatenation
            catImageElement.setAttribute('src', catsImageURL);

            let catsDiv = document.getElementById('catsDiv');
            catsDiv.appendChild(catImageElement);
        })
}