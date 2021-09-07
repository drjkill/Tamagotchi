"use strict";

class Tamagotchi {

    constructor(name, hunger, mood, fatigue) {
        this.name    = prompt("Wie soll Dein Tamagotchi heißen?");
        this.hunger  = hunger  = 0
        this.mood    = mood    = 0
        this.fatigue = fatigue = 0
    }
    getname () {
        return this.name
    }
    play (playing) {
        if(this.hunger > 5) {
        this.hunger  += 2
        this.mood    += 2
        this.fatigue += 3
        }
        return `${this.name} is playing`
    } 
    eat  (eating) {
        if(this.fatigue > 5){
        this.hunger  -= 3
        this.fatigue += 2 
        } 
        return `${this.name} is eating`
    }
    sleep(sleeping) {
        if(this.hunger > 5) {
        this.hunger  += 1
        this.mood    += 1
        this.fatigue += 0
        }
        else {
            this.hunger  += 1
            this.mood    -= 1
            this.fatigue += 0
        }
        return `${this.name} is sleeping`
    }
    pet  (petting) {
        this.hunger  += 1
        this.mood    += 1
        return `petting ${this.name}`
    } 
    getStatus() {
        if(this.hunger < 5) {
          return "i am hungry" 
        }
        if(this.fatigue < 5) {
            return "i am tired" 
         }
        if(this.mood < 5) {
            return "i am happy" 
         }
         else {
            return " blahblahblah" 
         }

    }
}    
const my_tamagotchi = new Tamagotchi(name)

// Ausgabe in Konsole
// ===================
console.log("Hallo ich bin " + my_tamagotchi.getname())
console.log(my_tamagotchi.getStatus())
console.log(my_tamagotchi.eat())
console.log(my_tamagotchi.play())
console.log(my_tamagotchi.sleep())
console.log(my_tamagotchi.pet())
console.log(my_tamagotchi)

// Ausgabe auf Webseite
// =====================
alert("Hallo ich bin " + my_tamagotchi.getname())
alert(my_tamagotchi.getStatus())
alert(my_tamagotchi.eat())
alert(my_tamagotchi.play())
alert(my_tamagotchi.sleep())
alert(my_tamagotchi.pet())
alert(my_tamagotchi)