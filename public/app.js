var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  makeRequest(url, requestComplete);

}

var makeRequest = function(url, callback){
  //create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
  // set the type of requst we want the url we want to call
  request.open("GET", url);
  //set the call back we want it to use when it has completed the call
  request.onload = callback;
  //send the request
  request.send();
}

var requestComplete = function(){
  // this will be the request object itself
  if (this.status !=200) return;
  // grab the response text
  var jsonString = this.responseText;
  //console.log(jsonString);
  var spotify = JSON.parse(jsonString);
  var albums = spotify.albums.items;
  populateList(albums);
}


var populateList = function(albums){
  console.log(albums);
  var div = document.getElementById('albums');

  albums.forEach(function(album){
    // album title-------------------------------
    var li = document.createElement('li');
    li.innerText = album.name;
    div.appendChild(li);

    // album artist-------------------------------
    var li = document.createElement('li');
    li.innerText = album.artists[0].name;
    div.appendChild(li);

    // album link-------------------------------
    var albumLink = document.createElement('a');
    albumLink.innerText = "link";
    albumLink.href = album.external_urls.spotify;
    div.appendChild(albumLink);

    // album image-------------------------------
    var albumImage = document.createElement('img');
    albumImage.src = album.images[1].url;
    div.appendChild(albumImage);

    



  });
}





window.onload = app;