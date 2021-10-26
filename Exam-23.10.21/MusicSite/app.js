window.addEventListener('load', solve);

function solve() {

    let genreElement = document.getElementById('genre');
    let nameSongelement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');
    let addBtnElement = document.getElementById('add-btn');
    let allClassContainerelement = document.querySelector('.all-hits-container');
    let savedContainerElement = document.querySelector('.saved-container')

    addBtnElement.addEventListener('click', addFunction);

    function addFunction(e){
        e.preventDefault();
        if (genreElement.value === '' || nameSongelement.value === '' || authorElement.value === '' || dateElement.value === '') {
            return;
        }

        let divElement = document.createElement('div');
        divElement.className="hits-info";

        let imgElement = document.createElement('img');
     imgElement.src="./static/img/img.png";

        let h2GenreElement = document.createElement('h2');
        h2GenreElement.textContent="Genre: "+genreElement.value;

        let h2NameElement = document.createElement('h2');
        h2NameElement.textContent="Name: "+nameSongelement.value;

        let h2AuthorElement = document.createElement('h2');
        h2AuthorElement.textContent= 'Author: '+authorElement.value;

        let h3DateElement = document.createElement('h3');
        h3DateElement.textContent = 'Date: '+dateElement.value;

        let butnSave=document.createElement('button');
        butnSave.className = "save-btn";
        butnSave.textContent="Save song";

        butnSave.addEventListener('click', saveSong)

        let butnLike=document.createElement('button');
        butnLike.className = "like-btn";
        butnLike.textContent="Like song";

        butnLike.addEventListener('click', like)

        let butnDelete=document.createElement('button');
        butnDelete.className = "delete-btn";
        butnDelete.textContent="Delete";

        butnDelete.addEventListener('click', deleteFunction)

        divElement.appendChild(imgElement);
        divElement.appendChild(h2GenreElement);
        divElement.appendChild(h2NameElement);
        divElement.appendChild(h2AuthorElement);
        divElement.appendChild(h3DateElement);
        divElement.appendChild(butnSave);
        divElement.appendChild(butnLike);
        divElement.appendChild(butnDelete);
        allClassContainerelement.appendChild(divElement);

        document.getElementById('genre').value=""
        document.getElementById('name').value=''
        document.getElementById('author').value=''
        document.getElementById('date').value=''

        function like(){
            let totalLikesElement = document.querySelector(".likes p");
            let totalLikes = Number(totalLikesElement.textContent.split(": ")[1])+1;
            totalLikesElement.textContent= 'Total Likes: '+totalLikes;
            butnLike.disabled=true;
        }

        function saveSong(){
           divElement.removeChild(butnSave);
           divElement.removeChild(butnLike);
            savedContainerElement.appendChild(divElement);
           
        }

        function deleteFunction(e){
            let divParent = e.target.parentNode.parentNode;
           divParent.removeChild(divElement);
        }

    }

  

}
