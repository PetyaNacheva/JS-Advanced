function toggle() {
    let buttonElement = document.querySelector('.button');
    let elementText = document.getElementById('extra');
    if(buttonElement.textContent=='More'){
    elementText.style.display = 'block';
    buttonElement.textContent = "Less";
}else{
    elementText.style.display = 'none';
    buttonElement.textContent = 'More';
    
}


}
