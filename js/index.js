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

//  const discount=firstTotal*0.02;
// //  const discountPrice=document.getElementById('discount').innerText=total;
// const totalGrid=firstTotal-discount
// const gridTotal=document.getElementById('Total-grid').innerText=totalGrid;

}
function makePar(target){
    document.getElementById('make-btn')
    
}

// document.getElementById('make-btn').addEventListener('click',function(){
// if(total>200){
//     removeattribute ("disabled")
//     {
//         // else{
//         //     setAttribute ("disabled" "true")};
//         // }
        
// }
// })

