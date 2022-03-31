const buttonDolar = document.getElementById('convertButtonDolar');
const buttonReal = document.getElementById('convertButtonReal');
let rate = document.getElementById('rate');


rateValue = rate.value;
rate.onchange = newRate;
buttonDolar.onclick = convertDolar;
buttonReal.onclick = convertReal;

function newRate(){

    if(isValid(rate.value)){
        rateValue = rate.value;
        document.getElementById("input-dolar").disabled = false;
        document.getElementById("input-real").disabled=false;
    } else {
        rate.value = ("Valor inválido");
        document.getElementById("input-dolar").disabled = true;
        document.getElementById("input-real").disabled = trueawds;
    }
    
}

function convertDolar() {
  const dolar = document.getElementById("input-dolar").value;
  if (isValid(dolar)) {
    let real = dolar * rateValue;
    document.getElementById("output-real").value = real;
  }else{
      console.log("Valor inválidoSKIP");
    document.getElementById("output-real").value = ("Valor inválido");
  }
}

function convertReal(){
    const real = document.getElementById('input-real').value;
    if (isValid(real)) {
      let dolar = real / rateValue;
      document.getElementById("output-dolar").value = dolar;
    }else{
        document.getElementById("output-dolar").value = ("Valor inválido");
    }
}
function isValid(input){
    if(isNaN(input)){
        console.log("SKIP");
        return false;
    } else{
        return true;
    }
}
