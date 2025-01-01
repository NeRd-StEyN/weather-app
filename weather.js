let a = document.querySelector("#place");
let b = document.querySelector("#img");
let c = document.querySelector("#temp");
let d = document.querySelector("#loc");
let e = document.querySelector("#humiditylevel p");
let ff = document.querySelector("#windlevel p");
let h = document.querySelector("#disp");
let errorDiv = document.querySelector("#error");
let z=document.querySelector("#weather");

function gettemp() {
    let g = a.value;
    if (g==="")
{
    alert("Enter something");
} else{


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${g}&appid=e38a164cfa9fd996bed1ff7e90869175&units=metric`;

    async function f() {
        let g = a.value;
        let promise = await fetch(url);
        let data = await promise.json();
        console.log(data);

        // Update UI with data if valid response
        if (data.cod === 200) {
            c.innerText = data.main.temp;
            d.innerText = g[0].toUpperCase() + g.slice(1).toLowerCase();
            e.innerText = data.main.humidity + "%";
            ff.innerText = data.wind.speed + " km/h";
            errorDiv.style.display = "none";
            h.style.display = "block"; 
            if(data.weather[0].main="Clouds")
        {
            z.src="images/clouds.png";

        }
        else if(data.weather[0].main="Clear")
        {
            z.src="images/clear.png";

        }
        else if(data.weather[0].main="Rain")
        {
            z.src="images/rain.png";

        }
        else if(data.weather[0].main="Drizzle")
        {
            z.src="images/drizzle.png";

        }
        else if(data.weather[0].main="Snow")
        {
            z.src="images/snow.png";

        }
        else if(data.weather[0].main="Mist")
        {
            z.src="images/mist.png";

        }
        console.log(data.weather[0].main)

        } else {
            errorDiv.style.display = "block"; 
            h.style.display = "none"; 
        }
    }

    f();
}
}

b.addEventListener("click", gettemp
);

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