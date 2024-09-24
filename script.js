let elementos=document.getElementsByClassName("miclase")
for(let i = 0; i < elementos.length; i++){
elementos[i].style.color="red";
}

let elemento=document.getElementsByClassName("miElemento")
for(let i = 0; i < elemento.length; i++){
elemento[i].style.color="#ffff";
elemento[i].style.background="black";
elemento[i].style.border="5px solid green"
elemento[i].style.borderRadius="10px"
elemento[i].style.maxWidth="200px"
elemento[i].style.margin="15px auto"
elemento[i].style.padding="15px"
elemento[i].style.textAlign="center"

}