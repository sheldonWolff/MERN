class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    };
    sayName() {
        console.log(this.name);
    };
    showStats() {
        console.log(this.name, this.health, this.speed, this.strength);
    };
    drinkSake() {
        this.health += 10;
    };
};
class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name, 200, 10, 10, wisdom=10)
    };
    speakWisdom() {
        const sake = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    };
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
