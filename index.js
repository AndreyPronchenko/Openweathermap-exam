
$(document).ready(function () {

    // Вкладки
let tab = document.querySelectorAll('.tab');
let se1 = document.querySelector('.se1');

tab.forEach(function (element) {
element.onclick = snowTabs;});

se1.style.display = 'none';
$("#pas").click(function(){
    $(".se1").show();
  });

    function snowTabs(){
        let data = this.getAttribute('data');
        let tabBody = document.querySelectorAll('.tab-body');
        for (let i = 0; i < tabBody.length; i++) {
            tabBody[i].style.display = 'none';
    }
      
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}

    $('.tabs li').mouseover(function () {

        $(this).css(
            {
                'font-weight': 'bold',
                'border': '1px solid #666',
                'border-bottom': '2px solid rgb(13, 145, 85)',
            }
        )
    });

    $('.tabs li').mouseout(function () {

        $(this).css(
            {
            'font-weight': 'normal',
            'border': 'none',
        }
    )
});

        // вкладки 2 страница

let tab1 = document.querySelectorAll('.tab1');

init();

tab1.forEach(function (element) {
    element.onclick = snowTabs1;});

    function init(){
        let tabBody1 = document.querySelectorAll('.tab-body1'); 
        for (let i = 1; i < tabBody1.length; i++) {
            tabBody1[i].style.display = 'none';
        }
    }

        function snowTabs1(){
            let data = this.getAttribute('data');
            let tabBody1 = document.querySelectorAll('.tab-body1');
            for (let i = 0; i < tabBody1.length; i++) {
                tabBody1[i].style.display = 'none';
        }

        document.querySelector(`.tab-body1[data="${data}"]`).style.display = 'block';
    }

            // Дата

function getDate()
{
    let date = new Date();
    let day = date.getDate();
    let month =new Array("01","02","03","04","05","06","07","08","09","10","11","12");
    var year = date.getFullYear();
    
   document.getElementById('timedisplay').innerHTML = day + '.' + month[date.getMonth()] + '.' + year;
}
setInterval(getDate, 0);


/* Активная вкладка 2 страница*/

let btnContainer = document.getElementById("myDIV");
let btns = btnContainer.getElementsByClassName("tab1");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Активная вкладка начало */

let btnContainer1 = document.getElementById("tabs");
let btns1 = btnContainer1.getElementsByClassName("tab");

for (let i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    this.className += " activ";
  });
}


            // API

        // CURRENT WEATHER

// fetch('https://api.openweathermap.org/data/2.5/weather?id=Moscow&appid=e66a81b870b01d95925635967d60b1dc')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))

async function getWeather() {  
const url = `http://api.openweathermap.org/data/2.5/weather?q=Kaluga&lang=ru&appid=e66a81b870b01d95925635967d60b1dc&units=metric`;
const res = await fetch(url);
const data = await res.json(); 

// Добавление иконки
const iconCode = data.weather[0].icon;
const weatherIconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
weatherIconElement.setAttribute('src', weatherIconUrl);

// Добавление температуры
temperature.textContent = `${Math.round(data.main.temp)}°C`;
// Текстовое описание 
weatherDescription.textContent = data.weather[0].description;
// Реальное ощущение температуры
realFeel.textContent = `Real feel ${Math.round(data.main.feels_like)}°`;

// sinrise
let sunrise = data.sys.sunrise;
let datesr = new Date((sunrise + data.timezone)*1000);
let date = new Date();

let period = date.getHours() <= 12 ? 'PM' : 'AM';

datesr = datesr.getUTCHours() + ":" + datesr.getMinutes() + ' ' + period;

Sunrise.textContent = 'Sunrise:' + ' ' + datesr;

        // sunset
let sunset = data.sys.sunset;
let datess = new Date((sunset + data.timezone)*1000);
// datess = datess.getUTCHours() + ":" + datess.getMinutes();
let date1 = new Date();
let period1 = date1.getHours() >= 12 ? 'PM' : 'AM';
datess = datess.getUTCHours() + ":" + datess.getMinutes() + ' ' + period1;
Sunset.textContent = 'Sunset:' + ' ' + datess;
// console.log(getMinutes)
// город
// let city = data.name;
// City.textContent = city;
// document.querySelector('.search').textContent = data.name;
// console.log(data.name);

        //   Duration
// let duration = data.dt;
let sunset1 = data.sys.sunset;
let sunrise1 = data.sys.sunrise;
// let currentDate = new Date();
let datesd = new Date((sunset1 - sunrise1)*1000);
datesd = datesd.getUTCHours() + ":" + datesd.getMinutes();
Duration.textContent = 'Duration:' + ' ' + datesd + ' ' + 'hr';
}

getWeather()

// const City = document.getElementById('#city');
const weatherIconElement = document.querySelector('.weather-icon');
const realFeel = document.querySelector('.real-feel');
const Sunrise = document.querySelector('.sunrise');
const Sunset = document.querySelector('.sunset');
const Duration = document.querySelector('.duration');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');


                // HOURLY
                
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`)
// .then(response => response.json())
// .then(data => console.log(data.list))
// .catch(error => console.error(error))

async function getForecast() { 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`;
const res = await fetch(url);
const data = await res.json(); 

                // 10 AM
temperature5.textContent = `${Math.round(data.list[0].main.temp)}°`;
realFeel1.textContent = `${Math.round(data.list[0].main.feels_like)}°`;
weather1Description.textContent = data.list[0].weather[0].description;
wind.textContent = `${Math.round(data.list[0].wind.speed)}`;
            // время
let hour = data.list[0].dt_txt;
let dates = new Date(hour*1000);
let date = new Date();
let period2 = date.getHours() < 12 ? 'PM' : 'AM';
dates = date.getUTCHours() + ' ' + period2;
Hour.textContent = dates;

const iconCode = data.list[0].weather[0].icon;
const weatherIconUrl1 = `http://openweathermap.org/img/w/${iconCode}.png`;
weatherIconElement1.setAttribute('src', weatherIconUrl1);

                // 11 AM
temperature6.textContent = `${Math.round(data.list[1].main.temp)}°`;
realFeel2.textContent = `${Math.round(data.list[1].main.feels_like)}°`;
weather2Description.textContent = data.list[1].weather[0].description;
wind1.textContent = `${Math.round(data.list[1].wind.speed)}`;
            // время
let hour1 = data.list[1].dt_txt;
let dates1 = new Date(hour1*1000);
let date1 = new Date();
let period3 = date1.getHours() < 12 ? 'PM' : 'AM';
dates1 = date1.getUTCHours() + 1 + ' ' + period3;
Hour1.textContent = dates1;

const iconCode1 = data.list[1].weather[0].icon;
const weatherIconUrl2 = `http://openweathermap.org/img/w/${iconCode1}.png`;
weatherIconElement2.setAttribute('src', weatherIconUrl2);

                // 12 AM
temperature7.textContent = `${Math.round(data.list[2].main.temp)}°`;
realFeel3.textContent = `${Math.round(data.list[2].main.feels_like)}°`;
weather3Description.textContent = data.list[2].weather[0].description;
wind2.textContent = `${Math.round(data.list[2].wind.speed)}`;
            // время
let hour2 = data.list[2].dt_txt;
let dates2 = new Date(hour2*1000);
let date2 = new Date();
let period4 = date2.getHours() <= 12 ? 'PM' : 'AM';
dates2 = date2.getUTCHours() + 2 + ' ' + period4;
Hour2.textContent = dates2;

