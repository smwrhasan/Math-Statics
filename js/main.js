// Sample class data
const classes = [
    {
        number: 1,
        title: "Introduction to Statics",
        description: "Understanding the basics of Statics.",
        videoId: "6b36cyfgc",
        lectureSheet: "lecture1.pdf"
    },
    {
        number: 2,
        title: "Force Vectors",
        description: "Learn about force vectors and their properties.",
        videoId: "VIDEO_ID_2",
        lectureSheet: "lecture2.pdf"
    }
    // Add more classes as needed
];

// Function to populate the class cards on the main page
function populateClassCards() {
    const classContainer = document.getElementById("class-container");

    classes.forEach(classData => {
        const classCard = document.createElement("div");
        classCard.className = "col-md-4 mb-4";
        classCard.innerHTML = `
            <div class="card bg-dark text-white h-100">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Class ${classData.number}: ${classData.title}</h5>
                    <p class="card-text">${classData.description}</p>
                    <a href="class.html?class=${classData.number}" class="btn btn-primary mt-auto">Go to Class</a>
                    <a href="${classData.lectureSheet}" target="_blank" class="btn btn-secondary mt-2">Lecture Sheet</a>
                </div>
            </div>
        `;
        classContainer.appendChild(classCard);
    });
}

// Function to populate the class details on the class page
function populateClassDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const classNumber = urlParams.get('class');

    if (classNumber) {
        const classData = classes.find(c => c.number == classNumber);
        if (classData) {
            document.getElementById("header-text").innerText = classData.title;
            document.getElementById("class-video").src = `https://www.youtube.com/embed/${classData.videoId}?rel=0`;
            document.getElementById("class-number").innerText = `Class ${classData.number}`;
            document.getElementById("class-caption").innerText = classData.description;
            document.getElementById("lecture-sheet").href = classData.lectureSheet;
        }
    }
}

// Check which page is being loaded and call the appropriate function
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("class-container")) {
        populateClassCards();
    } else if (document.getElementById("class-number")) {
        populateClassDetails();
    }
});
