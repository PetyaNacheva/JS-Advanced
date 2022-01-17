window.addEventListener('load', solution);

function solution() {
 let submitButtonElement = document.getElementById('submitBTN');
 submitButtonElement.addEventListener('click', solve);

 function solve(e){
  e.preventDefault();
  let fullNameElement = document.getElementById('fname');
  if(fullNameElement.value==''){
    window.alert('full name must be filled')
    return
  }else{
    fullNameElement=fullNameElement.value;
  }
  let emailElement = document.getElementById('email');
  if(emailElement.value==''){
    window.alert('email must be filled')
    return
  }else{
    emailElement=emailElement.value;
  }

  let phoneElement = document.getElementById('phone');
  let adressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');

  let ulElement = document.getElementById('infoPreview');
  let liNameElement = document.createElement('li');
  liNameElement.textContent = "Full Name: "+fullNameElement;
  let liMailElement = document.createElement('li');
  liMailElement.textContent = 'Email: '+emailElement;
  let liPhoneElement = document.createElement('li');
  liPhoneElement.textContent = 'Phone Number: '+ phoneElement.value;
  let liAdressElement = document.createElement('li');
  liAdressElement.textContent = "Adress: "+adressElement.value;
  let liPostCodeElement = document.createElement('li');
  liPostCodeElement.textContent = 'Postal Code: '+codeElement.value;

  ulElement.appendChild(liNameElement);
  ulElement.appendChild(liMailElement);
  ulElement.appendChild(liPhoneElement);
  ulElement.appendChild(liAdressElement);
  ulElement.appendChild(liPostCodeElement);
  e.target.disabled = true;

  let editButtonElement = document.getElementById('editBTN');
  editButtonElement.disabled= false;
  editButtonElement.addEventListener('click', edit)
  let continueButtonElement = document.getElementById('continueBTN');
  continueButtonElement.disabled = false;
  continueButtonElement.addEventListener('click', reserved)

  document.getElementById('fname').value="";
  document.getElementById('email').value="";
  phoneElement.value="";
  adressElement.value="";
  codeElement.value = "";

 
 }
 
 function edit(e){
  
  e.target.disabled="true";
  let continueButtonElement = document.getElementById('continueBTN');
  continueButtonElement.disabled ="true";
  

  let ul = document.getElementById('infoPreview');
  let ulElement =Array.from(ul.children);

  let fulName =ulElement[0].textContent;
 fulName = fulName.slice(11);
  let email = ulElement[1].textContent;
  email = email.slice(7);
  let phone = ulElement[2].textContent;
 phone = phone.slice(14)
  let adress = ulElement[3].textContent;
  adress = adress.slice(8)
  let postCode = ulElement[4].textContent;
  postCode = postCode.slice(13)

  let name =document.getElementById('fname')
  name.value = fulName;
  let mail = document.getElementById('email')
  mail.value = email;
  let phoneNumber = document.getElementById('phone')
  phoneNumber.value = Number(phone);
  let adres = document.getElementById('address');
  adres.value = adress;
  let post = document.getElementById('code');
  post.value = Number(postCode)


  let submitButton = document.getElementById('submitBTN');
  submitButton.disabled =false;
  console.log(ul)
  console.log(ulElement)
  ul.replaceChildren();
 }
 
 function reserved(){
  let h3TagElement = document.createElement('h3');
  h3TagElement.textContent = "Thank you for your reservation!";

  let divBlockElement = document.getElementById('block');
  divBlockElement.replaceChildren(h3TagElement)
 }
}

