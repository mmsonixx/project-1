

export function renderMovies(infoMovies, container) {
    if (!container) {
        console.error("Не знайдено")
         return;
    };
    const html = infoMovies.reduce((acc, element) => {
        return (acc += `<ul class="list__movies">
  <li class="item__movies">
    <article class="movie">
      <div class="box__img">
        <img src="${element.poster}" alt="${element.title}" class="img__movies">
      </div>
          <div class="box__info">
            <h2 class="title__movie">${element.title}</h2>
            <p class="since__movie">${element.year}</p>
            <p class="info__movie">${element.description}</p>
            <p class="genre__movie">${element.genre}</p>
            <p class="raiting__movie">${element.rating}</p>
          </div>
    </article>
  </li>
</ul>`);
    }, "");
    container.innerHTML = html;
};

