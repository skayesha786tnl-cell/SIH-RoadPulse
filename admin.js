// =========================
// ADMIN DASHBOARD
// =========================

const priorityFilter =
    document.getElementById("priorityFilter");

const complaintRows =
    document.querySelectorAll(".admin-row");


priorityFilter.addEventListener("change", function () {

    const selected =
        this.value;


    complaintRows.forEach(function (row) {

        const priority =
            row.dataset.priority;


        if (
            selected === "all" ||
            selected === priority
        ) {

            row.style.display = "grid";

        } else {

            row.style.display = "none";

        }

    });

});


// =========================
// VIEW COMPLAINT
// =========================

function viewComplaint(complaintId) {

    alert(
        "Opening complaint: " + complaintId
    );

    console.log(
        "Selected complaint:",
        complaintId
    );
}