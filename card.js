function getCardHTML(m) {
  // random pic for thumbnail
  const randImg = Math.floor(Math.random() * m.Images.length);
  return `
        <div id="movie-${m.imdbID}" class="relative flex justify-between w-100 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md min-h-[700px]">
            <div>
                <div
                    style="box-shadow: hsla(279 100% 31% / 0.6) 5px 10px 10px;" class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
                >
                    <img src="${m.Images[randImg]}" alt="movie poster" class="object-cover w-full h-full" />
                </div>
                <div class="p-6 flex flex-col justify-between">
                    <h5
                        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                    >
                        ${m.Title} (${m.Year}) 🎬
                    </h5>
                    <div class="more-info">
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            ${m.Plot} 📖
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Age Restriction:</b> ${m.Rated} 🔞
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Released:</b> ${m.Released} 🗓️
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Runtime:</b> ${m.Runtime} ⏳
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Genre:</b> ${m.Genre} 🎭
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Director:</b> ${m.Director} 🎥
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Writer:</b> ${m.Writer} ✍️
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>imdbRating:</b> ${m.imdbRating} ⭐
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>imdbVotes:</b> ${m.imdbVotes} 👍
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>imdbID:</b> ${m.imdbID} 🆔
                        </p>
                        <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                            <b>Type:</b> ${m.Type} 🗂️
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 p-6 pt-0">
                <button id="del-${m.imdbID}" 
                    class="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-600 bg-red-600 hover:bg-red-700"
                >
                    <svg
                        viewBox="0 0 1.625 1.625"
                        class="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                        height="15"
                        width="15"
                    >
                        <path
                            d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                        ></path>
                        <path
                            d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                        ></path>
                        <path
                            d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                        ></path>
                    </svg>
                    <svg
                        width="16"
                        fill="none"
                        viewBox="0 0 39 7"
                        class="origin-right duration-500 group-hover:rotate-90"
                    >
                        <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                        <line
                            stroke-width="3"
                            stroke="white"
                            y2="1.5"
                            x2="26.0357"
                            y1="1.5"
                            x1="12"
                        ></line>
                    </svg>
                    <svg width="16" fill="none" viewBox="0 0 33 39" class="">
                        <mask fill="white" id="path-1-inside-1_8_19">
                            <path
                                d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                            ></path>
                        </mask>
                        <path
                            mask="url(#path-1-inside-1_8_19)"
                            fill="white"
                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        ></path>
                        <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                        <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                    </svg>
                </button>
                <button id="fav-${m.imdbID}" title="Save" class="cursor-pointer flex items-center fill-yellow-300 bg-purple-950 hover:bg-purple-900 active:border active:border-pink-400 rounded-md duration-100 p-2">
                    <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <span class="text-sm text-yellow-300 font-bold pr-1">Add Fav</span>
                </button>
            </div>
        </div>
`;
}

function getFavCard(m) {
  // random pic for thumbnail
  const randImg = Math.floor(Math.random() * m.Images.length);
  return `
          <div id="movie-${m.imdbID}" class="relative flex justify-between w-100 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md min-h-[700px]">
              <div>
                  <div
                      style="box-shadow: hsla(279 100% 31% / 0.6) 5px 10px 10px;" class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
                  >
                      <img src="${m.Images[randImg]}" alt="movie poster" class="object-cover w-full h-full" />
                  </div>
                  <div class="p-6 flex flex-col justify-between">
                      <h5
                          class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                      >
                          ${m.Title} (${m.Year}) 🎬
                      </h5>
                      <div class="more-info">
                          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                              ${m.Plot} 📖
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Age Restriction:</b> ${m.Rated} 🔞
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Released:</b> ${m.Released} 🗓️
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Runtime:</b> ${m.Runtime} ⏳
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Genre:</b> ${m.Genre} 🎭
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Director:</b> ${m.Director} 🎥
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Writer:</b> ${m.Writer} ✍️
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>imdbRating:</b> ${m.imdbRating} ⭐
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>imdbVotes:</b> ${m.imdbVotes} 👍
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>imdbID:</b> ${m.imdbID} 🆔
                          </p>
                          <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                              <b>Type:</b> ${m.Type} 🗂️
                          </p>
                      </div>
                  </div>
              </div>
              <div class="flex gap-4 p-6 pt-0">
                  <button id="rem-${m.imdbID}" title="removeFav" class="cursor-pointer flex items-center fill-yellow-300 bg-purple-950 hover:bg-purple-900 active:border active:border-pink-400 rounded-md duration-100 p-2">
                      <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                      </svg>
                      <span class="text-sm text-yellow-300 font-bold pr-1">Remove Fav</span>
                  </button>
              </div>
          </div>
  `;
}
