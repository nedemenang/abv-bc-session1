
function Animal(name) {
   this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;
}

function Mammal(name, hasHair) {
    Animal.call(this, name);

    this.hasHair = hasHair;
}

Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.constructor = Mammal;

Mammal.prototype.getHasHair = function() {
    return this.hasHair;
}

function Dog(name, breed) {
    Mammal.call(this, name, true);

    this.breed = breed;
}

function Human(name, race){
  Mammal.call(this, name, true)
  
  this.race = race;
}

Dog.prototype = Object.create(Mammal.prototype);
Human.prototype = Object.create(Mammal.prototype);



Dog.prototype.constructor = Dog;
Human.prototype.constructor = Human;

Dog.prototype.getBreed = function() {
    return this.breed;
}

Dog.prototype.bark = function() {
    return "wo wo wo";
}

Human.prototype.getRace = function() {
  return this.race;
}

Human.prototype.sayHi = function(){
  return "Hi"
}

let nina = new Human('Nina', 'African');
let bingo = new Dog('Bingo', 'Mongrel')

nina.sayHi();  
//nina.getHasHair();
bingo.bark();
 
//nina.getHasHair();
//bingo.getBreed();
