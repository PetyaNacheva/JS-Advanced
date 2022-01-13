function solve() {
    let divElements = document.querySelectorAll(".form-control")[3];
    let addButtonElement = divElements.querySelector('button');
    console.log(addButtonElement);
    addButtonElement.addEventListener('click', addFunction);

    function addFunction(e){
        e.preventDefault();
        let lectureNameElement = document.querySelector('input[name=lecture-name]');
        
        let dateElement = document.querySelector('input[name=lecture-date]');

        let moduleElement = document.querySelector('select[name=lecture-module]');
        
        if(!lectureNameElement.value){
            window.alert('lecture is empty')
            return
        }
        if(!dateElement.value){
            window.alert('date is empty')
            return
        }
        if(moduleElement.value=="Select module"){
            window.alert('module is empty')
            return
        }
        let textModule = moduleElement.value.toUpperCase();
        let moduleTagName = textModule+"-MODULE";
        let allDivElements = Array.from(document.querySelectorAll('h3'));
        let divElement;
        if(!allDivElements.includes(moduleTagName)){
            divElement = document.createElement('div');
            divElement.className = "module";
            let h3Element = document.createElement('h3');
            h3Element.textContent=textModule+"-MODULE";
            divElement.appendChild(h3Element);
        }else{
            divElement = allDivElements.find(x.textContent == moduleTagName).parentNode;
        }

        
        let ulElement = document.createElement('ul');
        let liElement = document.createElement('li');
        liElement.className="flex";

        let h4Element = document.createElement('h4');
        let h4text = lectureNameElement.value+ ' - ' + dateElement.value.split('-').join('/').split('T').join(' - ');
        h4Element.textContent = h4text;
        let buttonElement = document.createElement('button');
        buttonElement.className = "red";
        buttonElement.textContent = "DEL";
        liElement.appendChild(h4Element);
        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
        divElement.appendChild(ulElement);

        let divInSectionElement = document.querySelector('.modules');
        divInSectionElement.appendChild(divElement);

        buttonElement.addEventListener('click', deleteFunctoin);

        function deleteFunctoin(e){
            
            let li = e.target.parentNode;
            let ul = li.parentNode;
            let module = ul.parentNode;
    
            li.remove();
            if (ul.children.length === 0) {
                module.remove();
            }
    }
}
};