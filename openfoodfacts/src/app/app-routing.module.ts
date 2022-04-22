import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent }, //PUNTO 2 (DA FARE: NG G C NOMECOMPONENTE)
  { path: 'item/:id', component: ItemComponent }, //PUNTO 2 (DA FARE: NG G C NOMECOMPONENTE)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
