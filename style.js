let imageDisplayed = false; // Flag variable to track whether the image has been displayed
let text = document.getElementById("text");
let btn1 = document.getElementById("btn1"); // Declaring btn1 globally
let photo = document.getElementById("photo"); // Declaring photo globally

const cny = () => {
    var btn = document.getElementById("btn");
    var qr = document.getElementById("qrCode");
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
            btn.textContent = "បញ្ជូន";
            btn1.textContent = "បញ្ជូន"; // Setting text content for btn1
            btn1.href = '1.html';

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
    var btn = document.getElementById("btn");
    var qr = document.getElementById("qrCode");

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
