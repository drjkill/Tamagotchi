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
        }else {
        this.hunger  += 1
        this.mood    += 2
        this.fatigue += 3
        }
        return `${this.name} is playing`
    } 
    eat  (eating) {
        if(this.fatigue > 5){
        this.hunger  -= 3
        this.fatigue += 2 
        } else {
            this.hunger  -= 3
            this.fatigue += 1 
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
            this.fatigue -= 2
        }
        return `${this.name} is sleeping`
    }
    pet  (petting) {
        this.hunger  += 1
        this.mood    += 1
        return `petting ${this.name}`
    } 
    getStatus() {
        if(this.hunger > 5) {
          return "i am hungry"
        }
        if(this.fatigue > 5) {
            return "i am tired"
        }
        if(this.mood > 5) {
            return "i'm not happy"
        }
         else {
            return "I'm Happy" 
         }

    }
}    
const my_tamagotchi = new Tamagotchi(name)

console.log("Hello i'm' " + my_tamagotchi.getname())
      alert("Hallo i'm' " + my_tamagotchi.getname())

// Button Event listener
// =======================
document.addEventListener("DOMContentLoaded", function() {
    console.log("Tamagotchi - Start");
    
    function status_button_handler() {
        console.log(my_tamagotchi);
        console.log(my_tamagotchi.getStatus())
              alert(my_tamagotchi.getStatus())
    }
    document.getElementById("btn_status").addEventListener("click", status_button_handler);

    function play_button_handler() {
        my_tamagotchi.play(1)
        console.log(my_tamagotchi.play())
              alert(my_tamagotchi.play())
    }
    document.getElementById("btn_play").addEventListener("click", play_button_handler);

    function feed_button_handler() {
        my_tamagotchi.eat(1)
        console.log(my_tamagotchi.eat())
              alert(my_tamagotchi.eat())
    }
    document.getElementById("btn_feed").addEventListener("click", feed_button_handler);

    function sleep_button_handler() {
        my_tamagotchi.sleep(1)
        console.log(my_tamagotchi.sleep())
              alert(my_tamagotchi.sleep())
    }
    document.getElementById("btn_sleep").addEventListener("click", sleep_button_handler);

    function pet_button_handler() {
        my_tamagotchi.pet(1)
        console.log(my_tamagotchi.pet())
              alert(my_tamagotchi.pet())
    }
    document.getElementById("btn_pet").addEventListener("click", pet_button_handler);});


