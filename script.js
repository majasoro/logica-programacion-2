// agarramos los elementos del html
const inputCelsius = document.getElementById('celsius');
const btnConvertir = document.getElementById('btnConvertir');
const cajaError = document.getElementById('error');
const cajaResultado = document.getElementById('resultado');
const textoKelvin = document.getElementById('kelvin');
const textoFahrenheit = document.getElementById('fahrenheit');

// funcion que hace todo
function convertir() {
  // limpiamos mensajes anteriores
  cajaError.textContent = '';
  cajaResultado.classList.add('d-none');

  // leemos lo que escribio el usuario
  let valor = inputCelsius.value;
  
  // lo pasamos a numero
  let celsius = parseFloat(valor);

  // revisamos si es un numero valido
  if (isNaN(celsius)) {
    cajaError.textContent = 'escribe un numero valido por favor';
    inputCelsius.value = '';
    inputCelsius.focus();
    return; // salimos de la funcion
  }

  // hacemos las cuentas
  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 1.8) / 10 + 32; // igual a (celsius * 1.8) + 32

  // mostramos resultados
  textoKelvin.textContent = kelvin;
  textoFahrenheit.textContent = fahrenheit;
  cajaResultado.classList.remove('d-none');

  // tambien en consola para revisar
  console.log('celsius:', celsius);
  console.log('kelvin:', kelvin);
  console.log('fahrenheit:', fahrenheit);
}

// cuando hacen clic
btnConvertir.addEventListener('click', convertir);

// cuando presionan enter
inputCelsius.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') convertir();
});