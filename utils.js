function clearCards() {
  GLOBALS.masterContainer.innerHTML = "";
}

function successMsg(text) {
  Swal.fire({
    title: "Success!",
    text: text,
    icon: "success",
  });
}

function errorMsg(text) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
}

function addToFavorites(element, index) {
  favs = JSON.parse(localStorage?.getItem("favorites")) || [];

  let isDuplicate = false;

  favs.forEach((fav) => {
    const id = fav.imdbID;
    if (id === element.imdbID) {
      isDuplicate = true;
    }
  });

  if (!isDuplicate) {
    favs.push(element);
    localStorage.setItem("favorites", JSON.stringify(favs));
    console.log(`Item [${element.imdbID}] was added to favorites.`);
    deleteCard(index);
    drawCards(movies);
    successMsg("Added successfully to favorites.");
  } else {
    errorMsg("This is already favored!");
  }
}

function isInFavorites(element) {
  const localFavLs = JSON.parse(localStorage?.getItem("favorites")) || [];
  const isFav = false;
  localFavLs.forEach((lsFav) => {
    if (lsFav === element) {
      isFav = true;
    }
  });
  return isFav;
}

// remove from arr
function removeFromFavorites(element) {
  const newFav = JSON.parse(localStorage?.getItem("favorites")) || [];

  let foundIndex = -1;
  for (let i = 0; i < newFav.length; i++) {
    if (newFav[i].imdbID === element.imdbID) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex !== -1) {
    newFav.splice(foundIndex, 1);
    localStorage.setItem("favorites", JSON.stringify(newFav));
    console.log(`Item [${element.imdbID}] has been removed from favorites.`);
    init();
    successMsg("Removed successfully from favorites!");
  } else {
    errorMsg("Isn't in the favorites...");
  }
}

// delete card
function deleteCard(index) {
  movies.splice(index, 1);

  localStorage.setItem("drawArray", JSON.stringify(movies));

  let moviesToDraw = JSON.parse(localStorage.getItem("drawArray"));

  init();
}
