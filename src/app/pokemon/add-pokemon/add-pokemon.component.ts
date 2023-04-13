import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-add-pokemon",
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-forms [pokemon]="this.pokemon"></app-pokemon-forms>
  `,
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;
  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
