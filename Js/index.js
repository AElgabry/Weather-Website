var country = document.getElementById("input")
async function test()
{   
    var url_1="https://api.weatherapi.com/v1/forecast.json?key=16a06a05aa574756b9b10550250607&q="
    var input = country.value
    var url_2="&days=3"
    var link = url_1+input+url_2
    var x = await fetch(link)
    var y =await x.json()
    document.getElementById("temp").innerHTML=
    `
          <temp id="temp" class="row container mx-auto bg-info p-0">
            <div class="temp col-4 p-0 bg-dark text-white">
                <div class="top d-flex justify-content-between align-items-center p-2">
                    <p>${y.forecast.forecastday[0].date}</p>
                </div>
                <div class="main mb-5 pb-5  px-2">
                    <p class="mt-4">${y.location.name}</p>
                    <h1 class="fw-bold mb-5 ">${y.current.temp_c}</h1>
                </div>
                <div class="condition">
                    <p class="px-2 mb-3">${y.forecast.forecastday[0].day.condition.text}</p>
                </div>
                <div class="foot d-flex mb-4  px-2">
                    <i class="fa-solid fa-cloud-rain me-1 pt-1"></i></i><p class="me-3">${y.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                    <i class="fa-solid fa-wind me-1 pt-1"></i><p class="me-3">${y.current.wind_kph}km/h</p>
                    <i class="fa-regular fa-compass me-1 pt-1"></i><p class="me-3">East</p>
                </div>
            </div>
            <div class="temp2 col-4 p-0 text-white">
                <div class="top2 text-center py-2">
                    <p>${y.forecast.forecastday[1].date}</p>
                </div>
                <div class="main mb-5 pb-5 text-center px-2">
                    
                    <h1 class="fw-bold my-5 ">${y.forecast.forecastday[1].day.avgtemp_c}</h1>
                </div>
                <div class="condition text-center">
                    <p class="px-2 mb-3 ">${y.forecast.forecastday[1].day.condition.text}</p>
                </div>
                <div class="foot d-flex mb-4 justify-content-center px-2">
                    <i class="fa-solid fa-cloud-rain me-1 pt-1"></i></i><p class="me-3">${y.forecast.forecastday[1].day.daily_chance_of_rain}%</p>
                    <i class="fa-solid fa-wind me-1 pt-1"></i><p class="me-3">${y.forecast.forecastday[1].day.maxwind_kph}km/h</p>
                    <i class="fa-regular fa-compass me-1 pt-1"></i><p class="me-3">East</p>
                </div>
            </div>
            <div class="temp col-4 p-0 bg-dark text-white">
                <div class="top text-center py-2">
                    <p >${y.forecast.forecastday[2].date}</p>
                </div>
                <div class="main mb-5 pb-5 text-center px-2">
                    
                    <h1 class="fw-bold my-5 ">${y.forecast.forecastday[2].day.avgtemp_c}</h1>
                </div>
                <div class="condition text-center">
                    <p class="px-2 mb-3 ">${y.forecast.forecastday[2].day.condition.text}</p>
                </div>
                <div class="foot d-flex mb-4 justify-content-center px-2">
                    <i class="fa-solid fa-cloud-rain me-1 pt-1"></i></i><p class="me-3">${y.forecast.forecastday[2].day.daily_chance_of_rain}%</p>
                    <i class="fa-solid fa-wind me-1 pt-1"></i><p class="me-3">${y.forecast.forecastday[2].day.maxwind_kph}km/h</p>
                    <i class="fa-regular fa-compass me-1 pt-1"></i><p class="me-3">East</p>
                </div>
            </div>
        </temp>
    `
}
async function a()
{
    var x = await fetch(" http://api.weatherapi.com/v1/forecast.json?key=16a06a05aa574756b9b10550250607&q=lond&days=3")
      var  y=await x.json()
        console.log(y);

}
a()