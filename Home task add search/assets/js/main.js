
fetch('https://api.tvmaze.com/shows')
.then(res=>res.json())
.then(a=>{getFilms(a);
})




var film=document.getElementById("film-1");
function getFilms(films){
    film.innerHTML="";



    films.forEach(char=>{
        film.innerHTML+=
    
        `<div class="col-md-3">
        <img src="${char.image.medium}" class="card-img-top" alt="...">
        <div class="card-body" id="sizee" >
          <h6 class="card-title">${char.name}</h6>
          <p class="card-text">Raiting: ${char.rating.average}</p>         
          <p class="card-text">${char.language}</p>

          <a href="#" class="btn btn-primary ">Info</a>
        </div>
      </div>`
      
      
    })
}
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

function searchShows(query) {
    axios.get(`ttps://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => {
      getFilms(response.data.map(item => item.show));
    })
  
  }
  const searchForm = document.getElementById("film-form")
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchInput = document.getElementById("film-search")
    const query = searchInput.value;
    searchShows(query);
  console.log(query)
  
  ;});