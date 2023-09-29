// script.js

// Check if the browser supports localStorage
if (typeof Storage !== "undefined") {
    // Get the list of selected questions from localStorage
    var selectedQuestions = JSON.parse(localStorage.getItem("selectedQuestions")) || {};

    // Loop through the question links and add event listeners
    var questionLinks = document.querySelectorAll(".question-list a");
    questionLinks.forEach(function (link) {
        // Check if the question is selected and mark it accordingly
        var href = link.getAttribute("href");
        if (href) {
            var urlParams = new URLSearchParams(href);

            // Get the questionNumber from the URL
            var questionNumber = urlParams.get("question");

            // Assuming selectedQuestions is an object with keys for selected question numbers
            // Check if the selectedQuestions object has a key matching the questionNumber
            if (selectedQuestions.hasOwnProperty(questionNumber)) {
                link.classList.add("selected");
            }
        }
    });
}
