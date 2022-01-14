function solution() {
        let addButtonElement = document.querySelector('.card div button');
        
    addButtonElement.addEventListener('click',toAdd)
    
    
    function toAdd(){

        let inputElement= document.querySelector(".card div input").value;
        
        let liElement = document.createElement("li");
        liElement.className = "gift";
        liElement.textContent = inputElement;
        
        let buttonSend = document.createElement('button');
        buttonSend.className = "sendButton";
        buttonSend.textContent = "Send"

        let buttonDiscard = document.createElement('button');
        buttonDiscard.className = "discardButton";
        buttonDiscard.textContent = "Discard";

        liElement.appendChild(buttonSend);
        liElement.appendChild(buttonDiscard);

        let ulElement = document.querySelectorAll(".card ul")[0];
        ulElement.appendChild(liElement);
        let ulChildren = Array.from(ulElement.children);
        ulChildren.sort((a,b)=> a.textContent.localeCompare(b.textContent));
        for (const element of ulChildren) {
            ulElement.appendChild(element);
        }

        buttonSend.addEventListener('click',send);
        buttonDiscard.addEventListener('click',discard);

        function send(e){
            let liElement = e.target.parentNode;
            let buttons = Array.from(liElement.querySelectorAll('button'));
            for (const button of buttons) {
               liElement.removeChild(button);
              
            }
            let ulelementSendGifts = document.querySelectorAll(".card ul")[1];
            ulelementSendGifts.appendChild(liElement);
        }

        function discard(e){
            let liDiscardElement = e.target.parentNode;
            let buttons = Array.from(liDiscardElement.querySelectorAll('button'));
            for (const button of buttons) {
                liDiscardElement.removeChild(button);
              
            }
            let ulelementDiscardGifts = document.querySelectorAll(".card ul")[2];
            ulelementDiscardGifts.appendChild(liDiscardElement);
        }
        


        document.querySelector(".card div input").value = "";
    }

}