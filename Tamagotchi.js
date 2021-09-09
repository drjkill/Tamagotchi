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

document.addEventListener("DOMContentLoaded", function() {
    console.log("Eprobots JS Tutorial - Start");
    function startstop_button_handler(){console.log("start stop button clicked");}
    document.getElementById("btn_start_stop").addEventListener("click", startstop_button_handler);

    function play_button_handler(){console.log("play button clicked");}
    document.getElementById("btn_play").addEventListener("click", play_button_handler);

    function feed_button_handler(){console.log("feed button clicked");}
    document.getElementById("btn_feed").addEventListener("click", feed_button_handler);

    function sleep_button_handler(){console.log("sleep button clicked");}
    document.getElementById("btn_sleep").addEventListener("click", sleep_button_handler);

    function pet_button_handler(){console.log("pet button clicked");}
    document.getElementById("btn_pet").addEventListener("click", pet_button_handler);});





















/* Ausgabe in Konsole
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
*/





