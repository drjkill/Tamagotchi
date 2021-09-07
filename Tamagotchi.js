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
    play () {
        
        return `${this.name} is playing`
    } 
    eat  () {
        return `${this.name} is eating`
    }
    sleep() {
        return `${this.name} is sleeping`
    }
    pet  () {
        return `${this.name} is petting`
    } 
    getStatus() {
        if(this.hunger < 5) {
          return "i am hungry" 
        }
        if(this.fatigue < 5) {
            return "i am tired" 
         }
        if(this.mood > 5) {
            return "i am happy" 
         }
         else {
            return " blahblahblah" 
         }

    }
}    
const my_tamagotchi = new Tamagotchi(name)

alert("Hallo ich bin " + my_tamagotchi.getname())
alert(my_tamagotchi.getStatus())
alert(my_tamagotchi.eat())
alert(my_tamagotchi.play())
alert(my_tamagotchi.sleep())
alert(my_tamagotchi.pet())