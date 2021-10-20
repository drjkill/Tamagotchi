export class Tamagotchi {
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
    getName () {
        return this.name
    }
    
        
    play () {
        if(this.hunger < this.hunger_limit  ) {
        this.hunger  += 2
        this.mood    += 2
        this.fatigue += 3
        }
        return `${this.name} is playing`
    } 
    eat  () {
        if(this.fatigue < this.fatigue_limit ){
        this.hunger  -= 3
        this.fatigue += 2 
        } 
        return `${this.name} is eating`
    }
    sleep() {
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
    
