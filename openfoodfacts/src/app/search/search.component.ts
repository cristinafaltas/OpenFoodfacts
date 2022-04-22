import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service'; //IMPORTARE IL SERVIZIO (PUNTO 4A)

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  obsProduct: Observable<Object> | undefined;
  results: any;

  constructor(public food: FoodService) {} //INSERIRE IL SERVIZIO APPENA IMPORTATO PER POTERLO UTILIZZARE (PUNTO 4A)

  ngOnInit(): void {}

  submit(query: HTMLInputElement): void { //INIZIO PUNTO 4 TUTTO QUESTO BLOCCO
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProduct = this.food.searchProduct(this.query);
    this.obsProduct.subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  } //FINE PUNTO 4

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}
