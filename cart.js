    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    var cartElement = document.getElementById("cart");
    var totalPrice = 0;

    var productInfo = {};

    cartData.forEach(function(item) {
        var productName = item.name;
        if (!productInfo[productName]) {
            productInfo[productName] = {
                quantity: item.quantity || 1,
                totalCost: item.price * (item.quantity || 1),
                image: item.image,
                price: item.price // Add price property to productInfo
            };
        } else {
            productInfo[productName].quantity += item.quantity || 1;
            productInfo[productName].totalCost += item.price * (item.quantity || 1);
        }
        totalPrice += item.price * (item.quantity || 1);
    });

    for (var productName in productInfo) {
        var product = productInfo[productName];
        var itemElement = document.createElement("div");
        var imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.style.maxWidth = "100px";
        itemElement.appendChild(imageElement);

        var detailsElement = document.createElement("div");
        detailsElement.innerHTML = `<p><strong>Name:</strong> ${productName}</p>
                                    <p><strong>Quantity:</strong> <span id="${productName}-quantity">${product.quantity}</span></p>
                                    <p><strong>Total:</strong> $<span id="${productName}-total">${product.totalCost.toFixed(2)}</span></p>`;
        itemElement.appendChild(detailsElement);

        var quantityButtons = document.createElement("div");

        var increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.onclick = (function(prod, name, totalId, price) {
            return function() {
                prod.quantity++;
                updateCart(name, totalId, prod.quantity, price);
                document.getElementById(`${name}-quantity`).textContent = prod.quantity; // Update quantity in HTML
                document.getElementById(`${name}-total`).textContent = (prod.quantity * price).toFixed(2); // Update total cost in HTML
                document.getElementById("total-price").textContent = "Total: $" + calculateTotalPrice().toFixed(2); // Update total price
            };
        })(product, productName, `${productName}-total`, product.price);
        quantityButtons.appendChild(increaseButton);

        var decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.onclick = (function(prod, name, totalId, price) {
            return function() {
                if (prod.quantity > 1) {
                    prod.quantity--;
                    updateCart(name, totalId, prod.quantity, price);
                    document.getElementById(`${name}-quantity`).textContent = prod.quantity; // Update quantity in HTML
                    document.getElementById(`${name}-total`).textContent = (prod.quantity * price).toFixed(2); // Update total cost in HTML
                    document.getElementById("total-price").textContent = "Total: $" + calculateTotalPrice().toFixed(2); // Update total price
                }
            };
        })(product, productName, `${productName}-total`, product.price);
        quantityButtons.appendChild(decreaseButton);

        itemElement.appendChild(quantityButtons);
        cartElement.appendChild(itemElement);

        // Insert line break after each product's details
        cartElement.appendChild(document.createElement("br"));
    }

    // Append total price below the products
    var totalElement = document.createElement("div");
    totalElement.textContent = "Total: $" + totalPrice.toFixed(2);
    totalElement.id = "total-price"; // Set the ID for the total price element
    cartElement.appendChild(totalElement);

    // Add event listener to the Buy button
    document.getElementById("buy").addEventListener("click", function() {
        alert("Thank you for your purchase!");
        // Clear the cart after purchase
        localStorage.removeItem("cart");
        // Reload the page to reflect the changes
        location.reload();
    });

    function updateCart(name, totalId, quantity, price) {
        var totalElement = document.getElementById(totalId);
        var totalCost = quantity * price;
        totalElement.textContent = totalCost.toFixed(2);

        productInfo[name].quantity = quantity; // Update quantity in productInfo

        cartData.forEach(function(item) {
            if (item.name === name) {
                item.quantity = quantity;
                item.totalCost = totalCost;
            }
        });

        localStorage.setItem('cart', JSON.stringify(cartData));
    }

    function calculateTotalPrice() {
        var totalPrice = 0;
        for (var productName in productInfo) {
            var product = productInfo[productName];
            totalPrice += product.quantity * product.price;
        }
        return totalPrice;
    }
