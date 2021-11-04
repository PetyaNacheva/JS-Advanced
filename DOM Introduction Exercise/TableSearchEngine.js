function solve(){
    document.getElementById('searchBtn').addEventListener('click', onClick);
    let rows = document.getElementsByTagName('tr');

    function onClick(){
        let inputElement = document.getElementById('searchField').value.toLowerCase();

        for (const row of rows) {
            if(row.textContent.toLocaleLowerCase().includes(inputElement)){
                row.setAttribute('class', 'select');
            }else{
                row.removeAttribute('class');
            }
        }
    }
  
    document.getElementById('searchField').value = '';

}
