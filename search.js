// Get the search input element
var searchInput = document.getElementById("search");
var searchResult = document.getElementById("searchResult");

// Define the search function
function searchFunction() {
    const data = [
        { titles: ["shop", "ហាង"], text: "ព័ត៌មានលម្អិតនៃទំនិញ", file: "index.html", img: "#" },
        { titles: ["អាវ", "shirt"], text: "ព័ត៌មានលម្អិតនៃទំនិញ", img: "pr1.jpg", text: "តម្លៃ: 3.76$ ", file: "#" },

        // Add more data objects here as needed
    ];
    const searchTerm = searchInput.value.trim().toLowerCase();
    const result = data.find(item => item.titles.some(title => title.toLowerCase() === searchTerm));

    if (result) {
        const resultElement = document.createElement("div");

        // Create anchor element for file link
        const fileElement = document.createElement("a");
        fileElement.href = result.file; // Set href attribute to the file
        fileElement.textContent = result.titles.join(", "); // Set link text to the titles
        fileElement.style.textDecoration = 'none';

        // Create paragraph element for additional text
        const textElement = document.createElement("p");
        textElement.textContent = result.text; // Set text content to the additional text
        textElement.style.textAlign = "center";

        //img
        const imageElement = document.createElement('img');
        imageElement.src = result.img; // Set src attribute to the image file
        imageElement.alt = "Image"; // Set alt attribute for accessibility
        imageElement.style.display = "block"; // Make the image a block element
        imageElement.style.margin = "auto"; // Center the image horizontally
        imageElement.style.width = "20%"; // Set the width of the image
        
        // Append elements to result element
        resultElement.appendChild(fileElement);
        resultElement.appendChild(textElement);
        resultElement.appendChild(imageElement);

        // Clear previous search result and append new result
        searchResult.innerHTML = "";
        searchResult.appendChild(resultElement);
    } else {
        searchResult.textContent = "ពុំមានទិន្នន័យ";
    }
}

// Add event listener for 'keydown' event on search input
searchInput.addEventListener("keydown", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Call the search function
        searchFunction();
    }
});


