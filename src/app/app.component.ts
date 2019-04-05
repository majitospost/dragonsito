import { Component } from '@angular/core';
import { IProducto } from './products';
import { Store, select } from '@ngrx/store';
import { Add, Delete_One, Delete_all } from './counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  model: IProducto = {
    id: 0,
    codigo: '',
    descripcion: '',
    precio: 0
  };

  title = 'redux_dragonsito';

  productos: IProducto[];

  constructor(private store: Store<{producto:IProducto}>) {
    store.pipe(select('productos')).subscribe(val =>{
      this.productos = val.productos;
    });
  }

  add() {
    this.store.dispatch(new Add( this.model ))
    this.model= {
      id: 0,
      codigo: '',
      descripcion: '',
      precio: 0
    };
    
  
  }

  deleteOne(t) {
    this.store.dispatch(new Delete_One( t ));
  }

  deleteAll() {
    this.store.dispatch(new Delete_all());
  }

}
