var resultadoDiv = document.getElementById("resultado");
function calcular(button) {
  var input = button.parentNode.querySelector("input");
  var peso = parseInt(input.value);
  if (peso > 0) {
    if (peso <= 30) {
      var vol_diario = 0;
      // Método HollidaySegar
      segar(peso);
    } else {
      // Método de Superficie Corporal
      superficie(peso);
    }
  } else {
    alert("Ingrese un valor superior a 0Kg.");
  }
}

function segar(peso) {
  if (peso <= 10) {
    vol_diario = peso * 100;
  } else if (peso <= 20) {
    vol_diario = 1000 + (peso - 10) * 50;
  } else if (peso <= 30) {
    vol_diario = 1500 + (peso - 20) * 20;
  }
  var mant = parseInt(vol_diario / 24);
  var mant_2 = parseInt(mant + mant / 2);

  resultadoDiv.innerHTML =
    "<p>Vol. diario:  <span>" + vol_diario + "cc</span></p>";
  resultadoDiv.innerHTML += "<p>Mant:  <span>" + mant + " cc/hr</span></p>";
  resultadoDiv.innerHTML += "<p>M+M/2:  <span>" + mant_2 + " cc/hr</span></p>";
}

function superficie(peso){
  var sup_corporal = (peso * 4 + 7) / (peso + 90);
      var sc_1500 = parseInt(sup_corporal * 1500);
      var sc_2000 = parseInt(sup_corporal * 2000);
      var vd_1500 = parseInt(sc_1500 / 24);
      var vd_2000 = parseInt(sc_2000 / 24);
      resultadoDiv.innerHTML =
        "<p>SC * 1500:  <span>" +
        sc_1500 +
        "cc (" +
        vd_1500 +
        " cc/hr)</span></p>";
      resultadoDiv.innerHTML +=
        "<p>SC * 2000:  <span>" +
        sc_2000 +
        "cc (" +
        vd_2000 +
        " cc/hr)</span></p>";
}




var btnDetalle = document.querySelector("#btn-detalle");
var calcContainer = document.getElementById("calculadora");
var detContainer = document.getElementById("detalle");

var showDetails = true;

btnDetalle.addEventListener("click", function () {
  if (showDetails) {
    detContainer.style.display = "none";
    calcContainer.style.width = "100%";
    calcContainer.style.borderRadius = "13px";
    btnDetalle.style.right = "16%";
  } else {
    detContainer.style.display = "inline-flex";
    calcContainer.style.width = "50%";
    calcContainer.style.borderRadius = "13px 0px 0px 13px";
    btnDetalle.style.right = "calc(-27.5px + 50%)";
  }
  showDetails = !showDetails;
});
