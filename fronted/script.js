const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            expression = "";
            result.value = "";
        }

        else if (value === "back") {
            expression = expression.slice(0, -1);
            result.value = expression;
        }

        else if (value === "=") {
            try {
                expression = eval(expression);
                result.value = expression;
            } catch {
                result.value = "Error";
                expression = "";
            }
        }

        else {
            expression += value;
            result.value = expression;
        }
    });
});
