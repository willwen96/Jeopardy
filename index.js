// script.js

// Check if the browser supports localStorage
if (typeof Storage !== "undefined") {
    // Get the list of selected questions from localStorage
    var selectedQuestions = JSON.parse(localStorage.getItem("selectedQuestions")) || {};

    // Loop through the question links and add event listeners
    var questionLinks = document.querySelectorAll(".question-list a");
    questionLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Extract the category and question number from the clicked link's href attribute
            var href = event.target.getAttribute("href");
            var category = href.match(/category=([^&]+)/)[1];
            var questionNumber = href.match(/question=([^&]+)/)[1];
            var questionKey = category + "-" + questionNumber;

            // Add the clicked question to the list of selected questions in localStorage
            selectedQuestions[questionKey] = true;
            localStorage.setItem("selectedQuestions", JSON.stringify(selectedQuestions));

            // Redirect to the question page
            window.location.href = href;
        });

        // Check if the question is selected and mark it accordingly
        var href = link.getAttribute("href");
        var category = href.match(/category=([^&]+)/)[1];
        var questionNumber = href.match(/question=([^&]+)/)[1];
        var questionKey = category + "-" + questionNumber;

        if (selectedQuestions.hasOwnProperty(questionKey)) {
            link.classList.add("selected");
        }
    });
}
