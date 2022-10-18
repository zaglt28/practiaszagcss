const verClima= async()=>{
    let apikey="b5019e3ac3f5eadf02a3172124dface3";
    let divRes=document.querySelector("#res");
    if(navigator.geolocation){
        var success =  async function(position){
        var latitud = position.coords.latitude,
            longitud = position.coords.longitude;
            console.log("Latitud:"+ latitud + ", Longitud:"+longitud);
            let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&unitis=metric&lang=es`;
            console.log(url);
            const api= await fetch(url);
            const data=await api.json();
            console.log(data);
            const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            divRes.innerHTML=`
            <H1>${data.name.toUpperCase()}, ${data.sys.country}</H1>
            <p>Temperatura: ${data.main.temp} °C</p>
            <img src="${urlIcon}">
            <h2>${data.weather[0].description}</h2>
            <p>MIN: ${data.main.temp_max}</p>
            <p>MIN:${data.main.temp_min}</p>
            <p>PRESION:${data.main.pressure}</p>
            <p>HUMEDAD:${data.main.humidity}</p>
            <p>VELOCIDAD DEL VIENTO:${data.wind.speed}</p>
            `;
           

        }

        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        }
}