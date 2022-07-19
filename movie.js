const APIKEY=`3cdf653f0b386a1982213272395a75f6`;

document.addEventListener('DOMContentLoaded', main);

function main(){
    var container_element = document.getElementById("container");
    container_element.innerHTML = '';

    const url = getKeyword();
    showMovies(url);
}

function getKeyword() {
    let keyword = document.getElementById('keyword').value;

    if (keyword !== ``){
        display.innerHTML=`Showing movies related to "${keyword}".`;
    }else{
        display.innerHTML=`Showing movies that are currently playing.`;
    }

    return (!keyword)
    ? `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`
    : `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${keyword}`;
}

function getClassByRate(vote) {
  if(vote >= 8){
    return 'green';
  }else if(vote >= 5){
    return 'orange';
  }else{
    return 'red';
  }
}

function showMovies(url){
    fetch(url)
        .then(res => {
            return res.json(); })
        .then(movies => {
            movies.results.forEach(movie => {
                movie_card = `
                 <div id="movie_card">
                  <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}"" alt="${movie.title}">
                  <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
                  </div>
                  <div class="overview">
                   <h3>overview</h3>
                   ${movie.overview}
                 </div>
                    `;
            return container.insertAdjacentHTML('afterbegin', movie_card);
            });
        })
        .catch(error => {
            console.error(error);
        });
    }