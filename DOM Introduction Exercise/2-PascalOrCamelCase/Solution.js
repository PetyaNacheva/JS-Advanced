function solve() {
  let tesxtContent = document.getElementById('text').value;
  let nameConv = document.getElementById("naming-convention").value;
  let result = '';
  let toConvert=tesxtContent.split(" ");
  switch(nameConv){
    case 'Camel Case':
      result+=toConvert[0];
      for (let i = 1; i < toConvert.length; i++) {
            let begin = toConvert[i].charAt(0).toUpperCase();
            let wnd = toConvert[i].slice(1);
            let end = begin+wnd.toLowerCase();
              result+=end;
      }
      break;
      case 'Pascal Case':
        for (let i = 0; i < toConvert.length; i++) {
          let begin = toConvert[i].charAt(0).toUpperCase();
          let wnd = toConvert[i].slice(1);
          let end = begin+wnd.toLowerCase();
            result+=end;
        }
        break;
        default: result = "Error!";
        break;
  }
   document.getElementById("result").textContent=result;
 
}
