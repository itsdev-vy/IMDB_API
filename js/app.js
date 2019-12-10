var search = document.getElementById("search");
search.addEventListener('keyup' , (e) => {
   // console.log(e.target.value);
   var searchText = e.target.value;
   getMovies(searchText)
});

function getMovies(searchText) {
    const imdbApi = `http://www.omdbapi.com/?s=${searchText}&apikey=3a44ee82`;

    window
    .fetch(imdbApi)
    .then(movies => {
        movies
        .json()
        .then(data => {
           // console.log(data.Search);
           const [...MovieData] = data.Search;
           var output = [];
           for(let movie of MovieData){
               output += `
               
            <div class = "container">
                <section id = "movies">
                    <h1>${movie.Title}</h1>
                    <span class = "badge badge-success">${movie.Year}</span>
                    
                    <p>
                            <img src="${movie.Poster}" class="img-poster"/>
                           
                            <p><button class="btn btn-dark btn-block">go to movie</button></p>
                    </p>
                </section>               
            </div>
               `;
               document.getElementById("template").innerHTML=output;
           }

        })
        .catch(err => console.log(err));
        
    })
    .catch(err => console.log(err));

}