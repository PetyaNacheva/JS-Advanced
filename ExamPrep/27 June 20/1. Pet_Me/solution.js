function solve() {
    let elementParent = document.getElementById('container');
    let addButtonElement = elementParent.children[4];
    addButtonElement.addEventListener('click', create);

    function create(e){
        e.preventDefault();

        let petName = elementParent.children[0];
        if(petName.value=== ''||petName.value ===' '){
            window.alert('pet name must be filled');
            return;
        }else{
            petName = petName.value;
          
        }

        let petAge = elementParent.children[1];
        
        if(isNaN(petAge.value)||petAge.value===''||petAge.value===' '){
            window.alert('pet age musst be willed with number');
            return;
        }else{
            petAge = Number(petAge.value);
        }

        let petKind = elementParent.children[2];
        if(petKind.value ===''||petKind.value===' '){
            window.alert('petKind must be filed');
            return;
        }else{
            petKind = petKind.value;
        }
        let petOwner = elementParent.children[3];
        if(petOwner.value ===''||petOwner.value ===' '){
            window.alert('pet owner must be filled');
            return;
        }else{
            petOwner = petOwner.value;
        }

        let adoptionSectionElement = document.getElementById('adoption');
        let ulElement = adoptionSectionElement.children[1];
        
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        
        let strongName = document.createElement('strong');
        strongName.textContent = petName;
        let strongYear = document.createElement('strong');
        strongYear.textContent = petAge;
        let strongKind = document.createElement('strong');
        strongKind.textContent = petKind;
        
        pElement.appendChild(strongName);
        pElement.innerHTML+=' is a ';
        pElement.appendChild(strongYear);
        pElement.innerHTML+= ' year old ';
        pElement.appendChild(strongKind);
       
        let spanElement = document.createElement('span');
        spanElement.textContent = `Owner: ${petOwner}`;
        let buttonElement = document.createElement('button');
        buttonElement.textContent = "Contact with owner";
        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);   
        ulElement.appendChild(liElement);

        buttonElement.addEventListener('click', writeName);

        function writeName(){
            let parent = buttonElement.parentNode;
            parent.removeChild(buttonElement);
            
            let inputElement = document.createElement('input');
            inputElement.placeholder ="Enter your names";
            let divelement = document.createElement('div');
            let newButton = document.createElement('button');
            newButton.textContent = "Yes! I take it!";
           
            
            divelement.appendChild(inputElement);
            divelement.appendChild(newButton);
           
           parent.appendChild(divelement);
            newButton.addEventListener('click', buy)


            function buy(){
                let parent = newButton.parentNode.parentNode;
                let adoptedElement = document.getElementById('adopted');
                let UlAdopted = adoptedElement.children[1];
                
                if(inputElement.value===''||inputElement.value===" "){
                    window.alert('name must be filled')
                    return
            }else{
                parent.removeChild(divelement);
                let span = document.querySelector('span');
                span.textContent = "New Owner: "+inputElement.value;
                let button = document.createElement('button');
                button.textContent= 'Checked';
                UlAdopted.appendChild(parent);
                parent.appendChild(button);
               

                button.addEventListener('click', deleteElement)
                
                function deleteElement(){
                    let elementToRemove=  button.parentNode;
                    let parentElement = button.parentNode.parentNode;
                    parentElement.removeChild(elementToRemove)
                }
            }
            
            }


            
        }

        elementParent.children[0].value="";
        elementParent.children[1].value="";
        elementParent.children[2].value="";
        elementParent.children[3].value='';
        
    }


    
}

