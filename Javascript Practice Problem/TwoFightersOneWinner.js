function declareWinner(fighter1, fighter2, firstAttacker){
if(fighter1.toString() === firstAttacker){
    while(fighter1.health > 0 || fighter2.health > 0){
fighter2.health -= fighter1.damagePerAttack
fighter1.health -= fighter2.damagePerAttack 


if(fighter2.health <= 0){
    return fighter1.toString()
}
if(fighter1.health <= 0){
    return fighter2.toString()
}
}
}
else{
while(fighter1.health > 0 || fighter2.health > 0){
    fighter1.health -= fighter2.damagePerAttack
    fighter2.health -= fighter1.damagePerAttack 
    if(fighter1.health <= 0){
        return fighter2.toString()
    }
    if(fighter2.health <= 0){
        return fighter1.toString()
    }
}
}
}

function method1(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    } else {
      return firstAttacker;
    }
  }

  function method2(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      fighter1.health -= fighter2.damagePerAttack;
    }
    
    if (fighter1.health <= 0 && fighter2.health <= 0)
      return firstAttacker;
    else if (fighter1.health <= 0)
      return fighter2.name;
    else
      return fighter1.name;
  }

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

console.log(method2(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"))