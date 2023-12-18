let arr = ['Hello', 'Oranges', 'Age'];
let maxStr = arr[0];
for(let i =0; i < arr.length; i++){
    if(arr[i] > maxStr)
        maxStr = arr[i];
}    
let Arr = maxStr.split('');
console.log(Arr);

marker('Hello', 'blue', 28)

function marker(text, color, num){
    document.write(`<div style="color: ${color}; font-family: 'Comic Sans MS';`+ 
    `font-size: ${num}px">${text}</div>`);
}      

var pathImages = ['images/Bear.png', 'images/Wolf.png', 'images/Girl.png'];
placeImages(pathImages);


function placeImages(arrImages){
    var imageParent = document.getElementById("box");
    for(let i=0; i<arrImages.length; i++){
        imageParent.innerHTML += `<img src="${arrImages[i]}" width=30% height=30%>`;
    }
}   