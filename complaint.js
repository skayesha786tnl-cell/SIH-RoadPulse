// =========================
// COMPLAINT TRACKING
// =========================

console.log(
    "RoadPulse Complaint Tracking loaded successfully."
);


// Demo complaint ID

const complaintId =
    document.querySelector(".complaint-id");

if (complaintId) {

    console.log(
        "Tracking complaint:",
        complaintId.textContent
    );

}