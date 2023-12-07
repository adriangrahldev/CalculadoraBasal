var btnDetalle = document.querySelector("#btn-detalle")
var calcContainer = document.getElementById("calculadora");
var detContainer = document.getElementById("detalle");

var showDetails = true;

btnDetalle.addEventListener("click", function(){
    if(showDetails){
        detContainer.style.display = "none";
        calcContainer.style.width = "100%";
        calcContainer.style.borderRadius = "13px";
        btnDetalle.style.right = "16%"
    }else{
        detContainer.style.display = "inline-flex";
        calcContainer.style.width = "50%";
        calcContainer.style.borderRadius = "13px 0px 0px 13px";
        btnDetalle.style.right = "calc(-27.5px + 50%)"
    }
    showDetails = !showDetails;
});