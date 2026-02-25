function appendValue(value) {
    document.getElementById("display").value += value;
}
1
function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    let input = document.getElementById("display").value;
    let result;

    // Check for addition
    if (input.includes("+")) {
        let parts = input.split("+");
        result = parseFloat(parts[0]) + parseFloat(parts[1]);
    }

    // Check for subtraction
    else if (input.includes("-")) {
        let parts = input.split("-");
        result = parseFloat(parts[0]) - parseFloat(parts[1]);
    }

    // Check for multiplication
    else if (input.includes("*")) {
        let parts = input.split("*");
        result = parseFloat(parts[0]) * parseFloat(parts[1]);
    }

    // Check for division
    else if (input.includes("/")) {
        let parts = input.split("/");
        result = parseFloat(parts[0]) / parseFloat(parts[1]);
    }

 
    else if (input.includes("%")) {

    // If it is like "10%"
    if (!input.includes("+") && !input.includes("-") && 
        !input.includes("*") && !input.includes("/")) {

        let number = parseFloat(input.replace("%", ""));
        result = number / 100;
    } 
    else {
        // If like "50%2" (modulus)
        let parts = input.split("%");
        result = parseFloat(parts[0]) % parseFloat(parts[1]);
    }
}
    
    else {
        result = "Error";
    }

    document.getElementById("display").value = result;
}