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
    listBeersOnPage(beers);
    // showPicturesOfBeers(beers); 
}

var listBeersOnPage = function (beers) {
    var ul = document.getElementById('beer-list');
    beers.forEach(function (beer) {
        var li = document.createElement('li');
        li.innerText = beer.name;
        var image = document.createElement('img');
        image.src = beer.image_url;
        image.style.height = "200px";
        var tagLine = document.createElement('tagLine');
        tagLine.innerText = beer.tagline;
        var blurb = document.createElement('blurb');
        blurb.innerText = beer.description;
        ul.appendChild(li);
        ul.appendChild(image);
        ul.appendChild(tagLine);
        ul.appendChild(blurb);
    })
}



// var showPicturesOfBeers = function(beers){
//     var ul = document.getElementById('beer-pictures');
//     beers.forEach(function (beer) {
//         var li = document.createElement('li');
//         li.innerText = beer.image_url;
//         ul.appendChild(li);
//     })}



window.addEventListener('load', app);
