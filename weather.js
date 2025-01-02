let a = document.querySelector("#place");
let b = document.querySelector("#img");
let c = document.querySelector("#temp");
let d = document.querySelector("#loc");
let e = document.querySelector("#humiditylevel p");
let ff = document.querySelector("#windlevel p");
let h = document.querySelector("#disp");
let errorDiv = document.querySelector("#error");
let z=document.querySelector("#weather");
let x=document.querySelector(".inner-circle");
let y=document.querySelector("#lo");
function gettemp() {
    let g = a.value;
    if (g==="")
{
    alert("Enter something");
} else{
    x.style.display="block";


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${g}&appid=e38a164cfa9fd996bed1ff7e90869175&units=metric`;

    async function f() {
        let g = a.value;
        let promise = await fetch(url);
        let data = await promise.json();
        // console.log(data.weather[0].main);
        // Update UI with data if valid response
        x.style.display="none";
        if (data.cod === 200) {
            c.innerText = data.main.temp;
            d.innerText = g[0].toUpperCase() + g.slice(1).toLowerCase();
            e.innerText = data.main.humidity + "%";
            ff.innerText = data.wind.speed + " km/h";
            errorDiv.style.display = "none";
            h.style.display = "block"; 
            if(data.weather[0].main=="Clouds")
        {
            z.src="images/clouds.png";

        }
        else if(data.weather[0].main=="Clear")
        {
            z.src="images/clear.png";

        }
        else if(data.weather[0].main=="Rain")
        {
            z.src="images/rain.png";

        }
        else if(data.weather[0].main=="Drizzle")
        {
            z.src="images/drizzle.png";

        }
        else if(data.weather[0].main=="Snow")
        {
            z.src="images/snow.png";

        }
        else if(data.weather[0].main=="Mist")
        {
            z.src="images/mist.png";

        }
        

        } else {
            errorDiv.style.display = "block"; 
            h.style.display = "none"; 
        }
    }

    f();

}
}

b.addEventListener("click", gettemp);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  
        if (a.value==="")
{
    alert("Enter something");
}
else{



        gettemp();  
}
    }
});



function fff() {
    if (navigator.geolocation) {
        x.style.display="block";
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e38a164cfa9fd996bed1ff7e90869175&units=metric`;
  
        // Now fetch weather using the lat/lon
        async function f() {
          let promise = await fetch(url);
          let data = await promise.json();
          x.style.display="none";
          if (data.cod === 200) {
            c.innerText = data.main.temp;
            d.innerText = data.name;
            e.innerText = data.main.humidity + "%";
            ff.innerText = data.wind.speed + " km/h";
            errorDiv.style.display = "none";
            h.style.display = "block";
  
            // Set weather icon based on the weather condition
            if (data.weather[0].main === "Clouds") {
              z.src = "images/clouds.png";
            } else if (data.weather[0].main === "Clear") {
              z.src = "images/clear.png";
            } else if (data.weather[0].main === "Rain") {
              z.src = "images/rain.png";
            } else if (data.weather[0].main === "Drizzle") {
              z.src = "images/drizzle.png";
            } else if (data.weather[0].main === "Snow") {
              z.src = "images/snow.png";
            } else if (data.weather[0].main === "Mist") {
              z.src = "images/mist.png";
            }
          } else {
            errorDiv.style.display = "block";
            h.style.display = "none";
          }
        }
        f();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  

  y.addEventListener("click",fff);