const iconCode2 = data.list[2].weather[0].icon;
const weatherIconUrl3 = `http://openweathermap.org/img/w/${iconCode2}.png`;
weatherIconElement3.setAttribute('src', weatherIconUrl3);

                // 13 PM
temperature8.textContent = `${Math.round(data.list[3].main.temp)}°`;
realFeel4.textContent = `${Math.round(data.list[3].main.feels_like)}°`;
weather4Description.textContent = data.list[3].weather[0].description;
wind3.textContent = `${Math.round(data.list[3].wind.speed)}`;
            // время
let hour3 = data.list[3].dt_txt;
let dates3 = new Date(hour3*1000);
let date3 = new Date();
let period5 = date3.getHours() > 12 ? 'PM' : 'AM';
dates3 = date3.getUTCHours() + 3 + ' ' + period5;
Hour3.textContent = dates3;

const iconCode3 = data.list[3].weather[0].icon;
const weatherIconUrl4 = `http://openweathermap.org/img/w/${iconCode3}.png`;
weatherIconElement4.setAttribute('src', weatherIconUrl4);

                // 14 PM
temperature9.textContent = `${Math.round(data.list[4].main.temp)}°`;
realFeel5.textContent = `${Math.round(data.list[4].main.feels_like)}°`;
weather5Description.textContent = data.list[4].weather[0].description;
wind4.textContent = `${Math.round(data.list[4].wind.speed)}`;
            // время
let hour4 = data.list[4].dt_txt;
let dates4 = new Date(hour4*1000);
let date4 = new Date();
let period6 = date4.getHours() >= 12 ? 'PM' : 'AM';
dates4 = date4.getUTCHours() + 4 + ' ' + period6;
Hour4.textContent = dates4;

const iconCode4 = data.list[4].weather[0].icon;
const weatherIconUrl5 = `http://openweathermap.org/img/w/${iconCode4}.png`;
weatherIconElement5.setAttribute('src', weatherIconUrl5);

                // 15 PM
temperature10.textContent = `${Math.round(data.list[5].main.temp)}°`;
realFeel6.textContent = `${Math.round(data.list[5].main.feels_like)}°`;
weather6Description.textContent = data.list[5].weather[0].description;
wind5.textContent = `${Math.round(data.list[5].wind.speed)}`;
            // время
let hour5 = data.list[5].dt_txt;
let dates5 = new Date(hour5*1000);
let date5 = new Date();
let period7 = date5.getHours() > 12 ? 'PM' : 'AM';
date5.setHours(date5.getHours() + 2);
dates5 = date5.getHours() + ' ' + period7;
Hour5.textContent = dates5;

const iconCode5 = data.list[5].weather[0].icon;
const weatherIconUrl6 = `http://openweathermap.org/img/w/${iconCode5}.png`;
weatherIconElement6.setAttribute('src', weatherIconUrl6);

}
                // 10AM
const temperature5 = document.querySelector('.temperature5');
const Hour = document.querySelector('.hour');
const weatherIconElement1 = document.querySelector('.weather-icon5');
const realFeel1 = document.querySelector('.real-feel1');
const weather1Description = document.querySelector('.weather-description1');
const wind = document.querySelector('.wind1');

                // 11 AM
const temperature6 = document.querySelector('.temperature6');
const Hour1 = document.querySelector('.hour1');
const weatherIconElement2 = document.querySelector('.weather-icon6');
const realFeel2 = document.querySelector('.real-feel2');
const weather2Description = document.querySelector('.weather-description2');
const wind1 = document.querySelector('.wind2');

                // 12 AM
const temperature7 = document.querySelector('.temperature7');
const Hour2 = document.querySelector('.hour2');
const weatherIconElement3 = document.querySelector('.weather-icon7');
const realFeel3 = document.querySelector('.real-feel3');
const weather3Description = document.querySelector('.weather-description3');
const wind2 = document.querySelector('.wind3');

                // 13 PM
const temperature8 = document.querySelector('.temperature8');
const Hour3 = document.querySelector('.hour3');
const weatherIconElement4 = document.querySelector('.weather-icon8');
const realFeel4 = document.querySelector('.real-feel4');
const weather4Description = document.querySelector('.weather-description4');
const wind3 = document.querySelector('.wind4');

                // 14 PM
const temperature9 = document.querySelector('.temperature9');
const Hour4 = document.querySelector('.hour4');
const weatherIconElement5 = document.querySelector('.weather-icon9');
const realFeel5 = document.querySelector('.real-feel5');
const weather5Description = document.querySelector('.weather-description5');
const wind4 = document.querySelector('.wind5');

                // 15 PM
const temperature10 = document.querySelector('.temperature10');
const Hour5 = document.querySelector('.hour5');
const weatherIconElement6 = document.querySelector('.weather-icon10');
const realFeel6 = document.querySelector('.real-feel6');
const weather6Description = document.querySelector('.weather-description6');
const wind5 = document.querySelector('.wind6');

getForecast();


            // NEARBY PLACES

    //   Обнинск
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Obninsk&appid=e66a81b870b01d95925635967d60b1dc&units=metric`)
.then(response => response.json())
.then(data => {
temperature1.textContent = `${Math.round(data.main.temp)}°C`;
const iconCode = data.weather[0].icon;
const weatherIconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

const weatherIconElement = document.querySelector('.weather-icon1');
weatherIconElement.setAttribute('src', weatherIconUrl);
})
.catch(error => console.error(error))
const temperature1 = document.querySelector('.temperature1');

        // Людиново
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lyudinovo&appid=e66a81b870b01d95925635967d60b1dc&units=metric`)
.then(response => response.json())
.then(data => {
temperature2.textContent = `${Math.round(data.main.temp)}°C`;
const iconCode = data.weather[0].icon;
const weatherIconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

const weatherIconElement = document.querySelector('.weather-icon2');
weatherIconElement.setAttribute('src', weatherIconUrl);
})
.catch(error => console.error(error))

const temperature2 = document.querySelector('.temperature2');

        // Киров
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kirov&appid=e66a81b870b01d95925635967d60b1dc&units=metric`)
.then(response => response.json())
.then(data => {
temperature3.textContent = `${Math.round(data.main.temp)}°C`;
const iconCode = data.weather[0].icon;
const weatherIconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

const weatherIconElement = document.querySelector('.weather-icon3');
weatherIconElement.setAttribute('src', weatherIconUrl);
})
.catch(error => console.error(error))

const temperature3 = document.querySelector('.temperature3');

            // Хвастовичи

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Khvastovichi&appid=e66a81b870b01d95925635967d60b1dc&units=metric`)
.then(response => response.json())
.then(data => {
temperature4.textContent = `${Math.round(data.main.temp)}°C`;
const iconCode = data.weather[0].icon;
const weatherIconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

const weatherIconElement = document.querySelector('.weather-icon4');
weatherIconElement.setAttribute('src', weatherIconUrl);
})
.catch(error => console.error(error))

const temperature4 = document.querySelector('.temperature4');


            // 5-day forecast


// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`)
// .then(response => response.json())
// .then(data => console.log(data.list))
// .catch(error => console.error(error))

