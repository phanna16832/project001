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
function calculatePrice() {
    var price = parseFloat(document.getElementById("priceInput").value);
    var rate = parseFloat(document.getElementById("rateSelect").value);
    var resultElement = document.getElementById("result1");

    if (isNaN(price) || isNaN(rate)) {
        resultElement.textContent = "Please enter valid numbers.";
        resultElement.className = "text-danger";
    } else {
        var calculatedPrice = (price / rate).toFixed(2);
        resultElement.textContent = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ ${price}   ចែកនឹង  ${rate}  =   $  ${calculatedPrice}   ***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន`;
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

cal = () =>{
    var p1 = parseFloat(document.getElementById('p1').value);
    var p2 = parseFloat(document.getElementById('p2').value);
    var answer = document.getElementById('answer');
    var fee = document.getElementById('fee');

    calc = p2-p1
    feeCal = calc*6.4.toFixed(2);
    if(isNaN(p1) || isNaN(p2)){
        answer.textContent = " "
    }
    else{
        answer.textContent = calc;
        fee.innerHTML = `ថ្លៃដឹក ${feeCal} ￥`;
    }
    fee.className  = "text-danger";
    answer.className = "text-danger"
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

