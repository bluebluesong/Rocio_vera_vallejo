document.getElementById("finalizar").onclick=function(){
  alert("Hola")
}

document.getElementById("comenzar1").onclick=function(){
 document.getElementById("quizz1").style.display="flex";
 document.getElementById("quizz2").style.display="none";
 
 
 document.getElementById("bienvenida").style.display="none";
 document.getElementById("velo").style.display="none";

 var nombre=document.getElementById("nombre").value;
 document.getElementById("usuario").innerHTML+=nombre;
}

document.getElementById("comenzar2").onclick=function(){
  document.getElementById("quizz2").style.display="flex";
  document.getElementById("quizz1").style.display="none";
  
  
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("velo").style.display="none";
 
  var nombre=document.getElementById("nombre").value;
  document.getElementById("usuario").innerHTML+=nombre;
 }












