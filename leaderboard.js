// =========================
// ROADPULSE LEADERBOARD
// =========================

const rankingFilter =
    document.getElementById("rankingFilter");

const leaderboardRows =
    document.querySelectorAll(".leaderboard-row");


rankingFilter.addEventListener("change", function () {

    const selected =
        this.value;

    leaderboardRows.forEach(function (row) {

        const rank =
            Number(row.dataset.rank);


        if (
            selected === "all" ||
            rank <= 10
        ) {

            row.style.display = "grid";

        } else {

            row.style.display = "none";

        }

    });

});


console.log(
    "RoadPulse Leaderboard loaded successfully."
);