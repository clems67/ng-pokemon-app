import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

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
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log(`Vous avez sélectionné le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez sélectionné un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
