window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById("model");
    let yearElement = document.getElementById("year");
    let descriptionElement = document.getElementById("description");
    let priceElement = document.getElementById("price");

    let addButtonElement = document.getElementById("add");

    addButtonElement.addEventListener('click', submitInfo);
    
    let totalPriceElement = document.querySelector("#total-price");
    let sum = totalPriceElement.value;
    let tableBodyElement = document.getElementById("furniture-list");

    function submitInfo(){

        if(modelElement.value===' '||modelElement.value===null){
            
            return;
        }
        if(yearElement.value===' '||yearElement.value===null){
            
            return;
        }
        if(priceElement.value===' '||priceElement.value === null){
           
            return;
        }
        if(descriptionElement.value===' '||priceElement.value ===null){
               
            return;
        }
        if(Number(yearElement.value)<=0&&Number(priceElement.value)<=0){
           
            return;
        }
        let tr= document.createElement('tr');
        tr.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent=modelElement.value;

        let tdPrice = document.createElement('td');
        tdPrice.textContent = Number(modelElement.value).toFixed(2);

        let tdButton = document.createElement('td');
        let tdButtonInfo = document.createElement('button');
        tdButtonInfo.classList.add('moreBtn');
        tdButtonInfo.textContent= 'More info';

        let tdButtonBuy = document.createElement('button');
        tdButtonBuy.classList.add('buyBtn');
        tdButtonBuy.textContent='Buy it';

        let trHide= document.createElement('tr');
        trHide.classList.add('hide');
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearElement.value}`;
        let tdDesc = document.createElement('td');
        tdDesc.textContent = `Description: ${descriptionElement.value}`;
        tdDesc.setAttribute('colspan','3');


        tdButton.appendChild(tdButtonInfo);
        tdButton.appendChild(tdButtonBuy);
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDesc);

        tr.appendChild(tdModel);
        tr.appendChild(tdPrice);
        tr.appendChild(tdButton);
        tr.appendChild(trHide);
        tableBodyElement.appendChild(tr);



        modelElement.value ="";
        yearElement.value ="";
        descriptionElement.value = "";
        priceElement.value = "";
    }
    //tableBodyElement.addEventListener('click',(e)=>)
}
