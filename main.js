// Primer Pre-Entrega

alert("----------Ingresa tus Suscripciones Anuales----------");

let cantidadCuotas = 0;
let costoSuscripcion = 0;
let costoTotal = 0;
let continuar = true;

function calcular() {
  let precioSuscripcion = parseFloat(
    prompt("Ingresa el costo de una suscripción anual")
  );

  cantidadCuotas = parseInt(
    prompt("Ingresa la cantidad de cuotas que deseas pagar")
  );

  while (cantidadCuotas > 12) {
    alert("Error: el número de cuotas debe estar entre 1 y 12.");
    cantidadCuotas = parseInt(
      prompt("Ingresa la cantidad de cuotas que deseas pagar")
    );
  }

  if (cantidadCuotas >= 1 && cantidadCuotas <= 3) {
    costoSuscripcion = precioSuscripcion * 0.02;
  } else if (cantidadCuotas >= 4 && cantidadCuotas <= 6) {
    costoSuscripcion = precioSuscripcion * 0.04;
  } else if (cantidadCuotas >= 7 && cantidadCuotas <= 9) {
    costoSuscripcion = precioSuscripcion * 0.06;
  } else if (cantidadCuotas >= 10 && cantidadCuotas <= 12) {
    costoSuscripcion = precioSuscripcion * 0.08;
  } else {
    alert("Error: el número de cuotas debe estar entre 1 y 12.");
  }

  alert(
    "Cada cuota de tu suscripción pagada en: " +
      cantidadCuotas +
      " cuotas sera de: " +
      costoSuscripcion.toFixed(2)
  );
}

while (continuar) {
  calcular();
  costoTotal = costoTotal + costoSuscripcion;
  continuar = confirm("¿Quieres agregar otra suscripción?");
}

alert(
  "Las suma de las cuotas de tus suscripciones es de: $" + costoTotal.toFixed(2)
);
