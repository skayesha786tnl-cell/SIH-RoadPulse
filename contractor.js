// =========================
// CONTRACTOR DASHBOARD
// =========================

const repairFilter =
    document.getElementById("repairFilter");

const repairCards =
    document.querySelectorAll(".repair-card");


// Filter repairs

repairFilter.addEventListener("change", function () {

    const selectedStatus = this.value;

    repairCards.forEach(function (card) {

        const cardStatus =
            card.dataset.status;

        if (
            selectedStatus === "all" ||
            cardStatus === selectedStatus
        ) {

            card.style.display = "grid";

        } else {

            card.style.display = "none";

        }

    });

});


// View repair

function viewRepair(repairId) {

    alert(
        "Viewing repair: " + repairId
    );

    console.log(
        "Selected repair:",
        repairId
    );

}


// Update repair

function updateRepair(repairId) {

    alert(
        "Repair update selected for: " + repairId
    );

    console.log(
        "Updating repair:",
        repairId
    );

}


// After-repair photo

const afterPhoto =
    document.getElementById("afterPhoto");

const photoName =
    document.getElementById("photoName");


afterPhoto.addEventListener("change", function () {

    if (this.files.length > 0) {

        photoName.textContent =
            "Selected: " + this.files[0].name;

    } else {

        photoName.textContent =
            "No photo selected";

    }

});


// Completion button

const completeRepairBtn =
    document.getElementById("completeRepairBtn");

const completionMessage =
    document.getElementById("completionMessage");


completeRepairBtn.addEventListener(
    "click",
    function () {

        if (afterPhoto.files.length === 0) {

            completionMessage.textContent =
                "❌ Please upload an after-repair photo.";

            completionMessage.style.color =
                "red";

            return;
        }


        completionMessage.textContent =
            "✅ Repair completion submitted successfully!";

        completionMessage.style.color =
            "green";


        console.log(
            "After-repair photo:",
            afterPhoto.files[0].name
        );

    }
);