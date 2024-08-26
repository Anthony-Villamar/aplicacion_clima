let api_key = '591b833c547241c81a9afc8d14c5a465'
let dif_kelvin=273.15
let urlbase = "http://api.openweathermap.org/data/2.5/weather"

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad = document.getElementById('ciudadEntrada').value

    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlbase}?q=${ciudad}&appid=${api_key}`)
    .then(data =>data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    console.log(data);
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const nombreciudad = data.name
    const temperatura = data.main.temp - dif_kelvin
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `Clima en ${nombreciudad}`

    const ciudadIcono = document.createElement('img')
    ciudadIcono.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const ciudadTemperatura = document.createElement('p')
    ciudadTemperatura.textContent = `Temperatura: ${temperatura.toFixed(2)}°C`

    const ciudadDescripcion = document.createElement('p')
    ciudadDescripcion.textContent = `Descripción: ${descripcion}`
    //la diferencia entre appendChild y append es que append agrega un nodo(varios hijos) y appendChild agrega un elemento hijo
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.append(ciudadTitulo,ciudadTemperatura)
    divDatosClima.appendChild(ciudadIcono)
    divDatosClima.appendChild(ciudadDescripcion)
}