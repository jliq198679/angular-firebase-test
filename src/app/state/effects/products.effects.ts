import { ACTIONS } from './../actions/products.actions';
import { ProductsService } from './../../services/products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType('[Product List] Load products'),
        mergeMap(() => this.productsService.get()
            .pipe(
                map(products => ({ type: '[Product List] Loaded success', products })),
                catchError(() => EMPTY)
            ))
    )
    );

    addProduct$ = createEffect(() => this.actions$.pipe(
      ofType(ACTIONS.addProduct),
      mergeMap((product) => this.productsService.add(product)
          .pipe(
              map(product => ({ type: ACTIONS.addedProduct, product })),
              catchError(() => EMPTY)
          ))
    )
    );

    editProduct$ = createEffect(() => this.actions$.pipe(
      ofType(ACTIONS.editProduct),
      mergeMap((product) => this.productsService.edit(product)
          .pipe(
              map(product => ({ type: ACTIONS.editedProduct, product })),
              catchError(() => EMPTY)
          ))
    )
    );

    removeProduct$ = createEffect(() => this.actions$.pipe(
      ofType(ACTIONS.removeProduct),
      mergeMap((id) => this.productsService.remove(id)
          .pipe(
              map(id => ({ type: ACTIONS.removedProduct, id })),
              catchError(() => EMPTY)
          ))
    )
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) { }
}
