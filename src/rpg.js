// Создание объектов игрока и противника
const player = {
    name: "Игрок",
    health: 100,
    strength: 10,
    defense: 5,
    speed: 7,
  };
  
  const enemy = {
    name: "Противник",
    health: 100,
    strength: 8,
    defense: 8,
    speed: 5,
  };
  
  // Определение функций для атаки и защиты
  function attack(attacker, defender) {
    const damage = Math.max(0, attacker.strength - defender.defense);
    defender.health = Math.max(0, defender.health - damage);
    log(`${attacker.name} атакует ${defender.name} и наносит ${damage} урона`);
  }
  
  function defend(defender) {
    defender.defense *= 2;
    log(`${defender.name} защищается`);
    setTimeout(() => {
      player.defense /= 2;
      log(`${player.name} закончил защиту`);
      updateStats();
    }, 2000);
  }
  
  // Определение функции для вывода сообщений в журнал боя
  function log(message) {
    const battleLog = document.getElementById("battle-log");
    const p = document.createElement("p");
    p.innerText = message;
    battleLog.appendChild(p);
    battleLog.scrollTop = battleLog.scrollHeight;
  }
  
  // Получение ссылок на элементы страницы
  const playerHealth = document.getElementById("player-health");
  const playerStrength = document.getElementById("player-strength");
  const playerDefense = document.getElementById("player-defense");
  const enemyHealth = document.getElementById("enemy-health");
  // Определение функции для обновления статистики игрока
function updateStats() {
    playerHealth.innerText = player.health;
    playerStrength.innerText = player.strength;
    playerDefense.innerText = player.defense;
    enemyHealth.innerText = enemy.health;
    }
    
    // Определение функции для начала боя
    function startBattle() {
        log(`Бой начался! ${player.name} против ${enemy.name}`);

    updateStats();
    // Цикл боя до тех пор, пока здоровье одного из игроков не достигнет 0
    while (player.health > 0 && enemy.health > 0) {
    // Определение, кто атакует первым, на основе скорости
    const firstAttacker = player.speed >= enemy.speed ? player : enemy;
    const secondAttacker = firstAttacker === player ? enemy : player;
    // Атака первого игрока
attack(firstAttacker, secondAttacker);
// Если второй игрок еще жив, он атакует в ответ
if (secondAttacker.health > 0) {
  attack(secondAttacker, firstAttacker);
}
}

// Определение победителя и вывод сообщения в журнал боя
const winner = player.health > 0 ? player : enemy;
const loser = winner === player ? enemy : player;
log(`${winner.name} победил!`);

log(`${loser.name} проиграл.`);
}

// Добавление обработчика события на кнопку начала боя
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startBattle);