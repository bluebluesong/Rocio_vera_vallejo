document.getElementById("finalizar").onclick=function(){
  alert("Hola")
}

document.getElementById("comenzar").onclick=function(){
 document.getElementById("root").style.display="block";
 
 document.getElementById("bienvenida").style.display="none";
 document.getElementById("velo").style.display="none";

 var nombre=document.getElementById("nombre").value;
 document.getElementById("usuario").innerHTML+=nombre;
}











