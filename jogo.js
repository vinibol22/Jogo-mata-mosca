var altura =0
var largura=0
var vidas=1
var tempo=5
var criaMoscaTempo=1500
var cliquei=0;

let clicados=JSON.parse(localStorage.getItem('clicados')) || [];
var level=window.location.search
level=level.replace("?","")

if(level==="normal"){
        var criaMoscaTempo=1500
} 
else if(level==="dificil")
{
        var criaMoscaTempo=1000
}
else if(level==="muitodificil")
{
        var criaMoscaTempo=750
}




function ajustarTamanhoPalcoJogo(){
        altura=window.innerHeight
        largura=window.innerWidth

        console.log(largura,altura)
}

ajustarTamanhoPalcoJogo()

var cronometro=setInterval(function(){
        tempo-=1
        if(tempo<0){
                clearInterval(cronometro)
                clearInterval(criaMosca)
                window.location.href="vitoria.html"
             
        }else{
                document.getElementById("cronometro").innerHTML=tempo
        }
  
},1000)
function posicaoRandomica(){

//remover mosquito caso anterior exista
if(document.getElementById("mosquito")){
document.getElementById("mosquito").remove()

if(vidas>3){
        window.location.href="game_over.html"
}
document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"

vidas++


}

var posicaoX=Math.floor(Math.random()*largura)-90
var posicaoY=Math.floor(Math.random()*altura)-90

posicaoX=posicaoX<0 ? 0:posicaoX
posicaoY=posicaoY<0 ? 0:posicaoY


console.log(posicaoX,posicaoY)



var mosquito=document.createElement("img")

mosquito.src="imagens/mosca.png"
mosquito.className=tamanhoAleatorio()+" "+ladoaleatorio()
mosquito.style.left=posicaoX+"px"
mosquito.style.top=posicaoY+"px"
mosquito.style.position="absolute"
mosquito.id="mosquito"
mosquito.onclick=function(){
        this.remove();    
        clicamos();
           
       //console.log(cliquei)

     
        
            
  
       
}

document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
        var classe=Math.floor(Math.random()*3)
        console.log(classe)

        if(classe===0){
                return "mosquito1"
        }
        if(classe===1){
                return "mosquito2"
        }
        if(classe===2){
                return "mosquito3"
        }

        


}

function ladoaleatorio(){
        var ladoRandom=Math.floor(Math.random()*2)
        console.log(ladoRandom)

        if(ladoRandom===0){
                return "ladoA"
        }
        if(ladoRandom===1){
                return "ladoB"
}
}

function clicamos(){

        ++cliquei;
         
        let clicaria=[];
        clicaria.push(JSON.stringify(cliquei)).src
        
        clicados.push(clicaria)
for(let way of clicados){
        
localStorage.setItem("clicacks",JSON.stringify(way))
}}