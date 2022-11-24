var impdimp
var impdimpimagem
var plantinha
var pedrinha, pedrinhaimagem
var canvas
var pontos = 0
var tempo = 0;

function preload() {
  impdimpimagem = loadImage("o protagonista(1).png")
  plantinha = loadImage("moita.png");
  pedrinhaimagem = loadImage("pedra.png")
}


function setup() {
  canvas = createCanvas(1000, 700);

  pedrinha = createSprite(mouseX, mouseY, 50, 50)
  pedrinha.addImage(pedrinhaimagem);
  pedrinha.scale = 0.15

  setInterval(controlartempo, 1000);

}

function draw() {
  background(30);
  criarimpdimp()

  fill("white");
  textSize(25);
  
  text("Tempo: " + tempo + " segundos", width -250,50);
  text("Pontuação: " + pontos, width - 250, 100);

  image(plantinha, 10, 10, 200, 200)
  image(plantinha, 10, 210, 200, 200)
  image(plantinha, 10, 410, 200, 200)
  image(plantinha, 210, 10, 200, 200)
  image(plantinha, 210, 210, 200, 200)
  image(plantinha, 210, 410, 200, 200)
  image(plantinha, 410, 10, 200, 200)
  image(plantinha, 410, 210, 200, 200)
  image(plantinha, 410, 410, 200, 200)
  

  pedrinha.x = mouseX;
  pedrinha.y = mouseY;

  if (mousePressedOver(impdimp)) {
    destruirimpdimp();
    pedrinha.visible = false;
    setTimeout(voltarPedra, 500);
  }
  

  if(tempo <= 10){
    drawSprites();
  } else {
    text("Fim de jogo! Você fez " + pontos + " pontos!", 100,100)
  }


}
function criarimpdimp() {
  if (frameCount % 30 === 0) {
    var x = [100, 300, 500]
    var y = [82, 282, 482]
    var poX = random(x)
    var poY = random(y)
    impdimp = createSprite(poX, poY)
    impdimp.addImage(impdimpimagem)
    impdimp.lifetime = 30

    pedrinha.depth = impdimp.depth + 1;
  }
}
function destruirimpdimp() {
  
  pontos += 10;
  impdimp.destroy()
}

function voltarPedra() {
  pedrinha.visible = true;
}

function controlartempo(){

  if (tempo <60) {
    tempo++;
  }
  
}

