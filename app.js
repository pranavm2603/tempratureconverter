"use strict";


function fahrenheitConverter(value) {
  inputCelsius.value = ((value - 32) / 1.8).toFixed(2); 
  inputKelvin.value = ((value - 32) / 1.8 + 273.15).toFixed(2); 
}

function celsiusConverter(value) {
  inputFahrenheit.value = (value * 1.8 + 32).toFixed(2); 
  inputKelvin.value = (Number(value) + 273.15).toFixed(2); 
}

function kelvinConverter(value) {
  inputFahrenheit.value = ((value - 273.15) * 1.8 + 32).toFixed(2); 
  inputCelsius.value = (value - 273.15).toFixed(2); 
}

$(window).on("load", () => {
  $("body").css(
    "overflow",
    "hidden",
    setTimeout(() => {
      $("body").css("overflow-y", "visible");
    }, 1800)
  );
  setTimeout(removeLoader, 1700);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}