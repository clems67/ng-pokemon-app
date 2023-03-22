import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name} (list)`);
  }

  selectOnEvent(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value; //+ or use Number()
    //if input empty => null => 0
    console.log(
      `Vous avez cliqué sur le pokémon ${this.pokemonList[index].name} (event)`
    );
  }

  selectPokemonId(pokemonId: string) {
    const id = +pokemonId;
    console.log(
      `Vous avez sélectionné l'id du pokémon ${this.pokemonList[id].name}`
    );
  }
}
