import { MatSnackBar } from '@angular/material/snack-bar';
import { ACTIONS } from './../actions/products.actions';
import { ProductsService } from './../../services/products.service';
import { Injectable, NgZone } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ACTIONS.loadProducts),
        mergeMap(() => this.productsService.get()
            .pipe(
                map(products => ({ type: ACTIONS.loadedProducts, products })),
                catchError(() => EMPTY)
            ))
    )
    );

    addProduct$ = createEffect(() => this.actions$.pipe(
      ofType(ACTIONS.addProduct),
      mergeMap((action) => this.productsService.add(action['product'])
          .pipe(
              map(() => {
                this.zone.run(() => {
                  this.snackBar.open("Producto añadido", 'X');
                })
                return ({ type: ACTIONS.addedProduct})
              }),

              catchError(() => EMPTY)
          ))
    )
    );

    editProduct$ = createEffect(() => this.actions$.pipe(
      ofType(ACTIONS.editProduct),
      mergeMap((action) => this.productsService.edit(action['product'])
          .pipe(
              map(() => {
                this.zone.run(() => {
                  this.snackBar.open("Producto actualizado", 'X');
                })
                return ({ type: ACTIONS.editedProduct })
              }),
              catchError(() => EMPTY)
          ))
    )
    );

    removeProduct$ = createEffect(() => this.actions$.pipe(
      ofType(ACTIONS.removeProduct),
      mergeMap((action) => this.productsService.remove(action['id'])
          .pipe(
              map(() => {
                this.zone.run(() => {
                  this.snackBar.open("Producto eliminado", 'X');
                })
                return ({ type: ACTIONS.removedProduct })
              }),
              catchError(() => EMPTY)
          ))
    )
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService,
        private zone: NgZone,
        private snackBar: MatSnackBar
    ) { }
}