async function getForecasti() { 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`;
const res = await fetch(url);
const data = await res.json(); 

                  // Tonight вкладка
temperature12.textContent = `${Math.round(data.list[2].main.temp)}°`;
weather8Description.textContent = data.list[2].weather[0].description;
            // data
let hour1 = data.list[0].dt_txt;
let month =new Array("янв","февр","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек");
let dates1 = new Date(hour1 + month);
let date1 = new Date();
let currentDate = new Date();
dates1 = currentDate.getUTCDate()-1 + currentDate.getUTCMonth();
Hour7.textContent = dates1 + ' ' + month[date1.getMonth()];

const iconCode7 = data.list[2].weather[0].icon;
const weatherIconUrl8 = `http://openweathermap.org/img/w/${iconCode7}.png`;
weatherIconElement8.setAttribute('src', weatherIconUrl8);

                // Tonight
temperature11.textContent = `${Math.round(data.list[2].main.temp)}°`;
realFeel7.textContent = `${Math.round(data.list[2].main.feels_like)}°`;
weather7Description.textContent = data.list[2].weather[0].description;
wind6.textContent = `${Math.round(data.list[2].wind.speed)}`;
            // время
let hour = data.list[2].dt_txt;
let dates = new Date(hour + data.timezone*1000);
let date = new Date();
let period = date.getHours() > 12 ? 'PM' : 'AM';
date.setHours(date.getHours() + 3);
dates = date.getHours() + ' ' + period;
Hour6.textContent = dates;


const iconCode6 = data.list[2].weather[0].icon;
const weatherIconUrl7 = `http://openweathermap.org/img/w/${iconCode6}.png`;
weatherIconElement7.setAttribute('src', weatherIconUrl7);

                // Tonight 17PM
temperature13.textContent = `${Math.round(data.list[3].main.temp)}°`;
realFeel8.textContent = `${Math.round(data.list[3].main.feels_like)}°`;
weather9Description.textContent = data.list[3].weather[0].description;
wind7.textContent = `${Math.round(data.list[3].wind.speed)}`;
            // время
let hour2 = data.list[3].dt_txt;
let dates2 = new Date(hour2 + data.timezone*1000);
let date2 = new Date();
let period1 = date2.getHours() > 12 ? 'PM' : 'AM';
date2.setHours(date2.getHours() + 4);
dates2 = date2.getHours() + ' ' + period1;
Hour8.textContent = dates2;

const iconCode8 = data.list[3].weather[0].icon;
const weatherIconUrl9 = `http://openweathermap.org/img/w/${iconCode8}.png`;
weatherIconElement9.setAttribute('src', weatherIconUrl9);

                // Tonight 18PM
temperature14.textContent = `${Math.round(data.list[3].main.temp)}°`;
realFeel9.textContent = `${Math.round(data.list[3].main.feels_like)}°`;
weather10Description.textContent = data.list[3].weather[0].description;
wind8.textContent = `${Math.round(data.list[3].wind.speed)}`;
            // время
let hour3 = data.list[3].dt_txt;
let dates3 = new Date(hour3 + data.timezone*1000);
let date3 = new Date();
let period2 = date3.getHours() > 12 ? 'PM' : 'AM';
date3.setHours(date3.getHours() + 5);
dates3 = date3.getHours() + ' ' + period2;
Hour9.textContent = dates3;

const iconCode9 = data.list[3].weather[0].icon;
const weatherIconUrl10 = `http://openweathermap.org/img/w/${iconCode9}.png`;
weatherIconElement10.setAttribute('src', weatherIconUrl10);

                // Tonight 19PM
temperature15.textContent = `${Math.round(data.list[4].main.temp)}°`;
realFeel10.textContent = `${Math.round(data.list[4].main.feels_like)}°`;
weather11Description.textContent = data.list[4].weather[0].description;
wind9.textContent = `${Math.round(data.list[4].wind.speed)}`;
            // время
let hour4 = data.list[4].dt_txt;
let dates4 = new Date(hour4 + data.timezone*1000);
let date4 = new Date();
let period3 = date4.getHours() > 12 ? 'PM' : 'AM';
date4.setHours(date4.getHours() + 6);
dates4 = date4.getHours() + ' ' + period3;
Hour10.textContent = dates4;

const iconCode10 = data.list[4].weather[0].icon;
const weatherIconUrl11 = `http://openweathermap.org/img/w/${iconCode10}.png`;
weatherIconElement11.setAttribute('src', weatherIconUrl11);

                // Tonight 20PM
temperature16.textContent = `${Math.round(data.list[5].main.temp)}°`;
realFeel11.textContent = `${Math.round(data.list[5].main.feels_like)}°`;
weather12Description.textContent = data.list[5].weather[0].description;
wind10.textContent = `${Math.round(data.list[5].wind.speed)}`;
            // время
let hour5 = data.list[5].dt_txt;
let dates5 = new Date(hour5 + data.timezone*1000);
let date5 = new Date();
let period4 = date5.getHours() > 12 ? 'PM' : 'AM';
date5.setHours(date5.getHours() + 7);
dates5 = date5.getHours() + ' ' + period4;
Hour11.textContent = dates5;

const iconCode11 = data.list[5].weather[0].icon;
const weatherIconUrl12 = `http://openweathermap.org/img/w/${iconCode11}.png`;
weatherIconElement12.setAttribute('src', weatherIconUrl12);

                // Tonight 21PM
temperature17.textContent = `${Math.round(data.list[5].main.temp)}°`;
realFeel12.textContent = `${Math.round(data.list[5].main.feels_like)}°`;
weather13Description.textContent = data.list[5].weather[0].description;
wind11.textContent = `${Math.round(data.list[5].wind.speed)}`;
            // время
let hour6 = data.list[5].dt_txt;
let dates6 = new Date(hour6 + data.timezone*1000);
let date6 = new Date();
let period5 = date6.getHours() > 12 ? 'PM' : 'AM';
date6.setHours(date6.getHours() + 8);
dates6 = date6.getHours() + ' ' + period5;
Hour12.textContent = dates6;

const iconCode12 = data.list[5].weather[0].icon;
const weatherIconUrl13 = `http://openweathermap.org/img/w/${iconCode12}.png`;
weatherIconElement13.setAttribute('src', weatherIconUrl13);

}

        // Tonight вкладка 
const temperature12 = document.querySelector('.temperature12');
const Hour7 = document.querySelector('.hour7');
const weatherIconElement8 = document.querySelector('.weather-icon12');
const weather8Description = document.querySelector('.weather-description8');

            // Tonight
const temperature11 = document.querySelector('.temperature11');
const Hour6 = document.querySelector('.hour6');
const weatherIconElement7 = document.querySelector('.weather-icon11');
const realFeel7 = document.querySelector('.real-feel7');
const weather7Description = document.querySelector('.weather-description7');
const wind6 = document.querySelector('.wind7');

            // Tonight 17 PM
const temperature13 = document.querySelector('.temperature13');
const Hour8 = document.querySelector('.hour8');
const weatherIconElement9 = document.querySelector('.weather-icon13');
const realFeel8 = document.querySelector('.real-feel8');
const weather9Description = document.querySelector('.weather-description9');
const wind7 = document.querySelector('.wind8');

            // Tonight 18 PM
const temperature14 = document.querySelector('.temperature14');
const Hour9 = document.querySelector('.hour9');
const weatherIconElement10 = document.querySelector('.weather-icon14');
const realFeel9 = document.querySelector('.real-feel9');
const weather10Description = document.querySelector('.weather-description10');
const wind8 = document.querySelector('.wind9');

            // Tonight 19 PM
