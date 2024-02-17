let nome = "João";
let xp = 1000;
let nivel = "";

switch (xp <= 1000) {
    case xp <= 1000: 
        nivel = "Ferro";
        break;

    case xp >= 1001 && xp <= 2000 === true: 
        nivel = "Bronze";
        break;

    case xp >= 2001 && xp <= 5000 === true: 
        nivel = "Prata";
        break;

    case xp >= 6001 && xp <= 7000 === true: 
        nivel = "Ouro";
        break;

    case xp >= 7001 && xp <= 8000 === true: 
        nivel = "Platina";
        break;

    case xp >= 8001 && xp <= 9000 === true: 
        nivel = "Ascendente";
        break;

    case xp >= 9001 && xp <= 10000 === true: 
        nivel = "Imortal";
        break;

    case xp >= 10001: 
        nivel = "Radiante";
        break;
        
}

console.log("O herói " + nome + " está no nível: " + nivel)