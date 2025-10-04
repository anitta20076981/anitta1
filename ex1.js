const maxValue = 15;
let check = () => {
    const weight = parseInt(document.getElementById('weight').value);

    if (weight > maxValue) {
        alert("Overweight remove some baggage.");
        document.getElementById('removed').style.display = 'block';
        document.getElementById('remB').style.display = 'block';
    } else {
        alert("Weight is Ok");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}

let remove = () => {
    const removeWeight = parseInt(document.getElementById('removed').value);
    let currentWeight = parseInt(document.getElementById('weight').value);

    const newWeight = currentWeight - removeWeight;
    alert("Updated Weight: " + newWeight + " kg");

    document.getElementById('weight').value = newWeight;
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';

    if (newWeight <= maxValue) {
        alert("OK");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}