const temperature15 = document.querySelector('.temperature15');
const Hour10 = document.querySelector('.hour10');
const weatherIconElement11 = document.querySelector('.weather-icon15');
const realFeel10 = document.querySelector('.real-feel10');
const weather11Description = document.querySelector('.weather-description11');
const wind9 = document.querySelector('.wind10');

            // Tonight 20 PM
const temperature16 = document.querySelector('.temperature16');
const Hour11 = document.querySelector('.hour11');
const weatherIconElement12 = document.querySelector('.weather-icon16');
const realFeel11 = document.querySelector('.real-feel11');
const weather12Description = document.querySelector('.weather-description12');
const wind10 = document.querySelector('.wind11');

            // Tonight 21 PM
const temperature17 = document.querySelector('.temperature17');
const Hour12 = document.querySelector('.hour12');
const weatherIconElement13 = document.querySelector('.weather-icon17');
const realFeel12 = document.querySelector('.real-feel12');
const weather13Description = document.querySelector('.weather-description13');
const wind11 = document.querySelector('.wind12');

getForecasti();


            // Sunday

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`)
// .then(response => response.json())
// .then(data => console.log(data.list))
// .catch(error => console.error(error))

async function getForecastik() { 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`;
const res = await fetch(url);
const data = await res.json(); 

                  // Sunday вкладка
temperature18.textContent = `${Math.round(data.list[6].main.temp)}°`;
weather14Description.textContent = data.list[6].weather[0].description;
            // data
let hour = data.list[6].dt_txt;
let month =new Array("янв","февр","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек");
let dates = new Date(hour + month);
let date = new Date();
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);
dates = currentDate.getDate();
Hour13.textContent = dates + ' ' + month[currentDate.getMonth()];
// день недели
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
Days6.textContent = days[date.getDay()+1];

const iconCode13 = data.list[6].weather[0].icon;
const weatherIconUrl14 = `http://openweathermap.org/img/w/${iconCode13}.png`;
weatherIconElement14.setAttribute('src', weatherIconUrl14);

                // Sunday 9AM
temperature19.textContent = `${Math.round(data.list[6].main.temp)}°`;
realFeel13.textContent = `${Math.round(data.list[6].main.feels_like)}°`;
weather15Description.textContent = data.list[6].weather[0].description;
wind12.textContent = `${Math.round(data.list[6].wind.speed)}`;
            // время
let hour1 = data.list[6].dt_txt;
let dates1 = new Date(hour1*1000);
let date1 = new Date();
let period1 = date1.getHours() < 12 ? 'PM' : 'AM';
dates1 = date1.getUTCHours() + ' ' + period1;
Hour14.textContent = dates1;
// день недели
let days1 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
Days7.textContent = days1[date.getDay()+1];

const iconCode14 = data.list[6].weather[0].icon;
const weatherIconUrl15 = `http://openweathermap.org/img/w/${iconCode14}.png`;
weatherIconElement15.setAttribute('src', weatherIconUrl15);

                // Sunday 10AM
temperature20.textContent = `${Math.round(data.list[7].main.temp)}°`;
realFeel14.textContent = `${Math.round(data.list[7].main.feels_like)}°`;
weather16Description.textContent = data.list[7].weather[0].description;
wind13.textContent = `${Math.round(data.list[7].wind.speed)}`;
            // время
let hour2 = data.list[7].dt_txt;
let dates2 = new Date(hour2*1000);
let date2 = new Date();
let period2 = date2.getHours() < 12 ? 'PM' : 'AM';
dates2 = date2.getUTCHours() + 1 + ' ' + period2;
Hour15.textContent = dates2;

const iconCode15 = data.list[7].weather[0].icon;
const weatherIconUrl16 = `http://openweathermap.org/img/w/${iconCode15}.png`;
weatherIconElement16.setAttribute('src', weatherIconUrl16);

                // Sunday 11AM
temperature21.textContent = `${Math.round(data.list[8].main.temp)}°`;
realFeel15.textContent = `${Math.round(data.list[8].main.feels_like)}°`;
weather17Description.textContent = data.list[8].weather[0].description;
wind14.textContent = `${Math.round(data.list[8].wind.speed)}`;
            // время
let hour3 = data.list[8].dt_txt;
let dates3 = new Date(hour3*1000);
let date3 = new Date();
let period3 = date3.getHours() < 12 ? 'PM' : 'AM';
dates3 = date3.getUTCHours() + 2 + ' ' + period3;
Hour16.textContent = dates3;

const iconCode16 = data.list[8].weather[0].icon;
const weatherIconUrl17 = `http://openweathermap.org/img/w/${iconCode16}.png`;
weatherIconElement17.setAttribute('src', weatherIconUrl17);

                // Sunday 12AM
temperature22.textContent = `${Math.round(data.list[9].main.temp)}°`;
realFeel16.textContent = `${Math.round(data.list[9].main.feels_like)}°`;
weather18Description.textContent = data.list[9].weather[0].description;
wind15.textContent = `${Math.round(data.list[9].wind.speed)}`;
            // время
let hour4 = data.list[9].dt_txt;
let dates4 = new Date(hour4*1000);
let date4 = new Date();
let period4 = date4.getHours() >= 12 ? 'PM' : 'AM';
dates4 = date4.getUTCHours() + 3 + ' ' + period4;
Hour17.textContent = dates4;

const iconCode17 = data.list[9].weather[0].icon;
const weatherIconUrl18 = `http://openweathermap.org/img/w/${iconCode17}.png`;
weatherIconElement18.setAttribute('src', weatherIconUrl18);

                // Sunday 13AM
temperature23.textContent = `${Math.round(data.list[10].main.temp)}°`;
realFeel17.textContent = `${Math.round(data.list[10].main.feels_like)}°`;
weather19Description.textContent = data.list[10].weather[0].description;
wind16.textContent = `${Math.round(data.list[10].wind.speed)}`;
            // время
let hour5 = data.list[10].dt_txt;
let dates5 = new Date(hour5*1000);
let date5 = new Date();
let period5 = date5.getHours() > 12 ? 'PM' : 'AM';
dates5 = date5.getUTCHours() + 4 + ' ' + period5;
Hour18.textContent = dates5;

const iconCode18 = data.list[10].weather[0].icon;
const weatherIconUrl19 = `http://openweathermap.org/img/w/${iconCode18}.png`;
weatherIconElement19.setAttribute('src', weatherIconUrl19);

                // Sunday 14AM
temperature24.textContent = `${Math.round(data.list[11].main.temp)}°`;
realFeel18.textContent = `${Math.round(data.list[11].main.feels_like)}°`;
weather20Description.textContent = data.list[11].weather[0].description;
wind17.textContent = `${Math.round(data.list[11].wind.speed)}`;
            // время
let hour6 = data.list[11].dt_txt;
let dates6 = new Date(hour6*1000);
let date6 = new Date();
let period6 = date6.getHours() > 12 ? 'PM' : 'AM';
dates6 = date6.getUTCHours() + 5 + ' ' + period6;
Hour19.textContent = dates6;

const iconCode19 = data.list[11].weather[0].icon;
const weatherIconUrl20 = `http://openweathermap.org/img/w/${iconCode19}.png`;
weatherIconElement20.setAttribute('src', weatherIconUrl20);

}

        // Sunday вкладка 
