const inputE1 = document.querySelector("#autocomplete-input");

inputE1.addEventListener("input", onInputChange);

getFincas();

let fincaNames = [];

async function getFincas() {
    const fincaRes = await fetch('https://restcountries.com/v2/all');
    const data = await fincaRes.json();
    
    fincaNames = data.map((finca) => {
        return finca.name;
    });

}

function onInputChange() {
    console.log(inputE1.value);
}