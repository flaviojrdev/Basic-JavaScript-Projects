const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damageMonster = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damageMonster;

    const damagePlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= damagePlayer;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

function strongAttackHandler() {
    const damageMonster = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damageMonster;

    const damagePlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= damagePlayer;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)