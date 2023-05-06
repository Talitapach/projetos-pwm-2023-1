function searchMovie() {
    let movieName = document.getElementById("movie-name").value;

    let omdbUrl = "https://www.omdbapi.com/?t=" + movieName + "&apikey=2444501a";

    fetch(omdbUrl).then(response => response.json()).then(data => {
          let movieInfoDiv = document.getElementById("movie-info");
          movieInfoDiv.innerHTML = `
                <img src="${data.Poster}">
                <h2>${data.Title} (${data.Year})</h2>
                <p>Director: ${data.Director}</p>
                <p>Actors: ${data.Actors}</p>
                <p>Plot: ${data.Plot}</p>
                <p>IMDB Rating: ${data.imdbRating}</p>
                <p>Metascore: ${data.Metascore}</p>`;
    }).catch(error => console.error(error));
}