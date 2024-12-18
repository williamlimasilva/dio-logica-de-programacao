const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Hero {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "atacou";
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

async function main() {
  console.log("Selecione o tipo de herói:");
  console.log("1 - Mago");
  console.log("2 - Guerreiro");
  console.log("3 - Monge");
  console.log("4 - Ninja");

  const tipoMap = {
    1: "mago",
    2: "guerreiro",
    3: "monge",
    4: "ninja",
  };

  const tipo = await new Promise((resolve) => {
    rl.question("Digite o número do tipo de herói: ", (answer) => {
      resolve(tipoMap[answer] || "desconhecido");
    });
  });

  const nome = await new Promise((resolve) => {
    rl.question("Digite o nome do herói: ", resolve);
  });

  const heroi = new Hero(nome, tipo);
  heroi.atacar();
  rl.close();
}

main();
