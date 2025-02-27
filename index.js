document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  let favs = [];
  if (typeof movies !== "undefined") {
    if (localStorage?.getItem("drawArray")) {
      movies = JSON.parse(localStorage.getItem("drawArray"));
    }
    getTypeStats(movies);
    drawStats(movies);
    drawCards(movies);
  } else {
    if (localStorage?.getItem("favorites")) {
      favs = JSON.parse(localStorage.getItem("favorites")) || [];
    }
    getTypeStats(favs);
    drawStats(favs);
    drawCards(favs);
  }
}

const GLOBALS = {
  masterContainer: document.getElementById("master-container"),
  resetAllBtn: document.getElementById("resetMovies"),
  pruneFavs: document.getElementById("pruneFavs"),
};

try {
  GLOBALS.resetAllBtn.addEventListener("click", function () {
    localStorage.removeItem("drawArray");
    location.reload();
  });
} catch (error) {}

try {
  GLOBALS.pruneFavs.addEventListener("click", function () {
    localStorage.removeItem("favorites");
    location.reload();
  });
} catch (error) {}

function drawCards(arr) {
  clearCards();

  const container = GLOBALS.masterContainer;

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    const card = document.createElement("div");
    if (typeof movies !== "undefined") {
      card.innerHTML = getCardHTML(elem);
    } else {
      card.innerHTML = getFavCard(elem);
    }

    try {
      // favorite button
      const favButton = card.querySelector(`#fav-${elem.imdbID}`);
      favButton.addEventListener("click", function () {
        addToFavorites(elem, i);
      });
    } catch (error) {}

    try {
      // remove favorite button
      const favRemoveButton = card.querySelector(`#rem-${elem.imdbID}`);
      favRemoveButton.addEventListener("click", function () {
        removeFromFavorites(elem);
      });
    } catch (error) {}

    try {
      // delete button
      const delButton = card.querySelector(`#del-${elem.imdbID}`);
      delButton.addEventListener("click", function () {
        deleteCard(i);
      });
    } catch (error) {}

    container.appendChild(card);
  }
}
