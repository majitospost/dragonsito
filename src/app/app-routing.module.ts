import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { Reducer } from './counter.reducer';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreModule.forFeature('productos', Reducer)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
