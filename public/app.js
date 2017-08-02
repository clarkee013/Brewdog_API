var app = function(){
    var url = "https://api.punkapi.com/v2/beers"
    makeRequest(url, requestComplete)
    
}

var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();
};

var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var beers = JSON.parse(jsonString);
    populateDropDown(beers);
    // listBeersOnPage(beers);
    // showPicturesOfBeers(beers); 
}

// var listBeersOnPage = function (beers) {
//     var li = document.getElementById('beer-list');
//     beers.forEach(function (beer) {
//         var liA = document.createElement('li');
//         liA.innerText = beer.name;
//         var image = document.createElement('img');
//         image.src = beer.image_url;
//         image.style.height = "200px";
//         var tagLine = document.createElement('tagLine');
//         tagLine.innerText = beer.tagline;
//         var blurb = document.createElement('blurb');
//         blurb.innerText = beer.description;
//         li.appendChild(liA);
//         li.appendChild(image);
//         li.appendChild(tagLine);
//         li.appendChild(blurb);
//     })
// }

var populateDropDown = function (beers) {
    var select = document.getElementById('beerDropDown');
    beers.forEach(function (beer, index) {
        var option = document.createElement('option');
        option.innerText = beer.name;
        option.value = index;
        select.appendChild(option);
    })
    select.addEventListener("change", function(){
        var index = select.value;
        var beer = beers[index];
        displayBeerDetails(beer);
     
    });

    var displayBeerDetails = function (beer) {
    var name = document.getElementById('beer-name');
    var tagline = document.getElementById('tagline');
    var description = document.getElementById('description');
    name.innerText = beer.name;
    tagline.innerText = beer.tagline;
    description.innerText = beer.description;
}
}





// var showPicturesOfBeers = function(beers){
//     var ul = document.getElementById('beer-pictures');
//     beers.forEach(function (beer) {
//         var li = document.createElement('li');
//         li.innerText = beer.image_url;
//         ul.appendChild(li);
//     })}



window.addEventListener('load', app);
