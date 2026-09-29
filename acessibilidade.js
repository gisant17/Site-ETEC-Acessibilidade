function aplicarAcessibilidade(){

let opcao = document.getElementById("acess").value;

if(opcao === "fonte"){
document.body.style.fontSize = "22px";
}

else if(opcao === "contraste"){
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
}

else if(opcao === "links"){
let links = document.querySelectorAll("a");
links.forEach(function(link){
link.style.backgroundColor = "yellow";
link.style.color = "black";
});
}

else if(opcao === "legivel"){
document.body.style.fontFamily = "Verdana, Arial, sans-serif";
}

else if(opcao === "none"){
location.reload();
}

}