export class Cards {
    constructor(pokemon){
        this.id = pokemon.id;
        this.url = pokemon.sprites.front_default;
        this.name = pokemon.name;
        this.picked = false;
    }
}