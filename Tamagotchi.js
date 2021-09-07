"use strict";

class Tamagotchi {

    constructor(name, status) {
        this.name    = prompt("Wie soll Dein Tamagotchi heißen?");
        this.status  = status
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
    
}    
const my_tamagotchi = new Tamagotchi(name)

alert("Hallo ich bin " + my_tamagotchi.getname())
alert(my_tamagotchi.eat())
alert(my_tamagotchi.play())
alert(my_tamagotchi.sleep())
alert(my_tamagotchi.pet())