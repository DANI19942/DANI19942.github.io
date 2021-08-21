function calcAmmount() {
    let price = 2000;
    let ammountInput = document.querySelector("input[name='ammount-input']");
    let ammountNumber = parseInt(ammountInput.value);
    ammountNumber =isNaN(ammountNumber) ? 0 : ammountNumber; 
    showSumPrice(price, ammountNumber);
}

function showSumPrice(price = 2000, ammountNumber = 1) {
    ammountNumber = ammountNumber || 0;
    let showAmmount = document.querySelector("span.show-ammount");
    if ( ammountNumber > 10 ) {
        alert("Maximum tíz terméket tud vásárolni!");
    } else if ( ammountNumber < 1 ) {
        alert("Minimum egy terméket kell vásárolni az érvényes rendeléshez!");
    } else {
        let ammount = ammountNumber * price;
        showAmmount.innerHTML = ammount;
    }
    
}
