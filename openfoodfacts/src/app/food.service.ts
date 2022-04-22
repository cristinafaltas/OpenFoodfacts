import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService { // NG G S NOMEFILE(IN QUESTO CASO HO SCRITTO FOOD)(QUESTO CREA IL SERVIZIO PUNTO 4)
  constructor(private http: HttpClient) {}

  searchProduct(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=9&json=true`; //PUNTO 4
    let obsTracks = this.http.get(url); //PUNTO 4
    return obsTracks; //PUNTO 4
  }

  searchId(query: any) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${query}`;
    let obsTracks = this.http.get(url);
    return obsTracks;
  }
}
