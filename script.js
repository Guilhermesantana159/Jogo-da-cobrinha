var canvas = document.getElementById("jogo")
var tela = canvas.getContext("2d")
var hor = ver = 10
var veloh = 5
var velov = 0
var calda = 2
var rastro = [] 
var estado = "horizontal"
var posvm = Math.floor(Math.random()*29)*5
var poshm = Math.floor(Math.random()*58)*5
var pont = 5


var nome = window.prompt("Bem vindo ao jogo da cobrinha digite o seu nome:")
document.getElementById("nome").innerHTML = nome

addEventListener("keydown", function(event){
    let teclas = event.key
    if(teclas == "ArrowLeft" && estado =="vertical"){
        veloh = -5
        velov = 0
        estado = "horizontal"
    }
    if(teclas == "ArrowRight" && estado =="vertical"){
        veloh = 5
        velov = 0
        estado = "horizontal"
    }
    if(teclas == "ArrowUp" && estado =="horizontal"){
        veloh = 0
        velov = -5
        estado = "vertical"
    }
    if(teclas == "ArrowDown" && estado =="horizontal"){
        veloh = 0
        velov = 5
        estado = "vertical"
    }
})

setInterval(function jogo(){ 
    tela.fillStyle = "black";
    tela.fillRect(0, 0, 735, 325);
    tela.fillStyle = "red";
    tela.fillRect(poshm, posvm, 5, 5);
    hor += veloh
    ver += velov
    tela.fillStyle = "green";
    for(let i = 0;i < rastro.length; i++){
        tela.fillRect(rastro[i].hor ,rastro[i].ver, 5, 5);
        if(rastro[i].hor == hor && rastro[i].ver == ver){
            rastro = []
            veloh = velov = 0
            tela.font = "30pt Comic Sans MS";
            tela.fillStyle = "green";
            tela.fillText("Você Perdeu!!",30,85);
        }
    }
    rastro.push({hor:hor,ver:ver})

    while(rastro.length > calda){
        rastro.shift()
    }
    if((hor == -5 || hor == 300 || ver == -5 || ver == 150)){
        tela.fillRect(hor + 5, ver + 5, 5, 5);
        veloh = velov = 0
    }
    if(hor == poshm && ver == posvm){
        calda ++
        pont = pont + 5
        document.getElementById("pont").innerHTML = pont
        posvm = Math.floor(Math.random()*29)*5
        poshm = Math.floor(Math.random()*58)*5
        tela.fillStyle = "red"
        tela.fillRect(poshm,posvm,5,5)

    }
},180)














