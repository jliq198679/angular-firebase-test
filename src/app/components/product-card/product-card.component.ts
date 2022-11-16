import { MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductModel } from './../../models/product.interface';
import { Component, Input, OnInit } from '@angular/core';
import { removedProduct } from 'src/app/state/actions/products.actions';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor(
    private store: Store<any>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  editProduct(product: ProductModel) {

  }

  removeProduct(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      data: `¿Desea eliminar e producto selecciondo?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.store.dispatch(removedProduct({id}))
      }
    });
  }
}
