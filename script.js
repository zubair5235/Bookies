var TileContainer = document.getElementById("tileContainer");
var OverLay = document.getElementById("overLay");
var PopUp = document.getElementById("popup");
var BookName = document.getElementById("bookName");
var AuthorName = document.getElementById("authorName");
var Description = document.getElementById("bookDetails");
var AddDetailsButton = document.getElementById("addDetails-btn");
var CancelButton = document.getElementById("cancelButton");
var AddButton = document.getElementById("addButton");
var LoadingPage = document.getElementById("loadingPage");

AddButton.addEventListener('click',function(event){
    event.preventDefault();
    OverLay.style.display = "block";
    PopUp.style.display = "block";
})

AddDetailsButton.addEventListener('click',function(event){
    event.preventDefault();
    var Tile = document.createElement("div");
    Tile.innerHTML = `<h2>${BookName.value}</h2><h3>${AuthorName.value}</h3><p>${Description.value}</p><button onclick="DeleteDetails(event)">Delete</button>`;
    TileContainer.append(Tile);
    OverLay.style.display = "none";
    PopUp.style.display = "none";
})

CancelButton.addEventListener('click',function(event){
    event.preventDefault();
    OverLay.style.display = "none";
    PopUp.style.display = "none";
})

function DeleteDetails(event){
    event.target.parentElement.remove();
}

window.addEventListener('load',()=>{
    LoadingPage.style.visibility = "hidden";
});
