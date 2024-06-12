//calculator 
calculator = () =>{
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    let r = document.getElementById("result");
     if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        r.textContent = "";
    }
    else{
        const sum = num1+ num2 + num3
        r.textContent = sum;
    }

}

//calculator price 
const calculatePrice = () => {
    var price = parseFloat(document.getElementById("priceInput").value);
    var rate = parseFloat(document.getElementById("rateSelect").value);
    var resultElement = document.getElementById("result1");
    var lang = document.getElementById("lang").value;

    if (isNaN(price) || isNaN(rate)) {
        resultElement.textContent = "Please enter valid numbers.";
        resultElement.className = "text-danger";
    } else {
        var calculatedPrice = (price / rate).toFixed(2);

        switch (lang) {
            case "ch":
                resultElement.innerHTML = `您好，店铺总价格是 ${price} 除以 ${rate} = $ ${calculatedPrice}。***注意：对于在单个商店购买的商品，如果商店拆分包裹，我们将根据相同包裹的数量计算运费。对于1公斤以下的包裹，我们按一公斤计算。如果超过1公斤，将使用体积和重量中的较大者作为运费标准。`;
                break;
            case "eng":
                resultElement.innerHTML = `Hello, the total store price is ${price} divided by ${rate} = $ ${calculatedPrice}. ***Note: For items purchased in a single store, if the store splits the package, we will calculate the shipping cost based on the number of identical packages. For packages under 1kg, we count one kilo. If over 1kg, the larger of volume and weight will be used as the shipping cost criterion.`;
                break;
            default:
                resultElement.innerHTML = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ ${price} ចែកនឹង ${rate} = $ ${calculatedPrice} ***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន`;
                resultElement.className = "text-warning";
                return;
        }
        resultElement.className = "text-info";
    }
}

// Copy function
const copypTable = () => {
    var text = document.querySelector(".result1").textContent;
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
};

function cal() {
    var p1 = parseFloat(document.getElementById('p1').value);
    var p2 = parseFloat(document.getElementById('p2').value);
    var bPrice = document.getElementById('b-price');
    var answer = document.getElementById('answer');
    var fee = document.getElementById('fee');

    if (isNaN(p1) || isNaN(p2)) {
        answer.textContent = "";
        bPrice.textContent = "";
        fee.textContent = "";
        return;
    }

    const bPrice1 = (p2 / 6.5).toFixed(2);
    var calc = (bPrice1-p1).toFixed(2);
    var feeCal = (calc * 6.5).toFixed(2);

    bPrice.textContent = `តម្លៃទំនិញជាលុយដុល្លា: ${bPrice1}`;
    answer.textContent = `តម្លៃដែលត្រូវកែ: ${calc}`;
    fee.textContent = `ថ្លៃដឹក: ${feeCal} ￥`;

    if (calc < 0) {
        bPrice.className = 'text-danger';
        answer.className = 'text-danger';
        fee.className = 'text-danger';
    } else {
        bPrice.className = '';
        answer.className = '';
        fee.className = '';
    }
}

//copy genral function
function copyText(elementId) {
    var text = document.getElementById(elementId).textContent;
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