const temperature18 = document.querySelector('.temperature18');
const Days6 = document.querySelector('.days6');
const Hour13 = document.querySelector('.hour13');
const weatherIconElement14 = document.querySelector('.weather-icon18');
const weather14Description = document.querySelector('.weather-description14');

            // Sunday 9AM
const temperature19 = document.querySelector('.temperature19');
const Days7 = document.querySelector('.days7');
const Hour14 = document.querySelector('.hour14');
const weatherIconElement15 = document.querySelector('.weather-icon19');
const realFeel13 = document.querySelector('.real-feel13');
const weather15Description = document.querySelector('.weather-description15');
const wind12 = document.querySelector('.wind13');

            // Sunday 10AM
const temperature20 = document.querySelector('.temperature20');
const Hour15 = document.querySelector('.hour15');
const weatherIconElement16 = document.querySelector('.weather-icon20');
const realFeel14 = document.querySelector('.real-feel14');
const weather16Description = document.querySelector('.weather-description16');
const wind13 = document.querySelector('.wind14');

            // Sunday 11AM
const temperature21 = document.querySelector('.temperature21');
const Hour16 = document.querySelector('.hour16');
const weatherIconElement17 = document.querySelector('.weather-icon21');
const realFeel15 = document.querySelector('.real-feel15');
const weather17Description = document.querySelector('.weather-description17');
const wind14 = document.querySelector('.wind15');

            // Sunday 12AM
const temperature22 = document.querySelector('.temperature22');
const Hour17 = document.querySelector('.hour17');
const weatherIconElement18 = document.querySelector('.weather-icon22');
const realFeel16 = document.querySelector('.real-feel16');
const weather18Description = document.querySelector('.weather-description18');
const wind15 = document.querySelector('.wind16');

            // Sunday 13AM
const temperature23 = document.querySelector('.temperature23');
const Hour18 = document.querySelector('.hour18');
const weatherIconElement19 = document.querySelector('.weather-icon23');
const realFeel17 = document.querySelector('.real-feel17');
const weather19Description = document.querySelector('.weather-description19');
const wind16 = document.querySelector('.wind17');

            // Sunday 14AM
const temperature24 = document.querySelector('.temperature24');
const Hour19 = document.querySelector('.hour19');
const weatherIconElement20 = document.querySelector('.weather-icon24');
const realFeel18 = document.querySelector('.real-feel18');
const weather20Description = document.querySelector('.weather-description20');
const wind17 = document.querySelector('.wind18');

getForecastik();



           // Monday

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`)
// .then(response => response.json())
// .then(data => console.log(data.list))
// .catch(error => console.error(error))

async function getForecastic() { 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`;
const res = await fetch(url);
const data = await res.json(); 

                  // Monday вкладка
temperature25.textContent = `${Math.round(data.list[13].main.temp)}°`;
weather21Description.textContent = data.list[13].weather[0].description;
            // data
let hour = data.list[13].dt_txt;
let month =new Array("янв","февр","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек");
let dates = new Date(hour + month);
let date = new Date();
let currentDate = new Date();
currentDate.setDate(currentDate.getDate());
dates = currentDate.getDate()+2;
Hour21.textContent = dates + ' ' + month[currentDate.getMonth()];
// день недели
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
Days4.textContent = days[date.getDay()+2];

const iconCode20 = data.list[13].weather[0].icon;
const weatherIconUrl21 = `http://openweathermap.org/img/w/${iconCode20}.png`;
weatherIconElement22.setAttribute('src', weatherIconUrl21);

              // Monday 9AM
temperature26.textContent = `${Math.round(data.list[14].main.temp)}°`;
realFeel19.textContent = `${Math.round(data.list[14].main.feels_like)}°`;
weather22Description.textContent = data.list[14].weather[0].description;
wind18.textContent = `${Math.round(data.list[14].wind.speed)}`;
            // время
let hour1 = data.list[14].dt_txt;
let dates1 = new Date(hour1*1000);
let date1 = new Date();
let period1 = date1.getHours() < 12 ? 'PM' : 'AM';
dates1 = date1.getUTCHours() + ' ' + period1;
Hour22.textContent = dates1;
// день недели
let days1 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
Days5.textContent = days1[date.getDay()+2];

const iconCode21 = data.list[14].weather[0].icon;
const weatherIconUrl22 = `http://openweathermap.org/img/w/${iconCode21}.png`;
weatherIconElement23.setAttribute('src', weatherIconUrl22);

              // Monday 10AM
temperature27.textContent = `${Math.round(data.list[15].main.temp)}°`;
realFeel20.textContent = `${Math.round(data.list[15].main.feels_like)}°`;
weather23Description.textContent = data.list[15].weather[0].description;
wind19.textContent = `${Math.round(data.list[15].wind.speed)}`;
            // время
let hour2 = data.list[15].dt_txt;
let dates2 = new Date(hour2*1000);
let date2 = new Date();
let period2 = date2.getHours() < 12 ? 'PM' : 'AM';
dates2 = date2.getUTCHours() + 1 + ' ' + period2;
Hour23.textContent = dates2;

const iconCode22 = data.list[15].weather[0].icon;
const weatherIconUrl23 = `http://openweathermap.org/img/w/${iconCode22}.png`;
weatherIconElement24.setAttribute('src', weatherIconUrl23);

              // Monday 11AM
temperature28.textContent = `${Math.round(data.list[16].main.temp)}°`;
realFeel21.textContent = `${Math.round(data.list[16].main.feels_like)}°`;
weather24Description.textContent = data.list[16].weather[0].description;
wind20.textContent = `${Math.round(data.list[16].wind.speed)}`;
            // время
let hour3 = data.list[16].dt_txt;
let dates3 = new Date(hour3*1000);
let date3 = new Date();
let period3 = date3.getHours() < 12 ? 'PM' : 'AM';
dates3 = date3.getUTCHours() + 2 + ' ' + period3;
Hour24.textContent = dates3;

const iconCode23 = data.list[16].weather[0].icon;
const weatherIconUrl24 = `http://openweathermap.org/img/w/${iconCode23}.png`;
weatherIconElement25.setAttribute('src', weatherIconUrl24);

              // Monday 12AM
temperature29.textContent = `${Math.round(data.list[17].main.temp)}°`;
realFeel22.textContent = `${Math.round(data.list[17].main.feels_like)}°`;
weather25Description.textContent = data.list[17].weather[0].description;
wind21.textContent = `${Math.round(data.list[17].wind.speed)}`;
            // время
let hour4 = data.list[17].dt_txt;
let dates4 = new Date(hour4*1000);
let date4 = new Date();
let period4 = date4.getHours() >= 12 ? 'PM' : 'AM';
dates4 = date4.getUTCHours() + 3 + ' ' + period4;
Hour25.textContent = dates4;

const iconCode24 = data.list[17].weather[0].icon;
const weatherIconUrl25 = `http://openweathermap.org/img/w/${iconCode24}.png`;
weatherIconElement26.setAttribute('src', weatherIconUrl25);

              // Monday 13AM
temperature30.textContent = `${Math.round(data.list[18].main.temp)}°`;
realFeel23.textContent = `${Math.round(data.list[18].main.feels_like)}°`;
weather26Description.textContent = data.list[18].weather[0].description;
wind22.textContent = `${Math.round(data.list[18].wind.speed)}`;
            // время
