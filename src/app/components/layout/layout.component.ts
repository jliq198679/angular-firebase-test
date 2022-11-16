import { selectLoading } from './../../state/selectors/products.selectors';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/state/actions/products.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)

    this.store.dispatch(loadProducts())
  }

  addProduct() {

  }


}
