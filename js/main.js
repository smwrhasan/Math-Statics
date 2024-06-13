// Sample class data
const classes = [
    {
        number: 1,
        title: "Class number 1",
        description: "",
        videoId: "HrZha1oBZuc",
        lectureSheet: "https://drive.google.com/file/d/1FBUnGJGfYWqyxV7cBOEAWwK0XDk3PziL/view"
    },
    {
        number: 2,
        title: "Class number 2",
        description: " ",
        videoId: "lCoEvGXsIYI",
        lectureSheet: "  "
    },
    {
        number: 3,
        title: "Class number 2",
        description: " ",
        videoId: "Gwxucyv-TnY",
        lectureSheet: "  "
    },
    {
        number: 4,
        title: "Class number 2",
        description: " ",
        videoId: "H9-vLjWLt7w",
        lectureSheet: "  "
    },
    {
        number: 5,
        title: "Class number 2",
        description: " ",
        videoId: "6b36cyfgcTo",
        lectureSheet: "  "
    },
    
    {
        number: 6,
        title: "Class number 6",
        description: "Learn about force vectors and their properties.",
        videoId: "CC7ynexXyJo",
        lectureSheet: "https://drive.google.com/file/d/1gVCqETudMIpPL_Dg0ZyaZlzXBHb1mkb0/view"
    }
    ,
    {
        number: 7,
        title: "Class number 7",
        description: " ",
        videoId: "6oetC2IWu3E",
        lectureSheet: "https://drive.google.com/file/d/1R5cNOT8TRzB6IZs-XDAVEMwLHfQsdDFm/view"
    }
    ,
    {
        number: 8,
        title: "Class number 8",
        description: " ",
        videoId: "Eta-EfkdXi0",
        lectureSheet: " "
    }
    ,
    {
        number: 9,
        title: "Class number 9",
        description: " ",
        videoId: "K0BsDJ4TuC8",
        lectureSheet: " "
    }
    ,
    {
        number: 10,
        title: "Class number 10",
        description: " ",
        videoId: "MswnUVe-75w",
        lectureSheet: ""
    }
    ,
    {
        number: 11,
        title: "Class number 11",
        description: " ",
        videoId: "Rt3DVR5DYFE",
        lectureSheet: " "
    }
    ,
    {
        number: 12,
        title: "Class number 8",
        description: " ",
        videoId: "zRfys4qeFE4",
        lectureSheet: " "
    }
    ,
    {
        number: 13,
        title: "Class number 8",
        description: " ",
        videoId: "noby2kAgYe4",
        lectureSheet: " "
    }
    ,
    {
        number: 14,
        title: "Class number 8",
        description: " ",
        videoId: "_Yz2usAzvNg",
        lectureSheet: "https://drive.google.com/file/u/0/d/16oeDrp4PNS9MpGt8cOMwCJvoUjBMVbTN/view"
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
