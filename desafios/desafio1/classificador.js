const readline = require("readline");

// Função para classificar o nível do herói
function classificarNivel(xp) {
  switch (true) {
    case xp < 1000:
      return "Ferro";
    case xp <= 2000:
      return "Bronze";
    case xp <= 5000:
      return "Prata";
    case xp <= 7000:
      return "Ouro";
    case xp <= 8000:
      return "Platina";
    case xp <= 9000:
      return "Ascendente";
    case xp <= 10000:
      return "Imortal";
    default:
      return "Radiante";
  }
}

// Criando interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para solicitar o nome do herói
function perguntarNomeHeroi() {
  return new Promise((resolve) => {
    rl.question("Digite o nome do herói: ", (nomeHeroi) => {
      resolve(nomeHeroi);
    });
  });
}

// Função para solicitar a XP do herói
function perguntarXPHeroi() {
  return new Promise((resolve) => {
    rl.question("Digite a XP do herói: ", (xpHeroi) => {
      resolve(parseInt(xpHeroi));
    });
  });
}

// Função principal assíncrona
async function main() {
  try {
    // Solicitar nome do herói
    const nomeHeroi = await perguntarNomeHeroi();

    // Solicitar XP do herói
    const xpHeroi = await perguntarXPHeroi();

    // Validar entrada
    if (!nomeHeroi || isNaN(xpHeroi)) {
      console.log("Entrada inválida. Por favor, forneça um nome e uma XP válidos.");
      rl.close();
      return;
    }

    // Classificar nível do herói
    const nivel = classificarNivel(xpHeroi);

    // Exibir resultado
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);

    // Fechar interface de leitura
    rl.close();
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    rl.close();
  }
}

// Executar o programa
main();
