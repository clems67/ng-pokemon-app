import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.PokemonService.searchPokemonList(term))
      //concatMap / mergeMap / SwitchMap
      //la plupart du temps on utilisera SwitchMap car on veut annuler les précédente pour ne garder que la requête la plus récente
    );
  }
  search(term: string) {
    this.searchTerms.next(term);
  }
  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemons", pokemon.id];
    this.router.navigate(link);
  }
}
