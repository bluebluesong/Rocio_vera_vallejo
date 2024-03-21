var isQuizz1=false



document.getElementById("finalizar").onclick=()=>{
 if(isQuizz1){
  var formulario=document.getElementById("quizz1")
  var pregunta1=formulario.querySelector("input[name='pregunta1']:checked").value
  var pregunta2=formulario.querySelector("input[name='pregunta2']:checked").value
  var pregunta3=formulario.querySelector("input[name='pregunta3']:checked").value
  var pregunta4=formulario.querySelector("input[name='pregunta4']:checked").value
  var pregunta5=formulario.querySelector("input[name='pregunta5']:checked").value
  var pregunta6=formulario.querySelector("input[name='pregunta6']:checked").value

  var magoOscuro=0
  var magoBlanco=0
  var magoVerde=0
  if(pregunta1=='celeste')magoBlanco+=1
  if(pregunta2=='meditar')magoBlanco+=1
  if(pregunta3=='montañas')magoBlanco+=1
  if(pregunta4=='cuarzo')magoBlanco+=1
  if(pregunta5=='decorada')magoBlanco+=1
  if(pregunta6=='perro')magoBlanco+=1

  if(pregunta1=='negro')magoOscuro+=1
  if(pregunta2=='averiguar')magoOscuro+=1
  if(pregunta3=='casa')magoOscuro+=1
  if(pregunta4=='ojo_turco')magoOscuro+=1
  if(pregunta5=='exclusiva')magoOscuro+=1
  if(pregunta6=='ninguno')magoOscuro+=1

  if(pregunta1=='morado')magoVerde+=1
  if(pregunta2=='ayudar')magoVerde+=1
  if(pregunta3=='bosque')magoVerde+=1
  if(pregunta4=='inciensos')magoVerde+=1
  if(pregunta5=='casabosque')magoVerde+=1
  if(pregunta6=='huron')magoVerde+=1

  if (magoOscuro > magoBlanco && magoOscuro > magoVerde) {
    alert("Tienes magia Oscura");
  } else if (magoBlanco > magoOscuro && magoBlanco > magoVerde) {
    alert("Tienes magia blanca");
  } else if (magoVerde > magoOscuro && magoVerde > magoBlanco) {
    alert("Tienes magia verde");
  } else {
    alert("Tu magia es única y no puede ser definida por una sola categoría");
  }

  

  console.log(magoBlanco,magoOscuro,magoVerde)
 }
}

document.getElementById("comenzar1").onclick=()=>{
 document.getElementById("quizz1").style.display="flex";
 document.getElementById("quizz2").style.display="none";
 isQuizz1=true
 
 
 document.getElementById("bienvenida").style.display="none";
 document.getElementById("velo").style.display="none";

 var nombre=document.getElementById("nombre").value;
 document.getElementById("usuario").innerHTML+=nombre;
}

document.getElementById("comenzar2").onclick=()=>{
  document.getElementById("quizz2").style.display="flex";
  document.getElementById("quizz1").style.display="none";
  
  
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("velo").style.display="none";
 
  var nombre=document.getElementById("nombre").value;
  document.getElementById("usuario").innerHTML+=nombre;
 }












