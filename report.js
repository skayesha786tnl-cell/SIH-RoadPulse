// =========================
// IMAGE PREVIEW
// =========================

const imageInput = document.getElementById("potholeImage");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        imagePreview.innerHTML = "";
        return;
    }

    const imageURL = URL.createObjectURL(file);

    imagePreview.innerHTML = `
        <img src="${imageURL}" alt="Pothole Preview">
    `;
});


// =========================
// GET LOCATION
// =========================

const locationBtn = document.getElementById("locationBtn");
const locationStatus = document.getElementById("locationStatus");

let userLocation = null;

locationBtn.addEventListener("click", function () {

    if (!navigator.geolocation) {

        locationStatus.textContent =
            "Geolocation is not supported by your browser.";

        return;
    }

    locationStatus.textContent =
        "Detecting your location...";

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            userLocation = {
                latitude: latitude,
                longitude: longitude
            };

            locationStatus.textContent =
                `Location detected: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
        },

        function () {

            locationStatus.textContent =
                "Unable to get your location. Please allow location access.";
        }
    );
});


// =========================
// VOICE REPORT
// =========================

const voiceBtn = document.getElementById("voiceBtn");
const voiceStatus = document.getElementById("voiceStatus");
const description = document.getElementById("description");

let recognition;

if ("webkitSpeechRecognition" in window) {

    recognition = new webkitSpeechRecognition();

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.lang = "en-IN";

    recognition.onstart = function () {

        voiceStatus.textContent =
            "🎙️ Listening... Please speak.";

        voiceBtn.textContent =
            "⏹️ Stop Voice Report";
    };

    recognition.onresult = function (event) {

        const transcript =
            event.results[0][0].transcript;

        description.value = transcript;

        voiceStatus.textContent =
            "✅ Voice converted to text.";

        voiceBtn.textContent =
            "🎤 Start Voice Report";
    };

    recognition.onerror = function () {

        voiceStatus.textContent =
            "❌ Could not recognize your voice.";

        voiceBtn.textContent =
            "🎤 Start Voice Report";
    };

    recognition.onend = function () {

        voiceBtn.textContent =
            "🎤 Start Voice Report";
    };

} else {

    voiceBtn.disabled = true;

    voiceStatus.textContent =
        "Voice recognition is not supported in this browser.";
}


voiceBtn.addEventListener("click", function () {

    if (!recognition) {
        return;
    }

    recognition.start();
});


// =========================
// SUBMIT REPORT
// =========================

const submitBtn =
    document.getElementById("submitReport");

submitBtn.addEventListener("click", function () {

    const image = imageInput.files[0];

    const reportDescription =
        description.value.trim();

    if (!image) {

        alert("Please upload a pothole photo.");

        return;
    }

    if (!userLocation) {

        alert("Please get your location.");

        return;
    }

    if (!reportDescription) {

        alert("Please provide a description or use voice reporting.");

        return;
    }

    alert(
        "Pothole report submitted successfully! 🚧"
    );

    console.log({
        image: image.name,
        description: reportDescription,
        location: userLocation
    });
});