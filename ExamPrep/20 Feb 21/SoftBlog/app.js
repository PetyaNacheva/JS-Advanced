function solve(){
  let buttonCreate = document.querySelector('button.btn.create');
  buttonCreate.addEventListener('click', createFunction);

  function createFunction(e){
     e.preventDefault();

     let autorElement = document.getElementById("creator").value;
     let titleElement = document.getElementById("title").value;
     let categoryElement = document.getElementById('category').value;
     let contentPost = document.getElementById('content').value;

      let articleElement = document.createElement('article');
      let headElement = document.createElement('h1');
      headElement.textContent = titleElement;

      let pElementCategory= document.createElement('p');
      pElementCategory.textContent = "Category:";

      let strongElement = document.createElement('strong');
      strongElement.textContent = categoryElement;

      pElementCategory.appendChild(strongElement);

      let pElementCreator = document.createElement('p');
      pElementCreator.textContent = "Creator:";

      let strongElementCreator = document.createElement('strong');
      strongElementCreator.textContent = autorElement;

      pElementCreator.appendChild(strongElementCreator);

      let pElementContent = document.createElement('p');
      pElementContent.textContent = contentPost;

      let divElement = document.createElement('div');
      divElement.className = "buttons";

      let deleteButon = document.createElement('button');
      deleteButon.className = "btn delete";
      deleteButon.textContent = "Delete";

      let archiveButton = document.createElement('button');
      archiveButton.className = "btn archive";
      archiveButton.textContent = "Archive";

      divElement.appendChild(deleteButon);
      divElement.appendChild(archiveButton);

      articleElement.appendChild(headElement);
      articleElement.appendChild(pElementCategory);
      articleElement.appendChild(pElementCreator);
      articleElement.appendChild(pElementContent);
      articleElement.appendChild(divElement);

      let sectionElement = document.querySelector('main section');
      sectionElement.appendChild(articleElement); 

      deleteButon.addEventListener('click', actionDelete);
      archiveButton.addEventListener('click',actionArchive);


    document.getElementById("creator").value = "";
     document.getElementById("title").value = "";
     document.getElementById('category').value= "";
     document.getElementById('content').value = "";
    
    }

      function actionDelete(e){
         let elementToDelete = e.target.parentNode.parentNode;
         elementToDelete.remove();
         elementToDelete.remove();
      }

      function actionArchive(e){
         let title= e.target.parentNode.parentNode;
         let titleElementContent = title.querySelector('h1').textContent;
         let olElement = document.querySelector('aside section ol');
         let liElement = document.createElement('li');
         liElement.textContent = titleElementContent;
   
         olElement.appendChild(liElement);
         let collection = Array.from(olElement.children)
         collection.sort((a,b)=>a.textContent.localeCompare(b.textContent));
         
         for (const element of collection) {
            olElement.appendChild(element)
         }
         title.remove();
      }

     
  }
