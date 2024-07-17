function calculateMaturityAmount(){

    // Get Input values from the form elements

    const principle= parseFloat(document.getElementById('principle').value);
    const interest= parseFloat(document.getElementById('interest').value);
    const tenure= parseFloat(document.getElementById('tenure').value);


    // perform the calculation

    const maturityAmount = principle *(principle*interest*tenure)/100;

    // Display the result

    document.getElementById('result').innerText =`Maturity Amount : ${maturityAmount.toFixed(2)}`;
}

// Attach the event Listner to the Calulate Button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);