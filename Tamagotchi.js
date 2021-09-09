"use strict";

class Tamagotchi {

    constructor(name, hunger, mood, fatigue,hunger_limit, mood_limit, fatigue_limit) {
        this.name    = prompt("Wie soll Dein Tamagotchi heißen?");
        this.hunger  = hunger  = 0
        this.mood    = mood    = 0
        this.fatigue = fatigue = 0
        this.hunger_limit  =  5 
        this.mood_limit    =  5
        this.fatigue_limit =  5

    }
    getname () {
        return this.name
    }
    play () {
        if(this.hunger < this.hunger_limit) {
        this.hunger  += 2
        this.mood    += 2
        this.fatigue += 3
        }
        return `${this.name} is playing`
    } 
    eat  () {
        if(this.fatigue < this.fatigue_limit){
        this.hunger  -= 3
        this.fatigue += 2 
        } 
        return `${this.name} is eating`
    }
    sleep() {
        if(this.hunger > this.hunger_limit) {
        this.hunger  += 1
        this.mood    -= 1
        this.fatigue += 0
        }
        else {
            this.hunger  += 1
            this.mood    += 1
            this.fatigue -= 2
        }
        return `${this.name} is sleeping`
    }
    pet  () {
        this.hunger  += 1
        this.mood    += 1
        return `petting ${this.name}`
    } 
    getStatus() {
        if(this.hunger > this.hunger_limit) {
          return "i am hungry"
        }
        if(this.fatigue > this.fatigue_limit) {
            return "i am tired"
        }
        if(this.mood > this.mood_limit) {
            return "i'm not happy"
        }
         else {
            return "I'm Happy" 
         }

    }
}    
const my_tamagotchi = new Tamagotchi(name,5,5,5)

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
    document.getElementById("btn_status")?.addEventListener("click", status_button_handler);

    function play_button_handler() {
        const result =my_tamagotchi.play()
        console.log(result)
              alert(result)
    }
    document.getElementById("btn_play")?.addEventListener("click", play_button_handler);

    function feed_button_handler() {
        const result =my_tamagotchi.eat()
        console.log(result)
              alert(result)
    }
    document.getElementById("btn_feed")?.addEventListener("click", feed_button_handler);

    function sleep_button_handler() {
        const result =my_tamagotchi.sleep()
        console.log(result)
              alert(result)
    }
    document.getElementById("btn_sleep")?.addEventListener("click", sleep_button_handler);

    function pet_button_handler() {
        const result = my_tamagotchi.pet()
        console.log(result)
              alert(result)
    }
    document.getElementById("btn_pet")?.addEventListener("click", pet_button_handler);});


