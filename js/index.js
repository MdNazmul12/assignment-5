let total=0;
function clickHandler(target){
    const selectedItemContainer=document.getElementById('selected-item');

const itemName=target.parentNode.childNodes[3].innerText;
const li = document.createElement("li");
li.innerText=itemName;
selectedItemContainer.appendChild(li)

const price=target.parentNode.childNodes[5].innerText.split(" ")[0]
total=parseFloat(total)+parseFloat(price);
const firstTotal=document.getElementById('Total').innerText=total;
}