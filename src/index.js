let nome = "João";
let xp = 10001;
let nivel = "";

switch (true) {

  case xp <= 1000:
    nivel = "Ferro";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 1001 && xp <= 2000:
    nivel = "Bronze";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 2001 && xp <= 5000:
    nivel = "Prata";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 6001 && xp <= 7000:
    nivel = "Ouro";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 7001 && xp <= 8000:
    nivel = "Platina";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 8001 && xp <= 9000:
    nivel = "Ascendente";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 9001 && xp <= 10000:
    nivel = "Imortal";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

  case xp >= 10001:
    nivel = "Radiante";
    console.log("O herói " + nome + " está no nível: " + nivel);
    break;

}