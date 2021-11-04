function search(){
    let ulElement = document.getElementsByTagName('li');
    let inputElement = document.getElementById('searchText').value.toLowerCase();
    let count =0;
 /* for (const town of ulElement) {
        if((town.textContent).toLocaleLowerCase().includes(inputElement.toLocaleLowerCase())){
            count++;
            town.style.fontWeight= 'bold';
            town.style.textDecoration= 'underline';
        } else {
            town.style.fontWeight= '';
            town.style.textDecoration= '';
        }
    }*/
for (let i = 0; i < ulElement.length; i++) {
        if(ulElement[i].textContent.toLocaleLowerCase().includes(inputElement)){
            count++;
            ulElement[i].style.fontWeight = 'bold';
            ulElement[i].style.textDecoration = 'underline';
        } else{
            ulElement[i].style.fontWeight = '';
            ulElement[i].style.textDecoration = '';
        }
        
    }
    let resultElement = document.getElementById('result');
    resultElement.textContent = `${count} matches found`;
    document.getElementById('searchText').value = '';

    
}