let hour5 = data.list[18].dt_txt;
let dates5 = new Date(hour5*1000);
let date5 = new Date();
let period5 = date5.getHours() > 12 ? 'PM' : 'AM';
dates5 = date5.getUTCHours() + 4 + ' ' + period5;
Hour26.textContent = dates5;

const iconCode25 = data.list[18].weather[0].icon;
const weatherIconUrl26 = `http://openweathermap.org/img/w/${iconCode25}.png`;
weatherIconElement27.setAttribute('src', weatherIconUrl26);

              // Monday 14AM
temperature31.textContent = `${Math.round(data.list[19].main.temp)}°`;
realFeel24.textContent = `${Math.round(data.list[19].main.feels_like)}°`;
weather27Description.textContent = data.list[19].weather[0].description;
wind23.textContent = `${Math.round(data.list[19].wind.speed)}`;
            // время
let hour6 = data.list[19].dt_txt;
let dates6 = new Date(hour6*1000);
let date6 = new Date();
let period6 = date6.getHours() > 12 ? 'PM' : 'AM';
dates6 = date6.getUTCHours() + 5 + ' ' + period6;
Hour27.textContent = dates6;

const iconCode26 = data.list[19].weather[0].icon;
const weatherIconUrl27 = `http://openweathermap.org/img/w/${iconCode26}.png`;
weatherIconElement28.setAttribute('src', weatherIconUrl27);

}

        // Monday вкладка 
const temperature25 = document.querySelector('.temperature25');
const Days4 = document.querySelector('.days4');
const Hour21 = document.querySelector('.hour20');
const weatherIconElement22 = document.querySelector('.weather-icon25');
const weather21Description = document.querySelector('.weather-description21');

         // Monday 9AM
const temperature26 = document.querySelector('.temperature26');
const Days5 = document.querySelector('.days5');
const Hour22 = document.querySelector('.hour21');
const weatherIconElement23 = document.querySelector('.weather-icon26');
const realFeel19 = document.querySelector('.real-feel19');
const weather22Description = document.querySelector('.weather-description22');
const wind18 = document.querySelector('.wind19');

         // Monday 10AM
const temperature27 = document.querySelector('.temperature27');
const Hour23 = document.querySelector('.hour22');
const weatherIconElement24 = document.querySelector('.weather-icon27');
const realFeel20 = document.querySelector('.real-feel20');
const weather23Description = document.querySelector('.weather-description23');
const wind19 = document.querySelector('.wind20');

         // Monday 11AM
const temperature28 = document.querySelector('.temperature28');
const Hour24 = document.querySelector('.hour23');
const weatherIconElement25 = document.querySelector('.weather-icon28');
const realFeel21 = document.querySelector('.real-feel21');
const weather24Description = document.querySelector('.weather-description24');
const wind20 = document.querySelector('.wind21');

         // Monday 12AM
const temperature29 = document.querySelector('.temperature29');
const Hour25 = document.querySelector('.hour24');
const weatherIconElement26 = document.querySelector('.weather-icon29');
const realFeel22 = document.querySelector('.real-feel22');
const weather25Description = document.querySelector('.weather-description25');
const wind21 = document.querySelector('.wind22');

         // Monday 13AM
const temperature30 = document.querySelector('.temperature30');
const Hour26 = document.querySelector('.hour25');
const weatherIconElement27 = document.querySelector('.weather-icon30');
const realFeel23 = document.querySelector('.real-feel23');
const weather26Description = document.querySelector('.weather-description26');
const wind22 = document.querySelector('.wind23');

         // Monday 14AM
const temperature31 = document.querySelector('.temperature31');
const Hour27 = document.querySelector('.hour26');
const weatherIconElement28 = document.querySelector('.weather-icon31');
const realFeel24 = document.querySelector('.real-feel24');
const weather27Description = document.querySelector('.weather-description27');
const wind23 = document.querySelector('.wind24');

getForecastic();



           // Tuesday

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`)
// .then(response => response.json())
// .then(data => console.log(data.list))
// .catch(error => console.error(error))

async function getForec() { 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`;
const res = await fetch(url);
const data = await res.json(); 

                    // Tuesday вкладка
temperature32.textContent = `${Math.round(data.list[20].main.temp)}°`;
weather28Description.textContent = data.list[20].weather[0].description;
            // data
let hour = data.list[20].dt_txt;
let month =new Array("янв","февр","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек");
let dates = new Date(hour + month);
let date = new Date();
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 3);
dates = currentDate.getDate();
Hour28.textContent = dates + ' ' + month[currentDate.getMonth()];
// день недели
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// var now = new Date();
Days2.textContent = days[currentDate.getDay()+0];

const iconCode27 = data.list[20].weather[0].icon;
const weatherIconUrl28 = `http://openweathermap.org/img/w/${iconCode27}.png`;
weatherIconElement29.setAttribute('src', weatherIconUrl28);

              // Tuesday 9AM
temperature33.textContent = `${Math.round(data.list[21].main.temp)}°`;
realFeel25.textContent = `${Math.round(data.list[21].main.feels_like)}°`;
weather29Description.textContent = data.list[21].weather[0].description;
wind24.textContent = `${Math.round(data.list[21].wind.speed)}`;
            // время
let hour1 = data.list[21].dt_txt;
let dates1 = new Date(hour1*1000);
let date1 = new Date();
let period1 = date1.getHours() < 12 ? 'PM' : 'AM';
dates1 = date1.getUTCHours() + ' ' + period1;
Hour29.textContent = dates1;
// день недели
let days1 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
Days3.textContent = days1[currentDate.getDay()+0];

const iconCode28 = data.list[21].weather[0].icon;
const weatherIconUrl29 = `http://openweathermap.org/img/w/${iconCode28}.png`;
weatherIconElement30.setAttribute('src', weatherIconUrl29);

              // Tuesday 10AM
temperature34.textContent = `${Math.round(data.list[22].main.temp)}°`;
realFeel26.textContent = `${Math.round(data.list[22].main.feels_like)}°`;
weather30Description.textContent = data.list[22].weather[0].description;
wind25.textContent = `${Math.round(data.list[22].wind.speed)}`;
            // время
let hour2 = data.list[22].dt_txt;
let dates2 = new Date(hour2*1000);
let date2 = new Date();
let period2 = date2.getHours() < 12 ? 'PM' : 'AM';
dates2 = date2.getUTCHours() + 1 + ' ' + period2;
Hour30.textContent = dates2;

const iconCode29 = data.list[22].weather[0].icon;
const weatherIconUrl30 = `http://openweathermap.org/img/w/${iconCode29}.png`;
weatherIconElement31.setAttribute('src', weatherIconUrl30);

              // Tuesday 11AM
temperature35.textContent = `${Math.round(data.list[23].main.temp)}°`;
realFeel27.textContent = `${Math.round(data.list[23].main.feels_like)}°`;
weather31Description.textContent = data.list[23].weather[0].description;
wind26.textContent = `${Math.round(data.list[23].wind.speed)}`;
            // время
let hour3 = data.list[23].dt_txt;
let dates3 = new Date(hour3*1000);
let date3 = new Date();
let period3 = date3.getHours() < 12 ? 'PM' : 'AM';
dates3 = date3.getUTCHours() + 2 + ' ' + period3;
Hour31.textContent = dates3;

const iconCode30 = data.list[23].weather[0].icon;
const weatherIconUrl31 = `http://openweathermap.org/img/w/${iconCode30}.png`;
weatherIconElement32.setAttribute('src', weatherIconUrl31);

              // Tuesday 12AM
