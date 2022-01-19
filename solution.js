function addDestination(){

    let cityElement = document.querySelectorAll('.inputData')[0];
    if(cityElement.value ===""){
        return;
    }else{
        cityElement = cityElement.value;
        
    }

    let countryElement = document.querySelectorAll('.inputData')[1];
    if(countryElement.value ===""){
        return
    }else{
        countryElement = countryElement.value;
       
    }

    let seasonElement = document.getElementById('seasons').value;

    let summerElement = document.getElementById('summer');
    let autumnElement = document.getElementById('autumn');
    let winterElement = document.getElementById("winter");
    let springElement = document.getElementById('spring');

    let summerCounter= summerElement.value;
    let winterCounter = winterElement.value;
    let autumnCounter = autumnElement.value;
    let springCounter = springElement.value;
    
    
    if(seasonElement==="summer"){
        summerCounter= Number(summerElement.value)+1;
        summerElement.value = summerCounter;
        seasonElement ="Summer";
       
    }else if(seasonElement==="winter"){
        winterCounter = Number(winterElement.value)+1;
        winterElement.value = winterCounter;
        seasonElement = 'Winter';
        
    }else if(seasonElement==="spring"){
        springCounter = Number(springElement.value)+1;
        springElement.value = springCounter;
        seasonElement = "Spring";
    
    }else if(seasonElement==="autumn"){
        autumnCounter = Number(autumnElement.value)+1;
        autumnElement.value = autumnCounter;
       seasonElement = "Autumn";
    }
    let bodyElement = document.getElementById("destinationsList");
    let tdElementDestination = document.createElement('td');
    tdElementDestination.textContent = cityElement+", "+countryElement;
    let tdSeasonElement = document.createElement('td');
   // seasonElement = seasonElement.charAt[0].toUpperCase()+seasonElement; 
    tdSeasonElement.textContent = seasonElement;
    let trElemend = document.createElement('tr');
    trElemend.appendChild(tdElementDestination);
    trElemend.appendChild(tdSeasonElement);
    bodyElement.appendChild(trElemend);


    //let summerElement = document.getElementById('summer'); 
    document.querySelectorAll('.inputData')[0].value = "";
    document.querySelectorAll('.inputData')[1].value = "";
    
    
}