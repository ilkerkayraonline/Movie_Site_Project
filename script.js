const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItems = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItems - (4 + clickCounter) >= 0) {

            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300

                }px)`;

        } else {
            movieLists[i].style.transform = "translateX(0)";
        }

    });

});

/* DARK MODE */


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-item-title")

ball.addEventListener("click", function() {
    items.forEach((items) => items.classList.toggle("active"));
}
)