temperature36.textContent = `${Math.round(data.list[24].main.temp)}°`;
realFeel28.textContent = `${Math.round(data.list[24].main.feels_like)}°`;
weather32Description.textContent = data.list[24].weather[0].description;
wind27.textContent = `${Math.round(data.list[24].wind.speed)}`;
            // время
let hour4 = data.list[24].dt_txt;
let dates4 = new Date(hour4*1000);
let date4 = new Date();
let period4 = date4.getHours() >= 12 ? 'PM' : 'AM';
dates4 = date4.getUTCHours() + 3 + ' ' + period4;
Hour32.textContent = dates4;

const iconCode31 = data.list[24].weather[0].icon;
const weatherIconUrl32 = `http://openweathermap.org/img/w/${iconCode31}.png`;
weatherIconElement33.setAttribute('src', weatherIconUrl32);

              // Tuesday 13AM
temperature37.textContent = `${Math.round(data.list[25].main.temp)}°`;
realFeel29.textContent = `${Math.round(data.list[25].main.feels_like)}°`;
weather33Description.textContent = data.list[25].weather[0].description;
wind28.textContent = `${Math.round(data.list[25].wind.speed)}`;
            // время
let hour5 = data.list[25].dt_txt;
let dates5 = new Date(hour5*1000);
let date5 = new Date();
let period5 = date5.getHours() > 12 ? 'PM' : 'AM';
dates5 = date5.getUTCHours() + 4 + ' ' + period5;
Hour33.textContent = dates5;

const iconCode32 = data.list[25].weather[0].icon;
const weatherIconUrl33 = `http://openweathermap.org/img/w/${iconCode32}.png`;
weatherIconElement34.setAttribute('src', weatherIconUrl33);

              // Tuesday 14AM
temperature38.textContent = `${Math.round(data.list[26].main.temp)}°`;
realFeel30.textContent = `${Math.round(data.list[26].main.feels_like)}°`;
weather34Description.textContent = data.list[26].weather[0].description;
wind29.textContent = `${Math.round(data.list[26].wind.speed)}`;
            // время
let hour6 = data.list[26].dt_txt;
let dates6 = new Date(hour6*1000);
let date6 = new Date();
let period6 = date6.getHours() > 12 ? 'PM' : 'AM';
dates6 = date6.getUTCHours() + 5 + ' ' + period6;
Hour34.textContent = dates6;

const iconCode33 = data.list[26].weather[0].icon;
const weatherIconUrl34 = `http://openweathermap.org/img/w/${iconCode33}.png`;
weatherIconElement35.setAttribute('src', weatherIconUrl34);

}
        // Tuesday вкладка 
const temperature32 = document.querySelector('.temperature32');
const Hour28 = document.querySelector('.hour27');
const Days2 = document.querySelector('.days2');
const weatherIconElement29 = document.querySelector('.weather-icon32');
const weather28Description = document.querySelector('.weather-description28');

         // Tuesday 9AM
const temperature33 = document.querySelector('.temperature33');
const Days3 = document.querySelector('.days3');
const Hour29 = document.querySelector('.hour28');
const weatherIconElement30 = document.querySelector('.weather-icon33');
const realFeel25 = document.querySelector('.real-feel25');
const weather29Description = document.querySelector('.weather-description29');
const wind24 = document.querySelector('.wind25');

         // Tuesday 10AM
const temperature34 = document.querySelector('.temperature34');
const Hour30 = document.querySelector('.hour29');
const weatherIconElement31 = document.querySelector('.weather-icon34');
const realFeel26 = document.querySelector('.real-feel26');
const weather30Description = document.querySelector('.weather-description30');
const wind25 = document.querySelector('.wind26');

         // Tuesday 11AM
const temperature35 = document.querySelector('.temperature35');
const Hour31 = document.querySelector('.hour30');
const weatherIconElement32 = document.querySelector('.weather-icon35');
const realFeel27 = document.querySelector('.real-feel27');
const weather31Description = document.querySelector('.weather-description31');
const wind26 = document.querySelector('.wind27');

         // Tuesday 12AM
const temperature36 = document.querySelector('.temperature36');
const Hour32 = document.querySelector('.hour31');
const weatherIconElement33 = document.querySelector('.weather-icon36');
const realFeel28 = document.querySelector('.real-feel28');
const weather32Description = document.querySelector('.weather-description32');
const wind27 = document.querySelector('.wind28');

         // Tuesday 13AM
const temperature37 = document.querySelector('.temperature37');
const Hour33 = document.querySelector('.hour32');
const weatherIconElement34 = document.querySelector('.weather-icon37');
const realFeel29 = document.querySelector('.real-feel29');
const weather33Description = document.querySelector('.weather-description33');
const wind28 = document.querySelector('.wind29');

         // Tuesday 14AM
const temperature38 = document.querySelector('.temperature38');
const Hour34 = document.querySelector('.hour33');
const weatherIconElement35 = document.querySelector('.weather-icon38');
const realFeel30 = document.querySelector('.real-feel30');
const weather34Description = document.querySelector('.weather-description34');
const wind29 = document.querySelector('.wind30');


getForec();


            // wednesday

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`)
// .then(response => response.json())
// .then(data => console.log(data.list))
// .catch(error => console.error(error))

async function getForeca() { 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kaluga&lang=ru&units=metric&APPID=e66a81b870b01d95925635967d60b1dc`;
const res = await fetch(url);
const data = await res.json(); 

                    // wednesday вкладка
temperature39.textContent = `${Math.round(data.list[27].main.temp)}°`;
weather35Description.textContent = data.list[27].weather[0].description;
            // data
let hour = data.list[27].dt_txt;
let month =new Array("янв","февр","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек");
let dates = new Date(hour + month);
let date = new Date();
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 4);
dates = currentDate.getDate();
Hour35.textContent = dates + ' ' + month[currentDate.getMonth()];
// день недели
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
Days.textContent = days[currentDate.getDay()+0];

const iconCode34 = data.list[27].weather[0].icon;
const weatherIconUrl35 = `http://openweathermap.org/img/w/${iconCode34}.png`;
weatherIconElement36.setAttribute('src', weatherIconUrl35);

              // wednesday 9AM
temperature40.textContent = `${Math.round(data.list[28].main.temp)}°`;
realFeel31.textContent = `${Math.round(data.list[28].main.feels_like)}°`;
weather36Description.textContent = data.list[28].weather[0].description;
wind30.textContent = `${Math.round(data.list[28].wind.speed)}`;
            // время
let hour1 = data.list[28].dt_txt;
let dates1 = new Date(hour1*1000);
let date1 = new Date();
let period1 = date1.getHours() < 12 ? 'PM' : 'AM';
dates1 = date1.getUTCHours() + ' ' + period1;
Hour36.textContent = dates1;
// день недели
let days1 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
Days1.textContent = days1[currentDate.getDay()+0];

const iconCode35 = data.list[28].weather[0].icon;
const weatherIconUrl36 = `http://openweathermap.org/img/w/${iconCode35}.png`;
weatherIconElement37.setAttribute('src', weatherIconUrl36);

              // wednesday 10AM
temperature41.textContent = `${Math.round(data.list[29].main.temp)}°`;
realFeel32.textContent = `${Math.round(data.list[29].main.feels_like)}°`;
weather37Description.textContent = data.list[29].weather[0].description;
wind31.textContent = `${Math.round(data.list[29].wind.speed)}`;
            // время
