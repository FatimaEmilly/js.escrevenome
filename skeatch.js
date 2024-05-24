// fantasia, aventura, drama


// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura 
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama 
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicletas, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
 campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura =createCheckbox("Gosta de aventura?");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  background("white");
  fill(color(76, 0, 115));
  textAlign (CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if (idade >= 14) {
     return "o menino que descobriu o vento"
    }else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aravanhaverso";
        }else {
          return"Ladrões de bicicleta";
        }
    
    }else{
      
    }
      if(gostaDeFantasia) {
      return "As aventuras pi"
    } else{
      return "depois da chuva";
    }
  
    }
  } else {
    if(gostaDeFantasia) {
       return "A viagem do chihiro";
      } else{
        return "O feitiço do tempo";
      }
    }
   
  } 








