document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("search").value.trim();
    if (searchTerm !== "") {
        search(searchTerm);
    } else {
        alert("Please enter a search term.");
    }
});

function search(searchTerm) {
    // Dummy file names for demonstration
    var dummyFileNames = [
        "example_file.txt",
        "document.pdf",
        "image.jpg",
        "presentation.pptx"
    ];

    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    var foundFiles = dummyFileNames.filter(function(fileName) {
        return fileName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (foundFiles.length > 0) {
        foundFiles.forEach(function(fileName) {
            var resultElement = document.createElement("div");
            resultElement.textContent = fileName;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.textContent = "No files found matching the search term.";
    }
}

let imageDisplayed = false; // Flag variable to track whether the image has been displayed
let text = document.getElementById("text");
let btn1 = document.getElementById("btn1"); // Declaring btn1 globally
let btn = document.getElementById("btn"); // Declaring btn globally
let photo = document.getElementById("photo"); // Declaring photo globally
let qr = document.getElementById("qrCode"); // Declaring qr globally

const cny = () => {
    btn.addEventListener("click", handleClick);

    function handleClick(event) {
        event.preventDefault(); // Prevent the default behavior of the button click event
        
        if (!imageDisplayed) { // Check if the image has not been displayed yet
            // Create an image element
            var img = document.createElement("img");
            // Set the src attribute of the image
            img.src = "qrcode.jpg"; // Replace this with your image URL
            // Set image style
            img.style.width = "15%";
            // Append the image to the qrCode div
            qr.appendChild(img);
            
            // Set the flag to true indicating that the image has been displayed
            imageDisplayed = true;
            text.textContent = "អាចអាំងប៉ាវតាមគណនី ABA នេះបាន: 002 892 523";
            btn.textContent = "btn";
            btn1.textContent = "បញ្ជូន"; // Setting text content for btn1

            // Show btn1
            btn1.style.display = "block"; // or "inline", depending on the desired display type
            // Show photo input
            photo.style.display = "block";
        }
    }
}

// Call the cny function when the page is loaded
window.onload = cny;

const reset = () => {
    // Remove the displayed image
    qr.innerHTML = "";

    // Reset the flag
    imageDisplayed = false;
    text.textContent = "";
    photo.value = ''; // Clear the file input value

    // Hide btn1 and photo input
    btn1.style.display = "none";
    photo.style.display = "none";
}

// Function to navigate to another page when btn1 is clicked
btn1.addEventListener("click", function() {
    window.location.href = "1.html"; // Change "1.html" to the desired destination page
});
