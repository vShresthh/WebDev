document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitToggle = document.querySelectorAll('input[name="unit"]');
    const convertBtn = document.getElementById("convertBtn");
    const clearBtn = document.getElementById("clearBtn");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperatureValue = parseFloat(temperatureInput.value);
        const selectedUnit = document.querySelector('input[name="unit"]:checked').value;

        if (!isNaN(temperatureValue)) {
            let convertedValue;
            let unitLabel;

            if (selectedUnit === "celsius") {
                convertedValue = (temperatureValue * 9/5) + 32;
                unitLabel = "Fahrenheit";
            } else {
                convertedValue = (temperatureValue - 32) * 5/9;
                unitLabel = "Celsius";
            }

            resultDiv.textContent = `${temperatureValue}°${selectedUnit.toUpperCase()} is equal to ${convertedValue.toFixed(2)}°${unitLabel}`;
        } else {
            resultDiv.textContent = "Please enter a valid temperature.";
        }
    });

    clearBtn.addEventListener("click", function () {
        temperatureInput.value = "";
        resultDiv.textContent = "";
    });
});
