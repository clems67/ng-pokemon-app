import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-forms",
  templateUrl: "./pokemon-forms.component.html",
  styleUrls: ["./pokemon-forms.component.css"],
})
export class PokemonFormsComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    console.log("forms pokemon :");
    console.log(this.pokemon);
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isCheked: boolean = ($event.target as HTMLInputElement).checked;

    if (isCheked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    this.pokemonService.updatePokemon(this.pokemon).subscribe((pokemon) => {
      this.router.navigate(["/pokemons", this.pokemon.id]);
    });
  }

  isTypesValid(type: string): boolean {
    console.log(this.pokemon.types.length);
    console.log(this.hasType(type));
    console.log("------------------");
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
}
