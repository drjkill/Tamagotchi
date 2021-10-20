//import { Tamagotchi } from "./Tamagotchi";
 class Tamagotchi {
    name:                  string
    hunger:                number
    mood:                  number
    fatigue:               number
    private hunger_limit:  number
    private mood_limit:    number
    private fatigue_limit: number
 
    constructor(name: string, hunger: number, mood: number, fatigue: number) {
        this.name    = name//prompt("Wie soll Dein Tamagotchi heißen?");
        this.hunger  = hunger  = 0
        this.mood    = mood    = 0
        this.fatigue = fatigue = 0
        this.hunger_limit  =  5 
        this.mood_limit    =  5
        this.fatigue_limit =  5
    }
    getName ():string {
        return this.name
    }
    
        
    play ():string {
        if(this.hunger < this.hunger_limit  ) {
        this.hunger  += 2
        this.mood    += 2
        this.fatigue += 3
        }
        return `${this.name} is playing`
    } 
    eat  ():string {
        if(this.fatigue < this.fatigue_limit ){
        this.hunger  -= 3
        this.fatigue += 2 
        } 
        return `${this.name} is eating`
    }
    sleep():string {
        if(this.hunger > this.hunger_limit ) {
        this.hunger  += 1
        this.mood    -= 1
        this.fatigue = 0
        }
        else {
            this.hunger  += 1
            this.mood    += 1
            this.fatigue = 0
        }
        return `${this.name} is sleeping`
    }
    pet  ():string {    
        this.hunger  += 1
        this.mood    += 1        
        return `petting ${this.name}`
    } 

    getStatus():string {
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
    


const myTamagotchi = new Tamagotchi("name",0,0,0)

console.log("Hello i'm " + myTamagotchi.getName())
// @ts-ignore
document.getElementById("output_name").innerHTML = "Hello i'm " + myTamagotchi.getName()

// Button Event listener
// =======================
document.addEventListener("DOMContentLoaded", function() {
    console.log("Tamagotchi - Start");
    
    function status_button_handler() {
        console.log(myTamagotchi);
        console.log(myTamagotchi.getStatus())
        // @ts-ignore
        document.getElementById("output_status").innerHTML = myTamagotchi.getStatus()
    }
    document.getElementById("btn_status")?.addEventListener("click", status_button_handler);

    function play_button_handler() {
        const result =myTamagotchi.play()        
        // @ts-ignore
        document.getElementById("output_action").innerHTML = result 
    }
    document.getElementById("btn_play")?.addEventListener("click", play_button_handler);

    function feed_button_handler() {
        const result =myTamagotchi.eat()
        // @ts-ignore
        document.getElementById("output_action").innerHTML = result
    }
    document.getElementById("btn_feed")?.addEventListener("click", feed_button_handler);

    function sleep_button_handler() {
        const result =myTamagotchi.sleep()
        // @ts-ignore
        document.getElementById("output_action").innerHTML = result
    }
    document.getElementById("btn_sleep")?.addEventListener("click", sleep_button_handler);

    function pet_button_handler() {
        const result = myTamagotchi.pet()
        // @ts-ignore
        document.getElementById("output_action").innerHTML = result
    }
    document.getElementById("btn_pet")?.addEventListener("click", pet_button_handler);});

