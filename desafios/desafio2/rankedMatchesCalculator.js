const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateRank(balance) {
  switch (true) {
    case balance < 10:
      return "Ferro";
    case balance <= 20:
      return "Bronze";
    case balance <= 50:
      return "Prata";
    case balance <= 80:
      return "Ouro";
    case balance <= 90:
      return "Diamante";
    case balance <= 100:
      return "Lendário";
    case balance > 100:
      return "Imortal";
    default:
      return "Comece a jogar para saber seu rank";
  }
}

function calculateRankedMatches(wins, losses) {
  const balance = wins - losses;
  const rank = calculateRank(balance);

  return `O Herói tem de saldo de ${balance} está no nível de ${rank}`;
}

rl.question("Enter number of wins: ", (wins) => {
  rl.question("Enter number of losses: ", (losses) => {
    console.log(calculateRankedMatches(wins, losses));
    rl.close();
  });
});
