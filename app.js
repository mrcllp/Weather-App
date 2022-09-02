window.addEventListener('load', () => {
    let lon;
    let lat;
    let key = '7YQMSF49ML5SG6L7QNJMMTV57';
    let temperatureDescription = document.querySelector('.temp-description');
    let temperatureDegree = document.querySelector('.temp-degree');
    let locationTimezone= document.querySelector('.location-timezone');
    let des = document.querySelector('.temp-description1');
    let temperatureSection = document.querySelector(".temp");
    const tempSpan = document.querySelector('.temp span');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
        
            const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lon},-${lat}?key=${key}`
            

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                 const {temp,conditions, icon} = data.currentConditions;
            
                console.log(data);

                //Set DOM Elements from the API
                 temperatureDegree.textContent = temp;
                 temperatureDescription.textContent = conditions;
                 locationTimezone.textContent = data.timezone;
                 des.textContent = data.description;

                 // Formula for celsius 
                let celsius = (temp - 32) * (5 / 9);
                

                 // change temp to celsius

              
            
            });
        });
    


           
     }else {
         h1.textContent = "You have to accept the location pop up"
     }
 });