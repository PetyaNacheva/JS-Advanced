function generateReport() {
   let checkBox = document.querySelectorAll('table>thead>tr>th>input');
   let rows = document.querySelectorAll('tbody>tr');
   let output = [];
    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        let values = Array.from(rows[i].getElementsByTagName('td')).map(el=>el.textContent);
        for (let y = 0; y < checkBox.length; y++) {
            if(checkBox[y].checked){
                obj[checkBox[y].name] = values[y];
            }
            
        }
        output.push(obj);
    }
    document.getElementById('output').value=JSON.stringify(output)
}