let hour2 = data.list[29].dt_txt;
let dates2 = new Date(hour2*1000);
let date2 = new Date();
let period2 = date2.getHours() < 12 ? 'PM' : 'AM';
dates2 = date2.getUTCHours() + 1 + ' ' + period2;
Hour37.textContent = dates2;

const iconCode36 = data.list[29].weather[0].icon;
const weatherIconUrl37 = `http://openweathermap.org/img/w/${iconCode36}.png`;
weatherIconElement38.setAttribute('src', weatherIconUrl37);

              // wednesday 11AM
temperature42.textContent = `${Math.round(data.list[30].main.temp)}°`;
realFeel33.textContent = `${Math.round(data.list[30].main.feels_like)}°`;
weather38Description.textContent = data.list[30].weather[0].description;
wind32.textContent = `${Math.round(data.list[30].wind.speed)}`;
            // время
let hour3 = data.list[30].dt_txt;
let dates3 = new Date(hour3*1000);
let date3 = new Date();
let period3 = date3.getHours() < 12 ? 'PM' : 'AM';
dates3 = date3.getUTCHours() + 2 + ' ' + period3;
Hour38.textContent = dates3;

const iconCode37 = data.list[30].weather[0].icon;
const weatherIconUrl38 = `http://openweathermap.org/img/w/${iconCode37}.png`;
weatherIconElement39.setAttribute('src', weatherIconUrl38);

              // wednesday 12AM
temperature43.textContent = `${Math.round(data.list[31].main.temp)}°`;
realFeel34.textContent = `${Math.round(data.list[31].main.feels_like)}°`;
weather39Description.textContent = data.list[31].weather[0].description;
wind33.textContent = `${Math.round(data.list[31].wind.speed)}`;
            // время
let hour4 = data.list[31].dt_txt;
let dates4 = new Date(hour4*1000);
let date4 = new Date();
let period4 = date4.getHours() >= 12 ? 'PM' : 'AM';
dates4 = date4.getUTCHours() + 3 + ' ' + period4;
Hour39.textContent = dates4;

const iconCode38 = data.list[31].weather[0].icon;
const weatherIconUrl39 = `http://openweathermap.org/img/w/${iconCode38}.png`;
weatherIconElement40.setAttribute('src', weatherIconUrl39);

              // wednesday 13AM
temperature44.textContent = `${Math.round(data.list[32].main.temp)}°`;
realFeel35.textContent = `${Math.round(data.list[32].main.feels_like)}°`;
weather40Description.textContent = data.list[32].weather[0].description;
wind34.textContent = `${Math.round(data.list[32].wind.speed)}`;
            // время
let hour5 = data.list[32].dt_txt;
let dates5 = new Date(hour5*1000);
let date5 = new Date();
let period5 = date5.getHours() > 12 ? 'PM' : 'AM';
dates5 = date5.getUTCHours() + 4 + ' ' + period5;
Hour40.textContent = dates5;

const iconCode39 = data.list[32].weather[0].icon;
const weatherIconUrl40 = `http://openweathermap.org/img/w/${iconCode39}.png`;
weatherIconElement41.setAttribute('src', weatherIconUrl40);

            // wednesday 14AM
temperature45.textContent = `${Math.round(data.list[33].main.temp)}°`;
realFeel36.textContent = `${Math.round(data.list[33].main.feels_like)}°`;
weather41Description.textContent = data.list[33].weather[0].description;
wind35.textContent = `${Math.round(data.list[33].wind.speed)}`;
            // время
let hour6 = data.list[33].dt_txt;
let dates6 = new Date(hour6*1000);
let date6 = new Date();
let period6 = date6.getHours() > 12 ? 'PM' : 'AM';
dates6 = date6.getUTCHours() + 5 + ' ' + period6;
Hour41.textContent = dates6;

const iconCode40 = data.list[33].weather[0].icon;
const weatherIconUrl41 = `http://openweathermap.org/img/w/${iconCode40}.png`;
weatherIconElement42.setAttribute('src', weatherIconUrl41);

}

        // wednesday вкладка 
const temperature39 = document.querySelector('.temperature39');
const Days = document.querySelector('.days');
const Hour35 = document.querySelector('.hour34');
const weatherIconElement36 = document.querySelector('.weather-icon39');
const weather35Description = document.querySelector('.weather-description35');

         // wednesday 9AM
const temperature40 = document.querySelector('.temperature40');
const Days1 = document.querySelector('.days1');
const Hour36 = document.querySelector('.hour35');
const weatherIconElement37 = document.querySelector('.weather-icon40');
const realFeel31 = document.querySelector('.real-feel31');
const weather36Description = document.querySelector('.weather-description36');
const wind30 = document.querySelector('.wind31');

         // wednesday 10AM
const temperature41 = document.querySelector('.temperature41');
const Hour37 = document.querySelector('.hour36');
const weatherIconElement38 = document.querySelector('.weather-icon41');
const realFeel32 = document.querySelector('.real-feel32');
const weather37Description = document.querySelector('.weather-description37');
const wind31 = document.querySelector('.wind32');

         // wednesday 11AM
const temperature42 = document.querySelector('.temperature42');
const Hour38 = document.querySelector('.hour37');
const weatherIconElement39 = document.querySelector('.weather-icon42');
const realFeel33 = document.querySelector('.real-feel33');
const weather38Description = document.querySelector('.weather-description38');
const wind32 = document.querySelector('.wind33');

         // wednesday 12AM
const temperature43 = document.querySelector('.temperature43');
const Hour39 = document.querySelector('.hour38');
const weatherIconElement40 = document.querySelector('.weather-icon43');
const realFeel34 = document.querySelector('.real-feel34');
const weather39Description = document.querySelector('.weather-description39');
const wind33 = document.querySelector('.wind34');

         // wednesday 13AM
const temperature44 = document.querySelector('.temperature44');
const Hour40 = document.querySelector('.hour39');
const weatherIconElement41 = document.querySelector('.weather-icon44');
const realFeel35 = document.querySelector('.real-feel35');
const weather40Description = document.querySelector('.weather-description40');
const wind34 = document.querySelector('.wind35');

         // wednesday 14AM
const temperature45 = document.querySelector('.temperature45');
const Hour41 = document.querySelector('.hour40');
const weatherIconElement42 = document.querySelector('.weather-icon45');
const realFeel36 = document.querySelector('.real-feel36');
const weather41Description = document.querySelector('.weather-description41');
const wind35 = document.querySelector('.wind36');
  
getForeca();



// var search = document.querySelector('.search');
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temperature');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');


// button.addEventListener('click', function(name){
// fetch('https://api.openweathermap.org/data/2.5/weather?id=city id&appid=e66a81b870b01d95925635967d60b1dc')
// .then(response => response.json())
// .then(data => {
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   id ="";

// })

// .catch(err => alert("Wrong city name!"));
// })



//   button.addEventListener('click', function(name){
//   const city = document.getElementById('city').value;
//   const countryCode = document.getElementById('countryCode').value
//   weather.changeLocation(city, countryCode);
//   storage.setLocationData(city, countryCode);
//   fetchWeather();

//   async getWeather() {
//     const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
//     const response = await fetch(URI);
//     const data = await response.json();
//     return data;
//   }
//   });







});