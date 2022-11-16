import { addedProduct, addProduct } from './../../state/actions/products.actions';
import { ProductModel } from './../../models/product.interface';
import { ProductEditorComponent } from './../product-editor/product-editor.component';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private store: Store<any>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)

    this.store.dispatch(loadProducts())
  }

  showProductEditor() {
    this.dialog.open(ProductEditorComponent, { width: "40%"})
    .afterClosed()
    .subscribe(async (product: ProductModel) => {
      if (product) {
        this.store.dispatch(addProduct({product}));
      }
    });
  }

}
